import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema } from "./common";

import "zod-openapi/extend";

// Config schema definition
export const configSchema = z
  .object({
    id: z.string().openapi({
      description: "Config ID",
    }),
    organization_id: z.string().openapi({
      description: "Organization ID",
    }),
    default_post_fup_id: z.string().optional().openapi({
      description: "Default post FUP ID",
    }),
  })
  .openapi({
    title: "Config",
    description: "Organization configuration",
  });

// Request to get organization configuration
export const getOrganizationConfigRequestSchema = z
  .object({
  })
  .openapi({
    title: "GetOrganizationConfigRequest",
    description: "Request to get organization config",
  });

// Response with organization configuration
export const getOrganizationConfigResponseSchema = z
  .object({
    config: configSchema.openapi({
      description: "Organization configuration",
    }),
  })
  .openapi({
    title: "GetOrganizationConfigResponse",
    description: "Response with organization config",
  });

// Request to update organization configuration
export const updateOrganizationConfigRequestSchema = z
  .object({
    config_params: z
      .object({
        organization_id: z.string().openapi({
          description: "Organization ID",
        }),
        default_post_fup_id: z.string().optional().openapi({
          description: "Default post FUP ID",
        }),
      })
      .openapi({
        description: "Config parameters to update",
      }),
  })
  .openapi({
    title: "UpdateOrganizationConfigRequest",
    description: "Request to update organization config",
  });

// Response from updating organization configuration
export const updateOrganizationConfigResponseSchema = z
  .object({
    config: z.array(configSchema).openapi({
      description: "Updated configuration",
    }),
  })
  .openapi({
    title: "UpdateOrganizationConfigResponse",
    description: "Response from updating organization config",
  });
