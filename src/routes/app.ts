/**
 * @deprecated
 */
import { apiReference } from "@scalar/hono-api-reference";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { logger } from "hono/logger";
import { adminRoutes } from "./provisioning/admin";
import { organizationRoutes } from "./provisioning/organization";
import { planRoutes } from "./provisioning/plan";
import { planbookRoutes } from "./provisioning/planbook";
import { configRoutes } from "./provisioning/config";
import { customersRoutes } from "./provisioning/customers";
import { businessRoutes } from "./provisioning/business";
import { nasRoutes } from "./provisioning/nas";
import { activeSessionsRoutes } from "./provisioning/active-sessions";
import authMiddleware from "@/lib/middleware/auth";
import { env } from "../config/env";

const hostname = env.NODE_ENV === "prod" ? "0.0.0.0" : "localhost";
const port = env.NODE_ENV === "prod" ? 3000 : 3001;

export const app = new Hono();

app.use("*", logger());

// Global error handler
app.onError((err, c) => {
  console.error("Error:", err);
  return c.json({ error: err.message || "Internal Server Error" }, 500);
});

// API routes
const apiRoutes = app
  .basePath("/api/v1")
  .route("/organizations", organizationRoutes)
  .route("/organizations/admins", adminRoutes)
  .route("/active-sessions", activeSessionsRoutes)
  .route("/config", configRoutes)
  .route("/customers", customersRoutes)
  .route("/businesses", businessRoutes)
  .route("/nas", nasRoutes)
  .route("/plans", planRoutes)
  .route("/planbook", planbookRoutes)
  .get("/health", (c) => c.text("OK", 200));

// Open API spec
app
  .get(
    "/openapi",
    openAPISpecs(app, {
      documentation: {
        info: {
          title: "API Gateway for Provisioning",
          version: "1.0.0",
          description: "Auto-generated API documentation.",
        },
        servers: [
          { url: `http://localhost:3000`, description: "Dev Server" },
          { url: `http://localhost:3001`, description: "Backup Dev Server" },
          { url: `https://api.nucleus-cloud.in`, description: "Prod Server" },
        ],
        security: [{ bearerAuth: [] }],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
              description:
                "Enter your Bearer token in the format: Bearer {token}",
            },
          },
        },
      },
    })
  )
  .get(
    "/docs",
    apiReference({
      theme: "saturn",
      spec: { url: "/openapi" },
    })
  );
