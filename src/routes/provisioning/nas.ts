// src/routes/provisioning/nas.ts
import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as nasPb from "../../grpc/generated/nas_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  getNASDeviceResponseSchema,
  registerNasDeviceRequestSchema,
  registerNasDeviceResponseSchema,
  selectNasDeviceSchema,
  sysRegisterNasDeviceRequestSchema,
  updateNasDeviceRequestSchema,
  updateNasDeviceResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const nasRoutes = new Hono()
  .get(
    "/",
    describeRoute({
      summary: "Get NAS Devices",
      description: "Get all NAS devices",
      tags: ["NAS"],
      parameters: [
        {
          name: "limit",
          in: "query",
          required: false,
          schema: { type: "integer", default: 10 },
          description: "Pagination limit",
        },
        {
          name: "offset",
          in: "query",
          required: false,
          schema: { type: "integer", default: 0 },
          description: "Pagination offset",
        },
        {
          name: "search",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Search term to filter by name, username, or email",
        },
        {
          name: "types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of nas types to filter by",
        },
        {
          name: "locations",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of nas locations to filter by",
        },
        {
          name: "servers",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of nas servers to filter by",
        },
        {
          name: "communities",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of nas communities to filter by",
        },
        {
          name: "status",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "boolean" } },
          description: "List of status values to filter by (active/inactive)",
        },
      ],
      responses: {
        200: {
          description: "NAS devices retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getNASDeviceResponseSchema) as any,
            },
          },
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
      },
    }),
    authMiddleware,
    async (c) => {
      try {
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        const authContext = new commonPb.AuthContext();
        authContext.setTenantId(tenant_id);
        authContext.setToken(token);

        // Create gRPC request
        const grpcRequest = new nasPb.GetNasDevicesRequest();
        grpcRequest.setAuthContext(authContext);

        // Set pagination parameters
        const limit = parseInt(c.req.query("limit") || "10");
        const offset = parseInt(c.req.query("offset") || "0");
        grpcRequest.setLimit(limit);
        grpcRequest.setOffset(offset);

        // Set filter parameters
        const search = c.req.query("search");
        if (search) {
          grpcRequest.setSearch(search);
        }

        // Handle types parameter (both with and without brackets)
        let types = c.req.queries("types");
        if (!types || types.length === 0) {
          types = c.req.queries("types[]");
        }
        if (types && types.length > 0) {
          grpcRequest.setTypesList(types);
        }

        // Handle locations parameter (both with and without brackets)
        let locations = c.req.queries("locations");
        if (!locations || locations.length === 0) {
          locations = c.req.queries("locations[]");
        }
        if (locations && locations.length > 0) {
          grpcRequest.setLocationsList(locations);
        }

        // Handle servers parameter (both with and without brackets)
        let servers = c.req.queries("servers");
        if (!servers || servers.length === 0) {
          servers = c.req.queries("servers[]");
        }
        if (servers && servers.length > 0) {
          grpcRequest.setServersList(servers);
        }

        // Handle communities parameter (both with and without brackets)
        let communities = c.req.queries("communities");
        if (!communities || communities.length === 0) {
          communities = c.req.queries("communities[]");
        }
        if (communities && communities.length > 0) {
          grpcRequest.setCommunitiesList(communities);
        }

        // Handle status parameter (both with and without brackets)
        let statusValues = c.req.queries("status");
        if (!statusValues || statusValues.length === 0) {
          statusValues = c.req.queries("status[]");
        }
        if (statusValues && statusValues.length > 0) {
          grpcRequest.setStatusList(statusValues.map((s) => s === "true"));
        }

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getNasClient();

        try {
          const response = await promisifyGrpcCall<nasPb.GetNasDevicesResponse>(
            (callback) => client.getNasDevices(grpcRequest, callback)
          );

          const nasDevices = response.getDataList().map((p) => p.toObject());
          const meta = response.getMeta()?.toObject();

          const responseData: z.infer<typeof getNASDeviceResponseSchema> = {
            data: selectNasDeviceSchema.array().parse(
              nasDevices.map((nasDevice) => ({
                id: nasDevice.id,
                nasname: nasDevice.nasname,
                shortname: nasDevice.shortname,
                type: nasDevice.type,
                ports: nasDevice.ports,
                secret: nasDevice.secret,
                server: nasDevice.server,
                community: nasDevice.community,
                description: nasDevice.description,
                location: nasDevice.location,
                active: nasDevice.active,
                last_seen: nasDevice.lastSeen,
                require_ma: nasDevice.requireMa,
                limit_proxy_state: nasDevice.limitProxyState,
                tenantId: nasDevice.tenantId,
                active_sessions: nasDevice.activeSessions,
              }))
            ),
            meta: meta ? {
              limit: meta.limit,
              offset: meta.offset,
              total: meta.total,
            } : undefined,
          };
          
          // Return response
          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting NAS devices:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get NAS devices" }, 500);
        }
      } catch (error) {
        console.error("Error in get NAS devices route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .post(
    "/register",
    describeRoute({
      summary: "Register NAS Device",
      description: "Register a new NAS device with authentication",
      tags: ["NAS"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(registerNasDeviceRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "NAS device registered successfully",
          content: {
            "application/json": {
              schema: resolver(registerNasDeviceResponseSchema) as any,
            },
          },
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
      },
    }),
    authMiddleware,
    zValidator("json", registerNasDeviceRequestSchema),
    async (c) => {
      try {
        const requestData = await c.req.json();
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        // Create gRPC request
        const grpcRequest = new nasPb.RegisterNasDeviceRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setTenantId(tenant_id);
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set device parameters
        const deviceParams = new nasPb.RegisterNasDeviceRequest.DeviceParams();
        deviceParams.setNasname(requestData.device_params.nasname);
        deviceParams.setShortname(requestData.device_params.shortname);
        deviceParams.setType(requestData.device_params.type);
        deviceParams.setSecret(requestData.device_params.secret);

        if (requestData.device_params.ports !== undefined) {
          deviceParams.setPorts(requestData.device_params.ports);
        }
        if (requestData.device_params.server) {
          deviceParams.setServer(requestData.device_params.server);
        }
        if (requestData.device_params.community) {
          deviceParams.setCommunity(requestData.device_params.community);
        }
        if (requestData.device_params.description) {
          deviceParams.setDescription(requestData.device_params.description);
        }
        if (requestData.device_params.location) {
          deviceParams.setLocation(requestData.device_params.location);
        }
        if (requestData.device_params.active) {
          deviceParams.setActive(requestData.device_params.active);
        }
        if (requestData.device_params.require_ma) {
          deviceParams.setRequireMa(requestData.device_params.require_ma);
        }
        if (requestData.device_params.limit_proxy_state) {
          deviceParams.setLimitProxyState(
            requestData.device_params.limit_proxy_state
          );
        }

        grpcRequest.setDeviceParams(deviceParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getNasClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<nasPb.RegisterNasDeviceResponse>(
              (callback) => client.registerNasDevice(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const nasDevices = response
            .getNasDevicesList()
            .map((n) => n.toObject());

          const responseData = {
            nas_devices: nasDevices.map((device) => ({
              id: device.id,
              nasname: device.nasname,
              shortname: device.shortname,
              type: device.type,
              ports: device.ports,
              secret: device.secret,
              server: device.server,
              community: device.community,
              description: device.description,
              require_ma: device.requireMa,
              limit_proxy_state: device.limitProxyState,
              tenant_id: device.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error registering NAS device:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.ALREADY_EXISTS) {
            return c.json({ error: "NAS device already exists" }, 409);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to register NAS device" }, 500);
        }
      } catch (error) {
        console.error("Error in register NAS device route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .post(
    "/sys-register",
    describeRoute({
      summary: "System Register NAS Device",
      description: "Register a new NAS device at the system level",
      tags: ["NAS"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(sysRegisterNasDeviceRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "NAS device registered successfully",
          content: {
            "application/json": {
              schema: resolver(registerNasDeviceResponseSchema) as any,
            },
          },
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
      },
    }),
    zValidator("json", sysRegisterNasDeviceRequestSchema),
    async (c) => {
      try {
        const requestData = await c.req.json();

        // Create gRPC request
        const grpcRequest = new nasPb.SysRegisterNasDeviceRequest();

        // Set device parameters
        const deviceParams =
          new nasPb.SysRegisterNasDeviceRequest.DeviceParams();
        deviceParams.setNasname(requestData.device_params.nasname);
        deviceParams.setShortname(requestData.device_params.shortname);
        deviceParams.setType(requestData.device_params.type);
        deviceParams.setSecret(requestData.device_params.secret);

        if (requestData.device_params.ports !== undefined) {
          deviceParams.setPorts(requestData.device_params.ports);
        }
        if (requestData.device_params.server) {
          deviceParams.setServer(requestData.device_params.server);
        }
        if (requestData.device_params.community) {
          deviceParams.setCommunity(requestData.device_params.community);
        }
        if (requestData.device_params.description) {
          deviceParams.setDescription(requestData.device_params.description);
        }
        if (requestData.device_params.location) {
          deviceParams.setLocation(requestData.device_params.location);
        }
        if (requestData.device_params.active) {
          deviceParams.setActive(requestData.device_params.active);
        }
        if (requestData.device_params.require_ma) {
          deviceParams.setRequireMa(requestData.device_params.require_ma);
        }
        if (requestData.device_params.limit_proxy_state) {
          deviceParams.setLimitProxyState(
            requestData.device_params.limit_proxy_state
          );
        }
        deviceParams.setTenantId(
          requestData.device_params.tenant_id
        );

        grpcRequest.setDeviceParams(deviceParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getNasClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<nasPb.RegisterNasDeviceResponse>(
              (callback) => client.sysRegisterNasDevice(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const nasDevices = response
            .getNasDevicesList()
            .map((n) => n.toObject());

          const responseData = {
            nas_devices: nasDevices.map((device) => ({
              id: device.id,
              nasname: device.nasname,
              shortname: device.shortname,
              type: device.type,
              ports: device.ports,
              secret: device.secret,
              server: device.server,
              community: device.community,
              description: device.description,
              require_ma: device.requireMa,
              limit_proxy_state: device.limitProxyState,
              tenant_id: device.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error system registering NAS device:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.ALREADY_EXISTS) {
            return c.json({ error: "NAS device already exists" }, 409);
          }

          return c.json({ error: "Failed to register NAS device" }, 500);
        }
      } catch (error) {
        console.error("Error in system register NAS device route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/:nasId",
    describeRoute({
      summary: "Update NAS Device",
      description: "Update an existing NAS device",
      tags: ["NAS"],
      parameters: [
        {
          name: "nasId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "NAS device ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updateNasDeviceRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "NAS device updated successfully",
          content: {
            "application/json": {
              schema: resolver(updateNasDeviceResponseSchema) as any,
            },
          },
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
        404: {
          description: "NAS device not found",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: resolver(errorSchema) as any,
            },
          },
        },
      },
    }),
    authMiddleware,
    zValidator("json", updateNasDeviceRequestSchema),
    async (c) => {
      try {
        const nasId = c.req.param("nasId");
        const requestData = await c.req.valid("json");
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        // Validate NAS ID
        if (!nasId || !z.string().uuid().safeParse(nasId).success) {
          return c.json({ error: "Invalid NAS device ID" }, 400);
        }

        // Create gRPC request
        const grpcRequest = new nasPb.UpdateNasDeviceRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setTenantId(tenant_id);
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set device parameters
        const deviceParams = new nasPb.UpdateNasDeviceRequest.DeviceParams();
        deviceParams.setId(nasId);
        deviceParams.setNasname(requestData.device_params.nasname);
        deviceParams.setShortname(requestData.device_params.shortname);
        deviceParams.setType(requestData.device_params.type);
        deviceParams.setSecret(requestData.device_params.secret);

        if (requestData.device_params.ports || requestData.device_params.ports === 0) {
          deviceParams.setPorts(requestData.device_params.ports);
        }
        if (requestData.device_params.server) {
          deviceParams.setServer(requestData.device_params.server);
        }
        if (requestData.device_params.community) {
          deviceParams.setCommunity(requestData.device_params.community);
        }
        if (requestData.device_params.description) {
          deviceParams.setDescription(requestData.device_params.description);
        }
        if (requestData.device_params.location) {
          deviceParams.setLocation(requestData.device_params.location);
        }
        if (requestData.device_params.active !== undefined && requestData.device_params.active !== null) {
          deviceParams.setActive(requestData.device_params.active);
        }
        if (requestData.device_params.require_ma) {
          deviceParams.setRequireMa(requestData.device_params.require_ma);
        }
        if (requestData.device_params.limit_proxy_state) {
          deviceParams.setLimitProxyState(
            requestData.device_params.limit_proxy_state
          );
        }
        if (requestData.device_params.tenant_id) {
          deviceParams.setTenantId(requestData.device_params.tenant_id);
        }

        grpcRequest.setDeviceParams(deviceParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getNasClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<nasPb.UpdateNasDeviceResponse>(
              (callback) => client.updateNasDevice(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const nasDevices = response
            .getNasDevicesList()
            .map((n) => n.toObject());

          const responseData = {
            nas_devices: nasDevices.map((device) => ({
              id: device.id,
              nasname: device.nasname,
              shortname: device.shortname,
              type: device.type,
              ports: device.ports,
              secret: device.secret,
              server: device.server,
              community: device.community,
              description: device.description,
              location: device.location,
              active: device.active,
              lastSeen: device.lastSeen,
              require_ma: device.requireMa,
              limit_proxy_state: device.limitProxyState,
              tenant_id: device.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error updating NAS device:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "NAS device not found" }, 404);
          } else if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to update NAS device" }, 500);
        }
      } catch (error) {
        console.error("Error in update NAS device route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
