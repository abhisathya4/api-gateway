// src/routes/provisioning/customers.ts
import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as customersPb from "../../grpc/generated/customers_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import * as radiusPb from "../../grpc/generated/radius_pb";
import {
  createCustomerRequestSchema,
  createCustomerResponseSchema,
  getCustomerRequestSchema,
  getCustomerResponseSchema,
  getCustomersRequestSchema,
  getCustomersResponseSchema,
  updateCustomerDetailsRequestSchema,
  updateCustomerDetailsResponseSchema,
  updateCustomerPlanRequestSchema,
  updateCustomerPlanResponseSchema,
  restoreCustomerPlanRequestSchema,
  restoreCustomerPlanResponseSchema,
  getCustomersWithPlanBusinessAndPlanbookInfoResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const customersRoutes = new Hono()
  .post(
    "/create",
    describeRoute({
      summary: "Create Customer",
      description: "Creates a new customer with associated RADIUS entries",
      tags: ["Customers"],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(createCustomerRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Customer created successfully",
          content: {
            "application/json": {
              schema: resolver(createCustomerResponseSchema) as any,
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
    zValidator("json", createCustomerRequestSchema),
    authMiddleware,
    async (c) => {
      try {
        const requestData = await c.req.json();
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        // Create gRPC request
        const grpcRequest = new customersPb.CreateCustomerRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setTenantId(tenant_id);
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set customer parameters
        const customerParams =
          new customersPb.CreateCustomerRequest.CustomerParams();
        customerParams.setId(requestData.customer_params.id);
        customerParams.setName(requestData.customer_params.name);
        customerParams.setEmail(requestData.customer_params.email);
        customerParams.setUsername(requestData.customer_params.username);
        customerParams.setSubscriptionPlan(
          requestData.customer_params.subscription_plan
        );
        if (requestData.customer_params.post_fup_plan) {
          customerParams.setPostFupPlan(
            requestData.customer_params.post_fup_plan
          );
        }
        customerParams.setRadPassword(requestData.customer_params.rad_password);

        grpcRequest.setCustomerParams(customerParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getCustomerClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<customersPb.CreateCustomerResponse>(
              (callback) => client.createCustomer(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const customers = response
            .getCreatedCustomerList()
            .map((c) => c.toObject());
          const radchecks = response
            .getCreatedRadiusUserList()
            .map((r) => r.toObject());
          const radusergroups = response
            .getPlanRadGroupsList()
            .map((r) => r.toObject());

          const responseData = {
            created_customer: customers.map((customer) => ({
              id: customer.id,
              name: customer.name,
              email: customer.email,
              username: customer.username,
              subscription_plan: customer.subscriptionPlan || undefined,
              post_fup_plan: customer.postFupPlan || undefined,
              created_at: customer.createdAt,
              active: customer.active,
              last_renew_date: customer.lastRenewDate,
              data_usage: customer.dataUsage,
              tenant_id: customer.tenantId,
            })),
            created_radius_user: radchecks.map((check) => ({
              id: check.id,
              username: check.username,
              attribute: check.attribute,
              op: check.op,
              value: check.value,
            })),
            plan_rad_groups: radusergroups.map((group) => ({
              id: group.id,
              username: group.username,
              groupname: group.groupname,
              priority: group.priority,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error creating customer:", error);

          // Map gRPC error codes to appropriate HTTP status codes
          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Resource not found" }, 404);
          } else if (error.code === Status.ALREADY_EXISTS) {
            return c.json({ error: "Customer already exists" }, 409);
          } else if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to create customer" }, 500);
        }
      } catch (error) {
        console.error("Error in create customer route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/",
    describeRoute({
      summary: "List Customers",
      description: "List all customers with pagination and filtering",
      tags: ["Customers"],
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
          name: "plan_ids",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of plan IDs to filter by",
        },
        {
          name: "business_ids",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of business IDs to filter by",
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
          description: "Customers retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getCustomersResponseSchema) as any,
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
        const search = c.req.query("search");
        const planIds = c.req.queries("plan_ids");
        const businessIds = c.req.queries("business_ids");
        const statusValues = c.req.queries("status")?.map((s) => s === "true");
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new customersPb.GetCustomersRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set pagination parameters
        grpcRequest.setLimit(limit);
        grpcRequest.setOffset(offset);

        // Set optional filters
        if (search) {
          grpcRequest.setSearch(search);
        }

        if (planIds && planIds.length > 0) {
          grpcRequest.setPlanIdsList(planIds);
        }

        if (businessIds && businessIds.length > 0) {
          grpcRequest.setBusinessIdsList(businessIds);
        }

        if (statusValues && statusValues.length > 0) {
          grpcRequest.setStatusList(statusValues);
        }

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getCustomerClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<customersPb.GetCustomersResponse>(
              (callback) => client.getCustomers(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const customers = response.getDataList().map((c) => c.toObject());
          const meta = response.getMeta()?.toObject();

          console.log("Customers:", customers);
          console.log("Meta:", meta);

          const responseData: z.infer<typeof getCustomersResponseSchema> = {
            data: customers.map((customer) => ({
              id: customer.id,
              name: customer.name,
              email: customer.email,
              username: customer.username,
              subscription_plan: customer.subscriptionPlan || undefined,
              post_fup_plan: customer.postFupPlan || undefined,
              created_at: customer.createdAt,
              active: customer.active,
              last_renew_date: customer.lastRenewDate || undefined,
              data_usage: customer.dataUsage,
              data_limit: customer.dataLimit,
              tenant_id: customer.tenantId,
              plan_name: customer.planName || undefined,
              business_name: customer.businessName || undefined,
              plan_id: customer.planId || undefined,
              business_id: customer.businessId || undefined,
              last_active: customer.lastActive,
            })),
            meta: meta
              ? {
                  total: meta.total,
                  limit: meta.limit,
                  offset: meta.offset,
                }
              : {
                  total: customers.length,
                  limit,
                  offset,
                },
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error listing customers:", error);

          if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to list customers" }, 500);
        }
      } catch (error) {
        console.error("Error in list customers route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/info",
    describeRoute({
      summary: "List Customers with Info for Plan, Business and Planbook",
      description:
        "List all customers with info for plan, business and planbook with pagination and filtering",
      tags: ["Customers"],
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
          name: "plan_ids",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of plan IDs to filter by",
        },
        {
          name: "business_ids",
          in: "query",
          required: false,
          schema: { type: "array", items: { type: "string" } },
          description: "List of business IDs to filter by",
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
          description: "Customers retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getCustomersResponseSchema) as any,
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
        const search = c.req.query("search");
        const planIds = c.req.queries("plan_ids");
        const businessIds = c.req.queries("business_ids");
        const statusValues = c.req.queries("status")?.map((s) => s === "true");
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest =
          new customersPb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest();

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set pagination parameters
        grpcRequest.setLimit(limit);
        grpcRequest.setOffset(offset);

        // Set optional filters
        if (search) {
          grpcRequest.setSearch(search);
        }

        if (planIds && planIds.length > 0) {
          grpcRequest.setPlanIdsList(planIds);
        }

        if (businessIds && businessIds.length > 0) {
          grpcRequest.setBusinessIdsList(businessIds);
        }

        if (statusValues && statusValues.length > 0) {
          grpcRequest.setStatusList(statusValues);
        }

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getCustomerClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<customersPb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse>(
              (callback) =>
                client.getCustomersWithPlanBusinessAndPlanbookInfo(
                  grpcRequest,
                  callback
                )
            );

          // Convert gRPC response to our schema format
          const customers = response.getDataList().map((c) => c.toObject());
          const meta = response.getMeta()?.toObject();

          console.log("Customers:", customers);
          console.log("Meta:", meta);

          const responseData: z.infer<
            typeof getCustomersWithPlanBusinessAndPlanbookInfoResponseSchema
          > = {
            data: customers.map((customer) => ({
              id: customer.id,
              name: customer.name,
              username: customer.username,
              subscription_plan: customer.subscriptionPlan || undefined,
              post_fup_plan: customer.postFupPlan || undefined,
              active: customer.active,
              last_active: customer.lastActive,
              tenant_id: customer.tenantId,
              plan_name: customer.planName || undefined,
              business_name: customer.businessName || undefined,
              plan_id: customer.planId || undefined,
              business_id: customer.businessId || undefined,
              period: customer.period || undefined,
              price: customer.price || undefined,
            })),
            meta: meta
              ? {
                  total: meta.total,
                  limit: meta.limit,
                  offset: meta.offset,
                }
              : {
                  total: customers.length,
                  limit,
                  offset,
                },
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error listing customers:", error);

          if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to list customers" }, 500);
        }
      } catch (error) {
        console.error("Error in list customers route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .get(
    "/:customerId",
    describeRoute({
      summary: "Get Customer",
      description: "Get customer details by ID",
      tags: ["Customers"],
      parameters: [
        {
          name: "customerId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Customer ID",
        },
      ],
      responses: {
        200: {
          description: "Customer details retrieved successfully",
          content: {
            "application/json": {
              schema: resolver(getCustomerResponseSchema) as any,
            },
          },
        },
        404: {
          description: "Customer not found",
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
        const customerId = c.req.param("customerId");
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new customersPb.GetCustomerRequest();
        grpcRequest.setCustomerId(customerId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getCustomerClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<customersPb.GetCustomerResponse>(
              (callback) => client.getCustomer(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const customers = response
            .getCustomersList()
            .map((c) => c.toObject());

          if (!customers || customers.length === 0) {
            return c.json({ error: "Customer not found" }, 404);
          }

          const responseData: z.infer<typeof getCustomerResponseSchema> = {
            data: customers.map((customer) => ({
              id: customer.id,
              name: customer.name,
              email: customer.email,
              username: customer.username,
              subscription_plan: customer.subscriptionPlan || undefined,
              post_fup_plan: customer.postFupPlan || undefined,
              created_at: customer.createdAt,
              active: customer.active,
              last_renew_date: customer.lastRenewDate,
              data_usage: customer.dataUsage,
              last_active: customer.lastActive,
              tenant_id: customer.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error getting customer:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Customer not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to get customer" }, 500);
        }
      } catch (error) {
        console.error("Error in get customer route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/:customerId/details",
    describeRoute({
      summary: "Update Customer Details",
      description: "Update customer's basic information",
      tags: ["Customers"],
      parameters: [
        {
          name: "customerId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Customer ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updateCustomerDetailsRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Customer details updated successfully",
          content: {
            "application/json": {
              schema: resolver(updateCustomerDetailsResponseSchema) as any,
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
          description: "Customer not found",
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
    zValidator("json", updateCustomerDetailsRequestSchema),
    async (c) => {
      try {
        const customerId = c.req.param("customerId");

        if (!customerId || !z.string().uuid().safeParse(customerId).success) {
          return c.json({ error: "Invalid customer ID" }, 400);
        }

        const requestData = await c.req.json();
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        // Create gRPC request
        const grpcRequest = new customersPb.UpdateCustomerDetailsRequest();
        grpcRequest.setCustomerId(customerId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setTenantId(tenant_id);
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Set customer parameters
        const customerParams =
          new customersPb.UpdateCustomerDetailsRequest.CustomerParams();
        if (requestData.customer_params.name) {
          customerParams.setName(requestData.customer_params.name);
        }
        if (requestData.customer_params.email) {
          customerParams.setEmail(requestData.customer_params.email);
        }

        grpcRequest.setCustomerParams(customerParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getCustomerClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<customersPb.UpdateCustomerDetailsResponse>(
              (callback) => client.updateCustomerDetails(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const customers = response
            .getCustomersList()
            .map((c) => c.toObject());

          const responseData = {
            customers: customers.map((customer) => ({
              id: customer.id,
              name: customer.name,
              email: customer.email,
              username: customer.username,
              subscription_plan: customer.subscriptionPlan || undefined,
              post_fup_plan: customer.postFupPlan || undefined,
              created_at: customer.createdAt,
              active: customer.active,
              last_renew_date: customer.lastRenewDate,
              data_usage: customer.dataUsage,
              tenant_id: customer.tenantId,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error updating customer details:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Customer not found" }, 404);
          } else if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to update customer details" }, 500);
        }
      } catch (error) {
        console.error("Error in update customer details route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .put(
    "/:customerId/plan",
    describeRoute({
      summary: "Update Customer Plan",
      description: "Update customer's subscription or post-FUP plan",
      tags: ["Customers"],
      parameters: [
        {
          name: "customerId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Customer ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(updateCustomerPlanRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Customer plan updated successfully",
          content: {
            "application/json": {
              schema: resolver(updateCustomerPlanResponseSchema) as any,
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
          description: "Customer not found",
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
    zValidator("json", updateCustomerPlanRequestSchema),
    async (c) => {
      try {
        const customerId = c.req.param("customerId");

        if (!customerId || !z.string().uuid().safeParse(customerId).success) {
          return c.json({ error: "Invalid customer ID" }, 400);
        }

        const requestData = await c.req.valid("json");
        const token = c.var.token;
        const tenant_id = c.var.tenant_id;

        // Create gRPC request
        const grpcRequest = new customersPb.UpdateCustomerPlanRequest();
        grpcRequest.setCustomerId(customerId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setToken(token);
        authContext.setTenantId(tenant_id);
        grpcRequest.setAuthContext(authContext);

        // Set customer parameters
        const customerParams =
          new customersPb.UpdateCustomerPlanRequest.CustomerParams();
        if (requestData.customer_params.subscription_plan) {
          customerParams.setSubscriptionPlan(
            requestData.customer_params.subscription_plan
          );
        }
        if (requestData.customer_params.post_fup_plan) {
          customerParams.setPostFupPlan(
            requestData.customer_params.post_fup_plan
          );
        }

        grpcRequest.setCustomerParams(customerParams);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getCustomerClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<customersPb.UpdateCustomerPlanResponse>(
              (callback) => client.updateCustomerPlan(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const customers = response
            .getUpdatedCustomerList()
            .map((c) => c.toObject());
          // Continuing from where the file was cut off
          const radusergroups = response
            .getUpdatedRadusergroupList()
            .map((r) => r.toObject());

          const responseData = {
            updated_customer: customers.map((customer) => ({
              id: customer.id,
              name: customer.name,
              email: customer.email,
              username: customer.username,
              subscription_plan: customer.subscriptionPlan || undefined,
              post_fup_plan: customer.postFupPlan || undefined,
              created_at: customer.createdAt,
              active: customer.active,
              last_renew_date: customer.lastRenewDate,
              data_usage: customer.dataUsage,
              tenant_id: customer.tenantId,
            })),
            updated_radusergroup: radusergroups.map((group) => ({
              id: group.id,
              username: group.username,
              groupname: group.groupname,
              priority: group.priority,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error updating customer plan:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Customer not found" }, 404);
          } else if (error.code === Status.INVALID_ARGUMENT) {
            return c.json({ error: "Invalid request parameters" }, 400);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to update customer plan" }, 500);
        }
      } catch (error) {
        console.error("Error in update customer plan route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  )
  .post(
    "/:customerId/restore-plan",
    describeRoute({
      summary: "Restore Customer Plan",
      description: "Restore a customer's plan after FUP enforcement",
      tags: ["Customers"],
      parameters: [
        {
          name: "customerId",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "Customer ID",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: resolver(restoreCustomerPlanRequestSchema) as any,
          },
        },
      },
      responses: {
        200: {
          description: "Customer plan restored successfully",
          content: {
            "application/json": {
              schema: resolver(restoreCustomerPlanResponseSchema) as any,
            },
          },
        },
        404: {
          description: "Customer not found",
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
    zValidator("json", restoreCustomerPlanRequestSchema),
    authMiddleware,
    async (c) => {
      try {
        const customerId = c.req.param("customerId");
        const requestData = await c.req.json();
        const token = c.var.token;

        // Create gRPC request
        const grpcRequest = new customersPb.RestoreCustomerPlanRequest();
        grpcRequest.setCustomerId(customerId);

        // Set auth context
        const authContext = new commonPb.AuthContext();
        authContext.setTenantId(requestData.auth_context.tenant_id);
        authContext.setToken(token);
        grpcRequest.setAuthContext(authContext);

        // Get gRPC client and make the call
        const client = GrpcClient.getInstance().getCustomerClient();

        try {
          // Use promisifyGrpcCall instead of manual Promise creation
          const response =
            await promisifyGrpcCall<customersPb.RestoreCustomerPlanResponse>(
              (callback) => client.restoreCustomerPlan(grpcRequest, callback)
            );

          // Convert gRPC response to our schema format
          const customers = response
            .getRestoredCustomerList()
            .map((c) => c.toObject());
          const radusergroups = response
            .getRestoredRadusergroupsList()
            .map((r) => r.toObject());

          const responseData = {
            restored_customer: customers.map((customer) => ({
              id: customer.id,
              name: customer.name,
              email: customer.email,
              username: customer.username,
              subscription_plan: customer.subscriptionPlan || undefined,
              post_fup_plan: customer.postFupPlan || undefined,
              created_at: customer.createdAt,
              active: customer.active,
              last_renew_date: customer.lastRenewDate,
              data_usage: customer.dataUsage,
              tenant_id: customer.tenantId,
            })),
            restored_radusergroups: radusergroups.map((group) => ({
              id: group.id,
              username: group.username,
              groupname: group.groupname,
              priority: group.priority,
            })),
          };

          return c.json(responseData, 200);
        } catch (error: any) {
          console.error("Error restoring customer plan:", error);

          if (error.code === Status.NOT_FOUND) {
            return c.json({ error: "Customer not found" }, 404);
          } else if (error.code === Status.PERMISSION_DENIED) {
            return c.json({ error: "Permission denied" }, 403);
          }

          return c.json({ error: "Failed to restore customer plan" }, 500);
        }
      } catch (error) {
        console.error("Error in restore customer plan route:", error);
        return c.json({ error: "Internal server error" }, 500);
      }
    }
  );
