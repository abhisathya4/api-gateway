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
  registerNasDeviceRequestSchema,
  registerNasDeviceResponseSchema,
  sysRegisterNasDeviceRequestSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const nasRoutes = new Hono()
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
        deviceParams.setOrganizationId(
          requestData.device_params.organization_id
        );

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
  );
