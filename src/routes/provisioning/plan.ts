// src/routes/provisioning/plan.ts
import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { GrpcClient } from "../../grpc/grpc-client";
import * as planPb from "../../grpc/generated/plan_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  createPlanRequestSchema,
  createPlanResponseSchema,
  getPlanResponseSchema,
  getPlansResponseSchema,
  updatePlanRequestSchema,
  updatePlanResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const planRoutes = new Hono()
  .get(
    "/",
    describeRoute({
      summary: "Get Plans",
      description:
        "Get all internet service plans with filtering and pagination",
      tags: ["Plan"],
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
          description: "Search term to filter plans by name",
        },
        {
          name: "types",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "Filter plans by type (Commercial, Enterprise)",
        },
      ],
      responses: {
        200: {
          description: "Plans retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getPlansResponseSchema) as any,
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
        const grpcRequest = new planPb.GetPlansRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set pagination parameters
        if (c.req.query("limit") !== undefined) {
          grpcRequest.setLimit(parseInt(c.req.query("limit") || "10"));
        }
        if (c.req.query("offset") !== undefined) {
          grpcRequest.setOffset(parseInt(c.req.query("offset") || "0"));
        }

        const types = c.req.queries("types");

        // Set optional filters
        grpcRequest.setSearch(c.req.query("search") || "");

        grpcRequest.setTypesList(types || []);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanClient();
        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response = await promisifyGrpcCall<planPb.GetPlansResponse>(
            (callback) => client.getPlans(grpcRequest, callback)
          );

          // Convert gRPC response to our schema format
          const plans = response.getPlansList().map((p) => p.toObject());
          const meta = response.getMeta()?.toObject();

          const responseData: z.infer<typeof getPlansResponseSchema> = {
            data: plans.map((plan) => ({
              id: plan.id,
              name: plan.name,
              up_speed: plan.upSpeed,
              down_speed: plan.downSpeed,
              type: plan.type,
              up_speed_unit: plan.upSpeedUnit,
              down_speed_unit: plan.downSpeedUnit,
              is_post_fup: plan.isPostFup,
              data_limit: plan.dataLimit ? parseInt(plan.dataLimit) : undefined,
              tenant_id: plan.tenantId,
              planbook_count: plan.planbookCount,
              customer_count: plan.customerCount,
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
          console.error("Error getting plans:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get plans" }, 500);
        }
      } catch (error) {
        console.error("Error in get plans route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .post(
    "/create",
    describeRoute({
      summary: "Create Plan",
      description: "Create a new internet service plan",
      tags: ["Plan"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(createPlanRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Plan created successfully",
          content: {
            "application/json": {
              schema: resolver(createPlanResponseSchema) as any,
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
    zValidator("json", createPlanRequestSchema),
    async (c) => {
      try {
        const requestData = c.req.valid("json");
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        // Create gRPC request
        const grpcRequest = new planPb.CreatePlanRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        authContext.setTenantId(tenant_id);
        grpcRequest.setAuthContext(authContext);

        // Set plan parameters
        const planParams = new planPb.CreatePlanRequest.PlanParams();
        planParams.setName(requestData.plan_params.name);
        planParams.setUpSpeed(requestData.plan_params.up_speed);
        planParams.setDownSpeed(requestData.plan_params.down_speed);
        planParams.setUpSpeedUnit(requestData.plan_params.up_speed_unit);
        planParams.setDownSpeedUnit(requestData.plan_params.down_speed_unit);
        planParams.setType(requestData.plan_params.type);

        if (requestData.plan_params.is_post_fup !== undefined) {
          planParams.setIsPostFup(requestData.plan_params.is_post_fup);
        }
        if (requestData.plan_params.data_limit !== undefined) {
          planParams.setDataLimit(
            requestData.plan_params.data_limit.toString()
          );
        }

        grpcRequest.setPlanParams(planParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response = await promisifyGrpcCall<planPb.CreatePlanResponse>(
            (callback) => client.createPlan(grpcRequest, callback)
          );

          // Convert gRPC response to our schema format
          const plans = response.getPlansList().map((p) => p.toObject());

          const responseData = {
            plans: plans.map((plan) => ({
              id: plan.id,
              name: plan.name,
              up_speed: plan.upSpeed,
              down_speed: plan.downSpeed,
              type: plan.type,
              up_speed_unit: plan.upSpeedUnit,
              down_speed_unit: plan.downSpeedUnit,
              is_post_fup: plan.isPostFup,
              data_limit: plan.dataLimit,
              tenant_id: plan.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error creating plan:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.ALREADY_EXISTS) {
            return c.json({ error: "Plan already exists" }, 409);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to create plan" }, 500);
        }
      } catch (error) {
        console.error("Error in create plan route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/:plan_id",
    describeRoute({
      summary: "Get Plan",
      description: "Get a specific plan by ID",
      tags: ["Plan"],
      parameters: [
        {
          name: "plan_id",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Plan ID",
        },
      ],
      responses: {
        200: {
          description: "Plan retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getPlanResponseSchema) as any,
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
        const planId = c.req.param("plan_id");
        if (!planId || !z.string().uuid().safeParse(planId).success) {
          return c.json({ error: "Invalid plan ID" }, 400);
        }

        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new planPb.GetPlanRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set plan ID
        grpcRequest.setPlanId(planId);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response = await promisifyGrpcCall<planPb.GetPlanResponse>(
            (callback) => client.getPlan(grpcRequest, callback)
          );

          // Convert gRPC response to our schema format
          const plans = response.getPlansList().map((p) => p.toObject());

          if (!plans || plans.length === 0) {
            return c.json({ error: "Plan not found" }, 404);
          }

          const responseData = {
            plans: plans.map((plan) => ({
              id: plan.id,
              name: plan.name,
              up_speed: plan.upSpeed,
              down_speed: plan.downSpeed,
              type: plan.type,
              up_speed_unit: plan.upSpeedUnit,
              down_speed_unit: plan.downSpeedUnit,
              is_post_fup: plan.isPostFup,
              data_limit: plan.dataLimit,
              tenant_id: plan.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting plan:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Plan not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get plan" }, 500);
        }
      } catch (error) {
        console.error("Error in get plan route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/:plan_id",
    describeRoute({
      summary: "Update Plan",
      description: "Update an existing plan",
      tags: ["Plan"],
      parameters: [
        {
          name: "plan_id",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Plan ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updatePlanRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Plan updated successfully",
          content: {
            "application/json": {
              schema: resolver(updatePlanResponseSchema) as any,
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
    zValidator("json", updatePlanRequestSchema),
    async (c) => {
      try {
        const planId = c.req.param("plan_id");
        if (!planId || !z.string().uuid().safeParse(planId).success) {
          return c.json({ error: "Invalid plan ID" }, 400);
        }
        const requestData = c.req.valid("json");
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new planPb.UpdatePlanRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set plan ID
        grpcRequest.setPlanId(planId);

        // Set plan parameters to update
        const planParams = new planPb.UpdatePlanRequest.PlanParams();

        if (requestData.plan_params.name) {
          planParams.setName(requestData.plan_params.name);
        }
        if (requestData.plan_params.up_speed !== undefined) {
          planParams.setUpSpeed(requestData.plan_params.up_speed);
        }
        if (requestData.plan_params.down_speed !== undefined) {
          planParams.setDownSpeed(requestData.plan_params.down_speed);
        }
        if (requestData.plan_params.up_speed_unit) {
          planParams.setUpSpeedUnit(requestData.plan_params.up_speed_unit);
        }
        if (requestData.plan_params.down_speed_unit) {
          planParams.setDownSpeedUnit(requestData.plan_params.down_speed_unit);
        }
        if (requestData.plan_params.is_post_fup !== undefined) {
          planParams.setIsPostFup(requestData.plan_params.is_post_fup);
        }
        if (requestData.plan_params.type) {
          planParams.setType(requestData.plan_params.type);
        }
        if (requestData.plan_params.data_limit !== undefined) {
          planParams.setDataLimit(
            requestData.plan_params.data_limit.toString()
          );
        }

        grpcRequest.setPlanParams(planParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getPlanClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response = await promisifyGrpcCall<planPb.UpdatePlanResponse>(
            (callback) => client.updatePlan(grpcRequest, callback)
          );

          // Convert gRPC response to our schema format
          const plans = response.getUpdatedPlanList().map((p) => p.toObject());

          const responseData = {
            plans: plans.map((plan) => ({
              id: plan.id,
              name: plan.name,
              up_speed: plan.upSpeed,
              down_speed: plan.downSpeed,
              type: plan.type,
              up_speed_unit: plan.upSpeedUnit,
              down_speed_unit: plan.downSpeedUnit,
              is_post_fup: plan.isPostFup,
              data_limit: plan.dataLimit,
              tenant_id: plan.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error updating plan:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Plan not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to update plan" }, 500);
        }
      } catch (error) {
        console.error("Error in update plan route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
