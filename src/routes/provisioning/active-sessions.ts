import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator as zValidator } from "hono-openapi/zod";
import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { GrpcClient } from "../../grpc/grpc-client";
import * as activeSessionsPb from "../../grpc/generated/active-sessions_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import {
  getActiveSessionsRequestSchema,
  getActiveSessionsResponseSchema,
} from "../../lib/models/provisioning";
import { errorSchema } from "../../lib/utils/routingUtils";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

import "zod-openapi/extend";
import authMiddleware from "@/lib/middleware/auth";

export const activeSessionsRoutes = new Hono().get(
  "/",
  describeRoute({
    summary: "Get Active Sessions",
    description:
      "Get active RADIUS sessions with pagination and filtering options",
    tags: ["Active Sessions"],
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
        description:
          "Search term to filter by username, calling station ID, or framed IP",
      },
      {
        name: "nas_devices",
        in: "query",
        required: false,
        schema: { type: "array", items: { type: "string" } },
        description: "NAS device IPs to filter by",
        style: "form",
        explode: true,
      },
    ],
    responses: {
      200: {
        description: "Active sessions retrieved successfully",
        content: {
          "application/json": {
            schema: resolver(getActiveSessionsResponseSchema) as any,
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

      const limit = parseInt(c.req.query("limit") || "10");
      const offset = parseInt(c.req.query("offset") || "0");
      const search = c.req.query("search");
      const nasDevices = c.req.queries("nas_devices");

      // Create gRPC request
      const grpcRequest = new activeSessionsPb.GetActiveSessionsRequest();

      // Set auth context
      const authContext = new commonPb.AuthContext();
      authContext.setToken(token);
      grpcRequest.setAuthContext(authContext);

      // Set pagination and filter parameters
      grpcRequest.setLimit(limit);
      grpcRequest.setOffset(offset);

      if (search) {
        grpcRequest.setSearch(search);
      }

      if (nasDevices && nasDevices.length > 0) {
        grpcRequest.setNasDevicesList(nasDevices);
      }

      // Get gRPC client and make the call
      const client = GrpcClient.getInstance().getActiveSessionsClient();

      try {
        // Use promisifyGrpcCall instead of manual Promise creation
        const response =
          await promisifyGrpcCall<activeSessionsPb.GetActiveSessionsResponse>(
            (callback) => client.getActiveSessions(grpcRequest, callback)
          );

        // Convert gRPC response to our schema format
        const sessions = response.getDataList().map((session) => {
          const sessionObj = session.toObject();
          const startTime = session.getAcctstarttime()?.toDate();

          return {
            id: sessionObj.id,
            username: sessionObj.username,
            nasipaddress: sessionObj.nasipaddress,
            acctstarttime: startTime ? startTime.toISOString() : undefined,
            acctsessiontime: sessionObj.acctsessiontime,
            acctinputoctets: sessionObj.acctinputoctets,
            acctoutputoctets: sessionObj.acctoutputoctets,
            framedipaddress: sessionObj.framedipaddress,
            callingstationid: sessionObj.callingstationid,
            acctstatustype: sessionObj.acctstatustype,
          };
        });

        const meta = response.getMeta()?.toObject();

        const responseData = {
          data: sessions,
          meta: meta
            ? {
                total: meta.total,
                limit: meta.limit,
                offset: meta.offset,
              }
            : {
                total: sessions.length,
                limit,
                offset,
              },
        };

        return c.json(responseData, 200);
      } catch (error: any) {
        console.error("Error getting active sessions:", error);

        if (error.code === Status.PERMISSION_DENIED) {
          return c.json({ error: "Permission denied" }, 403);
        }

        return c.json({ error: "Failed to get active sessions" }, 500);
      }
    } catch (error) {
      console.error("Error in get active sessions route:", error);
      return c.json({ error: "Internal server error" }, 500);
    }
  }
);
