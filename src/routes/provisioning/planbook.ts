// src/routes/provisioning/planbook.ts
import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as planbookPb from "../../grpc/generated/planbook_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  createPlanbookRequestSchema,
  createPlanbookResponseSchema,
  getBusinessesPlanbookForPlanResponseSchema,
  getFilteredPlanbooksResponseSchema,
  getPlanbookRequestSchema,
  getPlanbookResponseSchema,
  getPlanbooksRequestSchema,
  getPlanbooksResponseSchema,
  getPlansPlanbookForBusinessResponseSchema,
  planbookDetailsSchema,
  updatePlanbookRequestSchema,
  updatePlanbookResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const planbookRoutes = new Hono()
  .get(
    "/",
    describeRoute({
      summary: "Get Planbooks",
      description: "Get all planbook entries with filtering and pagination",
      tags: ["Planbook"],
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
          description: "Search term to filter planbooks",
        },
        {
          name: "plan_types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter by plan types",
          style: "form",
          explode: true,
        },
        {
          name: "business_ids",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter by business IDs",
          style: "form",
          explode: true,
        },
        {
          name: "plan_ids",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter by plan IDs",
          style: "form",
          explode: true,
        },
        {
          name: "billing_types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter by billing types",
          style: "form",
          explode: true,
        },
      ],
      responses: {
        200: {
          description: "Planbook entries retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getPlanbooksResponseSchema) as any,
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
        const grpcRequest = new planbookPb.GetPlanbooksRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
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

        // Handle plan_types parameter (both with and without brackets)
        let planTypes = c.req.queries("plan_types");
        if (!planTypes || planTypes.length === 0) {
          planTypes = c.req.queries("plan_types[]");
        }
        if (planTypes && planTypes.length > 0) {
          grpcRequest.setPlanTypesList(planTypes);
        }

        // Handle business_ids parameter (both with and without brackets)
        let businessIds = c.req.queries("business_ids");
        if (!businessIds || businessIds.length === 0) {
          businessIds = c.req.queries("business_ids[]");
        }
        if (businessIds && businessIds.length > 0) {
          grpcRequest.setBusinessIdsList(businessIds);
        }

        // Handle billing_types parameter (both with and without brackets)
        let billingTypes = c.req.queries("billing_types");
        if (!billingTypes || billingTypes.length === 0) {
          billingTypes = c.req.queries("billing_types[]");
        }
        if (billingTypes && billingTypes.length > 0) {
          grpcRequest.setBillingTypesList(billingTypes);
        }

        // Handle plan_ids parameter (both with and without brackets)
        let planIds = c.req.queries("plan_ids");
        if (!planIds || planIds.length === 0) {
          planIds = c.req.queries("plan_ids[]");
        }
        if (planIds && planIds.length > 0) {
          grpcRequest.setPlanIdsList(planIds);
        }

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanbookClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<planbookPb.GetPlanbooksResponse>(
              (callback) => client.getPlanbooks(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const planbooks = response
            .getPlanbooksList()
            .map((p) => p.toObject());
          const meta = response.getMeta()?.toObject();

          const responseData: z.infer<typeof getPlanbooksResponseSchema> = {
            data: planbooks.map((planbook) => ({
              id: planbook.id,
              plan_id: planbook.planId,
              business_id: planbook.businessId,
              business_name: planbook.businessName,
              period: planbook.period,
              price: planbook.price,
              plan_name: planbook.planName,
              plan_type: planbook.planType,
              plan_upspeed: planbook.planUpspeed,
              plan_downspeed: planbook.planDownspeed,
              plan_upspeed_unit: planbook.planUpspeedUnit,
              plan_downspeed_unit: planbook.planDownspeedUnit,
              groupname: planbook.groupname,
              billing_type: planbook.billingType,
              tenant_id: planbook.tenantId,
            })),
            meta: meta
              ? {
                  total: meta.total,
                  limit: meta.limit,
                  offset: meta.offset,
                }
              : undefined,
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting planbook entries:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get planbook entries" }, 500);
        }
      } catch (error) {
        console.error("Error in get planbooks route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/businesses",
    describeRoute({
      summary: "Get Businesses for Plan",
      description: "Get businesses for a specific plan",
      tags: ["Planbook"],
      parameters: [
        {
          name: "plan_id",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Plan ID",
        },
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
          description: "Search term to filter businesses",
        },
        {
          name: "types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter plans by type (Commercial, Enterprise)",
        },
        {
          name: "billing_types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter by billing types",
          style: "form",
          explode: true,
        },
      ],
      responses: {
        200: {
          description: "Businesses retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(
                getBusinessesPlanbookForPlanResponseSchema
              ) as any,
            },
          },
        },
        404: {
          description: "Plan not found",
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
        const planId = c.req.query("plan_id");
        if (planId && !z.string().uuid().safeParse(planId).success) {
          return c.json({ error: "Invalid plan ID" }, 400);
        }
        const limit = parseInt(c.req.query("limit") || "10");
        const offset = parseInt(c.req.query("offset") || "0");
        const search = c.req.query("search") || "";
        const types = c.req.queries("types") || [];
        const billing_types = c.req.queries("billing_types") || [];
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest =
          new planbookPb.GetBusinessesPlanbookForPlanRequest();

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
        if (planId) {
          grpcRequest.setPlanId(planId);
        }

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanbookClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<planbookPb.GetBusinessesPlanbookForPlanResponse>(
              (callback) =>
                client.getBusinessesPlanbookForPlan(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const businesses = response
            .getBusinessesList()
            .map((business) => business.toObject());
          const meta = response.getMeta()?.toObject();

          const responseData: z.infer<
            typeof getBusinessesPlanbookForPlanResponseSchema
          > = {
            data: businesses.map((business) => ({
              id: business.id,
              name: business.name,
              type: business.type,
              billing_type: business.billingType,
              tenant_id: business.tenantId,
              customer_count: business.customerCount,
              price: business.price,
              period: business.period,
              business_id: business.businessId,
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
  .get(
    "/plans",
    describeRoute({
      summary: "Get Plans for Business",
      description: "Get plans for a specific business",
      tags: ["Planbook"],
      parameters: [
        {
          name: "business_id",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Business ID",
        },
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
          description: "Search term to filter businesses",
        },
        {
          name: "types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter plans by type (Commercial, Enterprise)",
        },
        {
          name: "billing_types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter by billing types",
          style: "form",
          explode: true,
        },
      ],
      responses: {
        200: {
          description: "Plans retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(
                getPlansPlanbookForBusinessResponseSchema
              ) as any,
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
        const businessId = c.req.query("business_id");
        if (businessId && !z.string().uuid().safeParse(businessId).success) {
          return c.json({ error: "Invalid business ID" }, 400);
        }

        const limit = parseInt(c.req.query("limit") || "10");
        const offset = parseInt(c.req.query("offset") || "0");
        const search = c.req.query("search") || "";
        const types = c.req.queries("types") || [];
        const billing_types = c.req.queries("billing_types") || [];
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new planbookPb.GetPlansPlanbookForBusinessRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set pagination parameters
        grpcRequest.setLimit(limit);
        grpcRequest.setOffset(offset);
        grpcRequest.setSearch(search);
        grpcRequest.setTypesList(types);
        grpcRequest.setBillingTypesList(billing_types);
        if (businessId) {
          grpcRequest.setBusinessId(businessId);
        }

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanbookClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<planbookPb.GetPlansPlanbookForBusinessResponse>(
              (callback) =>
                client.getPlansPlanbookForBusiness(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const plans = response.getPlansList().map((plan) => plan.toObject());
          const meta = response.getMeta()?.toObject();

          const responseData: z.infer<
            typeof getPlansPlanbookForBusinessResponseSchema
          > = {
            data: plans.map((plan) => ({
              id: plan.id,
              name: plan.name,
              up_speed: plan.upSpeed,
              down_speed: plan.downSpeed,
              up_speed_unit: plan.upSpeedUnit,
              down_speed_unit: plan.downSpeedUnit,
              is_post_fup: plan.isPostFup,
              data_limit: plan.dataLimit,
              type: plan.type,
              price: plan.price,
              period: plan.period,
              customer_count: plan.customerCount,
              tenant_id: plan.tenantId,
              plan_id: plan.planId,
              billing_type: plan.billingType,
            })),
            meta: meta
              ? {
                  total: meta.total,
                  limit: meta.limit,
                  offset: meta.offset,
                }
              : {
                  total: plans.length,
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
  .get(
    "/filtered",
    describeRoute({
      summary: "Get Filtered Planbooks",
      description: "Get all planbook entries with filtering and pagination",
      tags: ["Planbook"],
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
          name: "business_id",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Business ID to filter planbooks",
        },
        {
          name: "plan_id",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Plan ID to filter planbooks",
        },
        {
          name: "period",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Period to filter planbooks",
        },
        {
          name: "price",
          in: "query",
          required: false,
          schema: { type: "number" },
          description: "Price to filter planbooks",
        },
        {
          name: "billing_type",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Billing type to filter planbooks",
          explode: true,
        },
      ],
      responses: {
        200: {
          description: "Planbook entries retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getFilteredPlanbooksResponseSchema) as any,
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

        // Create gRPC request
        const grpcRequest = new planbookPb.GetPlanbooksFromFiltersRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set pagination parameters
        const limit = parseInt(c.req.query("limit") || "10");
        const offset = parseInt(c.req.query("offset") || "0");
        grpcRequest.setLimit(limit);
        grpcRequest.setOffset(offset);

        // Get request parameters
        const planId = c.req.query("plan_id");
        const businessId = c.req.query("business_id");
        const period = c.req.query("period");
        const price = c.req.query("price");
        const billingType = c.req.query("billing_type");

        // Set request parameters
        if (planId) {
          grpcRequest.setPlanId(planId);
        }
        if (businessId) {
          grpcRequest.setBusinessId(businessId);
        }
        if (period) {
          grpcRequest.setPeriod(period);
        }
        if (price) {
          grpcRequest.setPrice(price);
        }
        if (billingType) {
          grpcRequest.setBillingType(billingType);
        }

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanbookClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<planbookPb.GetPlanbooksFromFiltersResponse>(
              (callback) =>
                client.getPlanbooksFromFilters(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const planbooks = response
            .getPlanbooksList()
            .map((p) => p.toObject());
          const meta = response.getMeta()?.toObject();

          const responseData: z.infer<
            typeof getFilteredPlanbooksResponseSchema
          > = {
            data: planbooks.map((planbook) => ({
              id: planbook.id,
              plan_id: planbook.planId,
              business_id: planbook.businessId,
              period: planbook.period,
              price: planbook.price,
              groupname: planbook.groupname,
              billing_type: planbook.billingType,
              tenant_id: planbook.tenantId,
            })),
            meta: meta
              ? {
                  total: meta.total,
                  limit: meta.limit,
                  offset: meta.offset,
                }
              : undefined,
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting planbook entries:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get planbook entries" }, 500);
        }
      } catch (error) {
        console.error("Error in get planbooks route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .post(
    "/create",
    describeRoute({
      summary: "Create Planbook",
      description: "Create a new planbook entry",
      tags: ["Planbook"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(createPlanbookRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Planbook entry created successfully",
          content: {
            "application/json": {
              schema: resolver(createPlanbookResponseSchema) as any,
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
    zValidator("json", createPlanbookRequestSchema),
    async (c) => {
      try {
        const requestData = await c.req.valid("json");
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        // Create gRPC request
        const grpcRequest = new planbookPb.CreatePlanbookRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        authContext.setTenantId(tenant_id);
        grpcRequest.setAuthContext(authContext);

        // Set planbook parameters
        const planbookParams =
          new planbookPb.CreatePlanbookRequest.PlanbookParams();
        planbookParams.setPlanId(requestData.planbook_params.plan_id);

        if (requestData.planbook_params.business_id) {
          planbookParams.setBusinessId(requestData.planbook_params.business_id);
        }
        if (requestData.planbook_params.price !== undefined) {
          planbookParams.setPrice(requestData.planbook_params.price);
        }
        if (requestData.planbook_params.period) {
          planbookParams.setPeriod(requestData.planbook_params.period);
        }
        if (requestData.planbook_params.billing_type) {
          planbookParams.setBillingType(
            requestData.planbook_params.billing_type
          );
        }

        grpcRequest.setPlanbookParams(planbookParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanbookClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<planbookPb.CreatePlanbookResponse>(
              (callback) => client.createPlanbook(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const planbooks = response
            .getPlanbooksList()
            .map((p) => p.toObject());
          const radgroupreplyEntries = response
            .getRadgroupreplyEntryList()
            .map((r) => r.toObject());

          const responseData = {
            planbooks: planbooks.map((planbook) => ({
              id: planbook.id,
              plan_id: planbook.planId,
              business_id: planbook.businessId,
              period: planbook.period,
              price: planbook.price,
              groupname: planbook.groupname,
              tenant_id: planbook.tenantId,
            })),
            radgroupreply_entries: radgroupreplyEntries.map((entry) => ({
              id: entry.id,
              groupname: entry.groupname,
              attribute: entry.attribute,
              op: entry.op,
              value: entry.value,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error creating planbook entry:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.ALREADY_EXISTS) {
            return c.json({ error: "Planbook entry already exists" }, 409);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to create planbook entry" }, 500);
        }
      } catch (error) {
        console.error("Error in create planbook route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/:planbook_id",
    describeRoute({
      summary: "Get Planbook",
      description: "Get a specific planbook entry by ID",
      tags: ["Planbook"],
      parameters: [
        {
          name: "planbook_id",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Planbook ID",
        },
      ],
      responses: {
        200: {
          description: "Planbook entries retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getPlanbookResponseSchema) as any,
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
        const planbookId = c.req.param("planbook_id");
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new planbookPb.GetPlanbookRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set planbook ID
        grpcRequest.setPlanbookId(planbookId);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanbookClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<planbookPb.GetPlanbookResponse>(
              (callback) => client.getPlanbook(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const planbooks = response
            .getPlanbooksList()
            .map((p) => p.toObject());

          if (!planbooks || planbooks.length === 0) {
            return c.json({ error: "Planbook entry not found" }, 404);
          }

          const responseData: z.infer<typeof getPlanbookResponseSchema> = {
            data: planbooks.map((planbook) => ({
              id: planbook.id,
              plan_id: planbook.planId,
              business_id: planbook.businessId,
              period: planbook.period,
              price: planbook.price,
              groupname: planbook.groupname,
              billing_type: planbook.billingType,
              tenant_id: planbook.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting planbook entry:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Planbook entry not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get planbook entry" }, 500);
        }
      } catch (error) {
        console.error("Error in get planbook route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/:planbook_id",
    describeRoute({
      summary: "Update Planbook",
      description: "Update an existing planbook entry",
      tags: ["Planbook"],
      parameters: [
        {
          name: "planbook_id",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Planbook ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updatePlanbookRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Planbook entry updated successfully",
          content: {
            "application/json": {
              schema: resolver(updatePlanbookResponseSchema) as any,
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
          description: "Planbook entry not found",
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
    zValidator("json", updatePlanbookRequestSchema),
    async (c) => {
      try {
        const planbookId = c.req.param("planbook_id");
        const requestData = c.req.valid("json");
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new planbookPb.UpdatePlanbookRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set planbook ID
        grpcRequest.setPlanbookId(planbookId);

        // Set planbook parameters to update
        const planbookParams =
          new planbookPb.UpdatePlanbookRequest.PlanbookParams();
        if (requestData.planbook_params.price !== undefined) {
          planbookParams.setPrice(requestData.planbook_params.price);
        }
        if (requestData.planbook_params.period) {
          planbookParams.setPeriod(requestData.planbook_params.period);
        }
        if (requestData.planbook_params.billing_type) {
          console.log(requestData.planbook_params.billing_type);
          planbookParams.setBillingType(
            requestData.planbook_params.billing_type
          );
        }

        grpcRequest.setPlanbookParams(planbookParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanbookClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<planbookPb.UpdatePlanbookResponse>(
              (callback) => client.updatePlanbook(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const planbooks = response
            .getPlanbooksList()
            .map((p) => p.toObject());

          const responseData = {
            planbooks: planbooks.map((planbook) => ({
              id: planbook.id,
              plan_id: planbook.planId,
              business_id: planbook.businessId,
              period: planbook.period,
              price: planbook.price,
              groupname: planbook.groupname,
              tenant_id: planbook.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error updating planbook entry:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Planbook entry not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to update planbook entry" }, 500);
        }
      } catch (error) {
        console.error("Error in update planbook route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
