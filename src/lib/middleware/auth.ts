import { createMiddleware } from "hono/factory";
import { GrpcClient } from "../../grpc/grpc-client";
import * as organizationPb from "../../grpc/generated/organization_pb";
import * as commonPb from "../../grpc/generated/common_pb";
import { promisifyGrpcCall } from "../../lib/utils/grpcUtils";

// Bearer token authentication middleware
const authMiddleware = createMiddleware<{
  Variables: { token: string; tenant_id: string };
}>(async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json(
      { error: "Unauthorized: Missing or invalid Bearer token" },
      401
    );
  }

  const token = authHeader.substring(7); // Remove "Bearer " prefix

  if (!token) {
    return c.json({ error: "Unauthorized: Missing token" }, 401);
  }

  // Store the token in the context for use in route handlers
  c.set("token", token);

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

    const tenant_id = response.getOrganization()!.getId();

    // Store the tenant ID in the context for use in route handlers
    c.set("tenant_id", tenant_id);
  } catch (error: any) {
    console.error("Error getting organization in auth:", error);
    return c.json({ error: "Unauthorized: Invalid token" }, 401);
  }

  return next();
});

// Apply auth middleware to all routes
export default authMiddleware;
