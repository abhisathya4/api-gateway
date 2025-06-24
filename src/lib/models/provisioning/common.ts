import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";

import "zod-openapi/extend";

// Empty message for requests/responses with no content
export const emptySchema = z.object({}).openapi({
  title: "Empty",
  description: "Empty message for requests/responses with no content",
});

// Authentication context schema
export const authContextSchema = z
  .object({
    token: z.string().optional().openapi({
      description: "The authentication token (typically JWT from Auth0)",
    }),
    tenant_id: z.string().openapi({
      description: "The tenant/organization ID",
    }),
  })
  .openapi({
    title: "AuthContext",
    description:
      "Auth context that can be used for passing authentication information",
  });

// Pagination metadata schema
export const paginationMetaSchema = z
  .object({
    total: z.number().int().openapi({
      description: "Total number of items available",
    }),
    limit: z.number().int().openapi({
      description: "Current page limit",
    }),
    offset: z.number().int().openapi({
      description: "Current page offset",
    }),
  })
  .openapi({
    title: "PaginationMeta",
    description: "Pagination metadata for paginated responses",
  });

// Pagination request schema
export const paginationRequestSchema = z
  .object({
    limit: z.number().int().openapi({
      description: "Pagination limit (max number of items to return)",
    }),
    offset: z.number().int().openapi({
      description: "Pagination offset (starting position)",
    }),
  })
  .openapi({
    title: "PaginationRequest",
    description: "Common pagination request fields",
  });
