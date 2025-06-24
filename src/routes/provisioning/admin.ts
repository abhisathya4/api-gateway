import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as adminPb from "../../grpc/generated/admin_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  createAdminRequestSchema,
  createAdminResponseSchema,
  getAdminRequestSchema,
  getAdminResponseSchema,
  getAllAdminsRequestSchema,
  getAllAdminsResponseSchema,
  updateAdminRequestSchema,
  updateAdminResponseSchema,
  deleteAdminRequestSchema,
  deleteAdminResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const adminRoutes = new Hono()
  .post(
    "/create",
    describeRoute({
      summary: "Create Admin",
      description: "Creates a new administrator for an organization",
      tags: ["Admin"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(createAdminRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Admin created successfully",
          content: {
            "application/json": {
              schema: resolver(createAdminResponseSchema) as any,
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
    zValidator("json", createAdminRequestSchema),
    async (c) => {
      try {
        const requestData = await c.req.json();

        // Create gRPC request
        const grpcRequest = new adminPb.CreateAdminRequest();

        // Set admin parameters
        const adminParams = new adminPb.CreateAdminRequest.AdminParams();
        adminParams.setId(requestData.admin_params.id);
        adminParams.setOrganizationId(requestData.admin_params.organization_id);
        adminParams.setEmail(requestData.admin_params.email);
        adminParams.setName(requestData.admin_params.name);
        adminParams.setAuthId(requestData.admin_params.auth_id);

        grpcRequest.setAdminParams(adminParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getAdminClient();

        return new Promise((resolve, reject) => {
          client.createAdmin(grpcRequest, (error, response) => {
            if (error) {
              console.error("Error creating admin:", error);

              // Map gRPC error codes to appropriate HTTP status codes
              if (error.code === Status.ALREADY_EXISTS) {
                return resolve(c.json({ error: "Admin already exists" }, 409));
              } else if (error.code === Status.INVALID_ARGUMENT) {
                return resolve(
                  c.json({ error: "Invalid request parameters" }, 400)
                );
              } else if (error.code === Status.PERMISSION_DENIED) {
                return resolve(c.json({ error: "Permission denied" }, 403));
              }

              return resolve(c.json({ error: "Failed to create admin" }, 500));
            }

            // Convert gRPC response to our schema format
            const admins = response
              .getAdminsList()
              .map((admin) => admin.toObject());

            const responseData = {
              data: admins.map((admin) => ({
                id: admin.id,
                organization_id: admin.organizationId,
                email: admin.email,
                name: admin.name,
                auth_id: admin.authId,
                created_at: admin.createdAt,
              })),
            };

            resolve(c.json(responseData, 200));
          });
        });
      } catch (error) {
        console.error("Error in create admin route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/:filter/:value",
    describeRoute({
      summary: "Get Admin",
      description: "Get admin details by ID, email, or auth_id",
      tags: ["Admin"],
      parameters: [
        {
          name: "filter",
          in: "path",
          required: true,
          schema: { type: "string", enum: ["id", "email", "auth_id"] },
          description: "Filter type: 'id', 'email', or 'auth_id'",
        },
        {
          name: "value",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Filter value",
        },
        {
          name: "organization_id",
          in: "query",
          required: true,
          schema: { type: "string" },
          description: "Organization ID",
        },
      ],
      responses: {
        200: {
          description: "Admin details retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getAdminResponseSchema) as any,
            },
          },
        },
        404: {
          description: "Admin not found",
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
        const filter = c.req.param("filter");
        const value = c.req.param("value");

        if (!["id", "email", "auth_id"].includes(filter)) {
          return c.json(
            { error: "Filter must be one of: id, email, auth_id" },
            400
          );
        }

        // Create gRPC request
        const grpcRequest = new adminPb.GetAdminRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        grpcRequest.setFilter(filter);
        grpcRequest.setValue(value);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getAdminClient();

        return new Promise((resolve, reject) => {
          client.getAdmin(grpcRequest, (error, response) => {
            if (error) {
              console.error("Error getting admin:", error);

              if (error.code === Status.NOT_FOUND) {
                return resolve(c.json({ error: "Admin not found" }, 404));
              } else if (error.code === Status.PERMISSION_DENIED) {
                return resolve(c.json({ error: "Permission denied" }, 403));
              }

              return resolve(c.json({ error: "Failed to get admin" }, 500));
            }

            const admin = response.getAdmin()?.toObject();

            if (!admin) {
              return resolve(c.json({ error: "Admin not found" }, 404));
            }

            const responseData = {
              admin: {
                id: admin.id,
                organization_id: admin.organizationId,
                email: admin.email,
                name: admin.name,
                auth_id: admin.authId,
                created_at: admin.createdAt,
              },
            };

            resolve(c.json(responseData, 200));
          });
        });
      } catch (error) {
        console.error("Error in get admin route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/",
    describeRoute({
      summary: "List Admins",
      description: "List all administrators for an organization",
      tags: ["Admin"],
      responses: {
        200: {
          description: "Admins retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getAllAdminsResponseSchema) as any,
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
        const grpcRequest = new adminPb.GetAllAdminsRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getAdminClient();

        return new Promise((resolve, reject) => {
          client.getAllAdmins(grpcRequest, (error, response) => {
            if (error) {
              console.error("Error listing admins:", error);

              if (error.code === Status.PERMISSION_DENIED) {
                return resolve(c.json({ error: "Permission denied" }, 403));
              }

              return resolve(c.json({ error: "Failed to list admins" }, 500));
            }

            const admins = response
              .getAdminsList()
              .map((admin) => admin.toObject());

            const responseData = {
              admins: admins.map((admin) => ({
                id: admin.id,
                organization_id: admin.organizationId,
                email: admin.email,
                name: admin.name,
                auth_id: admin.authId,
                created_at: admin.createdAt,
              })),
            };

            resolve(c.json(responseData, 200));
          });
        });
      } catch (error) {
        console.error("Error in list admins route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/:adminId",
    describeRoute({
      summary: "Update Admin",
      description: "Update administrator details",
      tags: ["Admin"],
      parameters: [
        {
          name: "adminId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Admin ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updateAdminRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Admin updated successfully",
          content: {
            "application/json": {
              schema: resolver(updateAdminResponseSchema) as any,
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
          description: "Admin not found",
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
    zValidator("json", updateAdminRequestSchema),
    authMiddleware,
    async (c) => {
      try {
        const adminId = c.req.param("adminId");
        const requestData = await c.req.json();

        // Create gRPC request
        const grpcRequest = new adminPb.UpdateAdminRequest();
        grpcRequest.setAdminId(adminId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(c.var.token);
        grpcRequest.setAuthContext(authContext);

        // Set admin parameters
        const adminParams = new adminPb.UpdateAdminRequest.AdminParams();
        if (requestData.admin_params.email) {
          adminParams.setEmail(requestData.admin_params.email);
        }
        if (requestData.admin_params.name) {
          adminParams.setName(requestData.admin_params.name);
        }
        if (requestData.admin_params.auth_id) {
          adminParams.setAuthId(requestData.admin_params.auth_id);
        }
        if (requestData.admin_params.organization_id) {
          adminParams.setOrganizationId(
            requestData.admin_params.organization_id
          );
        }

        grpcRequest.setAdminParams(adminParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getAdminClient();

        return new Promise((resolve, reject) => {
          client.updateAdmin(grpcRequest, (error, response) => {
            if (error) {
              console.error("Error updating admin:", error);

              if (error.code === Status.NOT_FOUND) {
                return resolve(c.json({ error: "Admin not found" }, 404));
              } else if (error.code === Status.INVALID_ARGUMENT) {
                return resolve(
                  c.json({ error: "Invalid request parameters" }, 400)
                );
              } else if (error.code === Status.PERMISSION_DENIED) {
                return resolve(c.json({ error: "Permission denied" }, 403));
              }

              return resolve(c.json({ error: "Failed to update admin" }, 500));
            }

            const admins = response
              .getAdminsList()
              .map((admin) => admin.toObject());

            const responseData = {
              admins: admins.map((admin) => ({
                id: admin.id,
                organization_id: admin.organizationId,
                email: admin.email,
                name: admin.name,
                auth_id: admin.authId,
                created_at: admin.createdAt,
              })),
            };

            resolve(c.json(responseData, 200));
          });
        });
      } catch (error) {
        console.error("Error in update admin route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .delete(
    "/:adminId",
    describeRoute({
      summary: "Delete Admin",
      description: "Delete an administrator",
      tags: ["Admin"],
      parameters: [
        {
          name: "adminId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Admin ID",
        },
      ],
      responses: {
        200: {
          description: "Admin deleted successfully",
          content: {
            "application/json": {
              schema: resolver(deleteAdminResponseSchema) as any,
            },
          },
        },
        404: {
          description: "Admin not found",
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
        const adminId = c.req.param("adminId");

        // Create gRPC request
        const grpcRequest = new adminPb.DeleteAdminRequest();
        grpcRequest.setAdminId(adminId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(c.var.token);
        grpcRequest.setAuthContext(authContext);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getAdminClient();

        return new Promise((resolve, reject) => {
          client.deleteAdmin(grpcRequest, (error, response) => {
            if (error) {
              console.error("Error deleting admin:", error);

              if (error.code === Status.NOT_FOUND) {
                return resolve(c.json({ error: "Admin not found" }, 404));
              } else if (error.code === Status.PERMISSION_DENIED) {
                return resolve(c.json({ error: "Permission denied" }, 403));
              }

              return resolve(c.json({ error: "Failed to delete admin" }, 500));
            }

            const admins = response
              .getAdminsList()
              .map((admin) => admin.toObject());

            const responseData = {
              admins: admins.map((admin) => ({
                id: admin.id,
                organization_id: admin.organizationId,
                email: admin.email,
                name: admin.name,
                auth_id: admin.authId,
                created_at: admin.createdAt,
              })),
            };

            resolve(c.json(responseData, 200));
          });
        });
      } catch (error) {
        console.error("Error in delete admin route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
