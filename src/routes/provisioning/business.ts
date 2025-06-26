import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as businessPb from "../../grpc/generated/business_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  createBusinessRequestSchema,
  createBusinessResponseSchema,
  getBusinessRequestSchema,
  getBusinessResponseSchema,
  getBusinessesRequestSchema,
  getBusinessesResponseSchema,
  updateBusinessRequestSchema,
  updateBusinessResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const businessRoutes = new Hono()
  .get(
    "/",
    describeRoute({
      summary: "List Businesses",
      description: "List all businesses with pagination",
      tags: ["Business"],
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
          description: "Search term to filter businesses by name",
        },
        {
          name: "types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter businesses by type (B2B, B2C, B2B2C)",
        },
        {
          name: "billing_types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description:
            "Filter businesses by billing type (EndUser, Business, LeaseLine)",
        },
      ],
      responses: {
        200: {
          description: "Businesses retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getBusinessesResponseSchema) as any,
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
        const limit = parseInt(c.req.query("limit") || "10");
        const offset = parseInt(c.req.query("offset") || "0");
        const search = c.req.query("search") || "";
        const types = c.req.queries("types") || [];
        const billing_types = c.req.queries("billing_types") || [];
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new businessPb.GetBusinessesRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set pagination parameters
        grpcRequest.setLimit(limit);
        grpcRequest.setOffset(offset);
        grpcRequest.setSearch(search);
        grpcRequest.setTypeList(types);
        grpcRequest.setBillingTypeList(billing_types);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getBusinessClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<businessPb.GetBusinessesResponse>(
              (callback) => client.getBusinesses(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const businesses = response
            .getBusinessesList()
            .map((business) => business.toObject());
          const meta = response.getMeta()?.toObject();

          const responseData: z.infer<typeof getBusinessesResponseSchema> = {
            data: businesses.map((business) => ({
              id: business.id,
              name: business.name,
              type: business.type,
              billing_type: business.billingType,
              tenant_id: business.tenantId,
              customer_count: business.customerCount,
              planbook_count: business.planbookCount,
            })),
            meta: meta
              ? {
                  total: meta.total,
                  limit: meta.limit,
                  offset: meta.offset,
                }
              : {
                  total: businesses.length,
                  limit,
                  offset,
                },
          };
          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error listing businesses:", error);

          if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to list businesses" }, 500);
        }
      } catch (error) {
        console.error("Error in list businesses route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .post(
    "/create",
    describeRoute({
      summary: "Create Business",
      description: "Creates a new business for an organization",
      tags: ["Business"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(createBusinessRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Business created successfully",
          content: {
            "application/json": {
              schema: resolver(createBusinessResponseSchema) as any,
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
    zValidator("json", createBusinessRequestSchema),
    authMiddleware,
    async (c) => {
      try {
        const requestData = await c.req.json();
        const token = c.var.token;
        const tenantId = c.var.tenant_id;

        // Create gRPC request
        const grpcRequest = new businessPb.CreateBusinessRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setTenantId(tenantId);
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set business parameters
        const businessParams =
          new businessPb.CreateBusinessRequest.BusinessParams();
        businessParams.setName(requestData.business_params.name);
        businessParams.setType(requestData.business_params.type);
        businessParams.setBillingType(requestData.business_params.billing_type);
        businessParams.setTenantId(requestData.business_params.tenant_id);

        grpcRequest.setBusinessParams(businessParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getBusinessClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<businessPb.CreateBusinessResponse>(
              (callback) => client.createBusiness(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const businesses = response
            .getBusinessesList()
            .map((business) => business.toObject());

          const responseData = {
            created_business: businesses.map((business) => ({
              id: business.id,
              name: business.name,
              type: business.type,
              billing_type: business.billingType,
              tenant_id: business.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error creating business:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.ALREADY_EXISTS) {
            return c.json({ error: "Business already exists" }, 409);
          } else if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to create business" }, 500);
        }
      } catch (error) {
        console.error("Error in create business route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/:businessId",
    describeRoute({
      summary: "Get Business",
      description: "Get business details by ID",
      tags: ["Business"],
      parameters: [
        {
          name: "businessId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Business ID",
        },
      ],
      responses: {
        200: {
          description: "Business details retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getBusinessResponseSchema) as any,
            },
          },
        },
        404: {
          description: "Business not found",
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
        const businessId = c.req.param("businessId");
        if (!businessId || !z.string().uuid().safeParse(businessId).success) {
          return c.json({ error: "Invalid business ID" }, 400);
        }
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new businessPb.GetBusinessRequest();
        grpcRequest.setBusinessId(businessId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getBusinessClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<businessPb.GetBusinessResponse>(
              (callback) => client.getBusiness(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const businesses = response
            .getBusinessesList()
            .map((business) => business.toObject());

          if (!businesses || businesses.length === 0) {
            return c.json({ error: "Business not found" }, 404);
          }

          const responseData = {
            businesses: businesses.map((business) => ({
              id: business.id,
              name: business.name,
              type: business.type,
              billing_type: business.billingType,
              tenant_id: business.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting business:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Business not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get business" }, 500);
        }
      } catch (error) {
        console.error("Error in get business route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/:businessId",
    describeRoute({
      summary: "Update Business",
      description: "Update business details",
      tags: ["Business"],
      parameters: [
        {
          name: "businessId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Business ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updateBusinessRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Business updated successfully",
          content: {
            "application/json": {
              schema: resolver(updateBusinessResponseSchema) as any,
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
          description: "Business not found",
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
    zValidator("json", updateBusinessRequestSchema),
    authMiddleware,
    async (c) => {
      try {
        const businessId = c.req.param("businessId");
        if (!businessId || !z.string().uuid().safeParse(businessId).success) {
          return c.json({ error: "Invalid business ID" }, 400);
        }
        const requestData = await c.req.json();
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new businessPb.UpdateBusinessRequest();
        grpcRequest.setBusinessId(businessId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set business parameters
        const businessParams =
          new businessPb.UpdateBusinessRequest.BusinessParams();
        if (requestData.business_params.name) {
          businessParams.setName(requestData.business_params.name);
        }
        if (requestData.business_params.type) {
          businessParams.setType(requestData.business_params.type);
        }
        if (requestData.business_params.billing_type) {
          businessParams.setBillingType(
            requestData.business_params.billing_type
          );
        }

        grpcRequest.setBusinessParams(businessParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getBusinessClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<businessPb.UpdateBusinessResponse>(
              (callback) => client.updateBusiness(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const updatedBusiness = response
            .getUpdatedBusinessList()
            .map((business) => business.toObject());
          const updatedPlanbook = response
            .getUpdatedPlanbookList()
            .map((planbook) => planbook.toObject());
          const updatedRadgroupreply = response
            .getUpdatedRadgroupreplyList()
            .map((radgroupreply) => radgroupreply.toObject());
          const updatedRadusergroup = response
            .getUpdatedRadusergroupList()
            .map((radusergroup) => radusergroup.toObject());

          const responseData = {
            updated_business: updatedBusiness.map((business) => ({
              id: business.id,
              name: business.name,
              type: business.type,
              billing_type: business.billingType,
              tenant_id: business.tenantId,
            })),
            updated_planbook: updatedPlanbook,
            updated_radgroupreply: updatedRadgroupreply,
            updated_radusergroup: updatedRadusergroup,
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error updating business:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Business not found" }, 404);
          } else if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to update business" }, 500);
        }
      } catch (error) {
        console.error("Error in update business route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
