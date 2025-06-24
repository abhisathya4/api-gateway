import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as organizationPb from "../../grpc/generated/organization_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  createOrganizationRequestSchema,
  createOrganizationResponseSchema,
  getOrganizationRequestSchema,
  getOrganizationResponseSchema,
  updateOrganizationRequestSchema,
  updateOrganizationResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

extendZodWithOpenApi(z);

export const organizationRoutes = new Hono()
  .post(
    "/create",
    describeRoute({
      summary: "Create Organization",
      description: "Create a new organization at the system level",
      tags: ["Organization"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(createOrganizationRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Organization created successfully",
          content: {
            "application/json": {
              schema: resolver(createOrganizationResponseSchema) as any,
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
    zValidator("json", createOrganizationRequestSchema),
    async (c) => {
      try {
        const requestData = await c.req.json();

        // Create gRPC request
        const grpcRequest = new organizationPb.CreateOrganizationRequest();

        // Set organization parameters
        const orgParams = new organizationPb.Organization();
        orgParams.setName(requestData.org_params.name);
        orgParams.setAuthId(requestData.org_params.auth_id);
        orgParams.setSecurityLevel(requestData.org_params.security_level);
        if (requestData.org_params.id) {
          orgParams.setId(requestData.org_params.id);
        }

        grpcRequest.setOrgParams(orgParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getOrganizationClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<organizationPb.CreateOrganizationResponse>(
              (callback) => client.createOrganization(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const org = response.getOrg()?.toObject();
          const businesses = response
            .getBusinessList()
            .map((b) => b.toObject());
          const configs = response
            .getConfigList()
            .map((config) => config.toObject());

          const responseData = {
            org: {
              id: org?.id,
              name: org?.name,
              auth_id: org?.authId,
              security_level: org?.securityLevel,
            },
            business: businesses.map((b) => ({
              id: b.id,
              name: b.name,
              type: b.type,
              billing_type: b.billingType,
              tenant_id: b.tenantId,
            })),
            config: configs.map((c) => ({
              id: c.id,
              organization_id: c.organizationId,
              default_post_fup_id: c.defaultPostFupId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error creating organization:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.ALREADY_EXISTS) {
            return c.json({ error: "Organization already exists" }, 409);
          }

          return c.json({ error: "Failed to create organization" }, 500);
        }
      } catch (error) {
        console.error("Error in create organization route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/",
    describeRoute({
      summary: "Get Organization",
      description: "Get organization details with authentication",
      tags: ["Organization"],
      responses: {
        200: {
          description: "Organization details retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getOrganizationResponseSchema) as any,
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

        // Create gRPC request
        const grpcRequest = new organizationPb.GetOrganizationRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getOrganizationClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<organizationPb.GetOrganizationResponse>(
              (callback) => client.getOrganization(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const organization = response.getOrganization()?.toObject();

          const responseData = {
            organization: {
              id: organization?.id,
              name: organization?.name,
              auth_id: organization?.authId,
              security_level: organization?.securityLevel,
            },
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting organization:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Organization not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get organization" }, 500);
        }
      } catch (error) {
        console.error("Error in get organization route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/update",
    describeRoute({
      summary: "Update Organization",
      description: "Update organization details with authentication",
      tags: ["Organization"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updateOrganizationRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Organization updated successfully",
          content: {
            "application/json": {
              schema: resolver(updateOrganizationResponseSchema) as any,
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
    zValidator("json", updateOrganizationRequestSchema),
    async (c) => {
      try {
        const requestData = await c.req.json();
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new organizationPb.UpdateOrganizationRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        // Remove tenant ID setting as it's not needed
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set organization parameters to update
        const orgParams =
          new organizationPb.UpdateOrganizationRequest.OrganizationParams();
        if (requestData.org_params.name) {
          orgParams.setName(requestData.org_params.name);
        }

        grpcRequest.setOrgParams(orgParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getOrganizationClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<organizationPb.UpdateOrganizationResponse>(
              (callback) => client.updateOrganization(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const updatedOrg = response.getUpdatedOrg()?.toObject();
          const updatedBusinesses = response
            .getUpdatedBusinessList()
            .map((b) => b.toObject());

          const responseData = {
            updated_org: {
              id: updatedOrg?.id,
              name: updatedOrg?.name,
              auth_id: updatedOrg?.authId,
              security_level: updatedOrg?.securityLevel,
            },
            updated_business: updatedBusinesses.map((b) => ({
              id: b.id,
              name: b.name,
              type: b.type,
              billing_type: b.billingType,
              tenant_id: b.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error updating organization:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Organization not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to update organization" }, 500);
        }
      } catch (error) {
        console.error("Error in update organization route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
