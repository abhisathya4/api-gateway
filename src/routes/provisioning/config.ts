import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as configPb from "../../grpc/generated/config_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  getOrganizationConfigRequestSchema,
  getOrganizationConfigResponseSchema,
  updateOrganizationConfigRequestSchema,
  updateOrganizationConfigResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

extendZodWithOpenApi(z);

export const configRoutes = new Hono()
  .get(
    "/organization",
    describeRoute({
      summary: "Get Organization Configuration",
      description: "Retrieves configuration for the organization",
      tags: ["Configuration"],
      responses: {
        200: {
          description: "Configuration retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getOrganizationConfigResponseSchema),
            },
          },
        },
        404: {
          description: "Configuration not found",
          content: {
            "application/json": {
              schema: resolver(errorSchema),
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: resolver(errorSchema),
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
        const grpcRequest = new configPb.GetOrganizationConfigRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getConfigClient();

        return new Promise((resolve, reject) => {
          client.getOrganizationConfig(grpcRequest, (error, response) => {
            if (error) {
              console.error("Error getting organization config:", error);

              if (error.code === Status.NOT_FOUND) {
                return resolve(
                  c.json({ error: "Configuration not found" }, 404)
                );
              } else if (error.code === Status.PERMISSION_DENIED) {
                return resolve(c.json({ error: "Permission denied" }, 403));
              }

              return resolve(
                c.json(
                  { error: "Failed to get organization configuration" },
                  500
                )
              );
            }

            // Convert gRPC response to our schema format
            const config = response.getConfig()?.toObject();

            if (!config) {
              return resolve(c.json({ error: "No configuration found" }, 404));
            }

            const responseData = {
              config: {
                id: config.id,
                organization_id: config.organizationId,
                default_post_fup_id: config.defaultPostFupId || null,
              },
            };

            resolve(c.json(responseData, 200));
          });
        });
      } catch (error) {
        console.error("Error in get organization config route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/organization",
    describeRoute({
      summary: "Update Organization Configuration",
      description: "Updates configuration for the organization",
      tags: ["Configuration"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updateOrganizationConfigRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Configuration updated successfully",
          content: {
            "application/json": {
              schema: resolver(updateOrganizationConfigResponseSchema),
            },
          },
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              schema: resolver(errorSchema),
            },
          },
        },
        404: {
          description: "Configuration not found",
          content: {
            "application/json": {
              schema: resolver(errorSchema),
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: resolver(errorSchema),
            },
          },
        },
      },
    }),
    zValidator("json", updateOrganizationConfigRequestSchema),
    authMiddleware,
    async (c) => {
      try {
        const requestData = await c.req.json();
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new configPb.UpdateOrganizationConfigRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set config parameters
        const configParams =
          new configPb.UpdateOrganizationConfigRequest.ConfigParams();
        configParams.setOrganizationId(
          requestData.config_params.organization_id
        );

        if (requestData.config_params.default_post_fup_id) {
          configParams.setDefaultPostFupId(
            requestData.config_params.default_post_fup_id
          );
        }

        grpcRequest.setConfigParams(configParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getConfigClient();

        return new Promise((resolve, reject) => {
          client.updateOrganizationConfig(grpcRequest, (error, response) => {
            if (error) {
              console.error("Error updating organization config:", error);

              if (error.code === Status.NOT_FOUND) {
                return resolve(
                  c.json({ error: "Configuration not found" }, 404)
                );
              } else if (error.code === Status.INVALID_ARGUMENT) {
                return resolve(
                  c.json({ error: "Invalid request parameters" }, 400)
                );
              } else if (error.code === Status.PERMISSION_DENIED) {
                return resolve(c.json({ error: "Permission denied" }, 403));
              }

              return resolve(
                c.json(
                  { error: "Failed to update organization configuration" },
                  500
                )
              );
            }

            // Convert gRPC response to our schema format
            const configs = response.getConfigList().map((c) => c.toObject());

            const responseData = {
              config: configs.map((config) => ({
                id: config.id,
                organization_id: config.organizationId,
                default_post_fup_id: config.defaultPostFupId || null,
              })),
            };

            resolve(c.json(responseData, 200));
          });
        });
      } catch (error) {
        console.error("Error in update organization config route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
