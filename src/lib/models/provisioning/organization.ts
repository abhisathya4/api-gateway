import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema } from "./common";
import { businessSchema } from "./business";
import { configSchema } from "./config";

import "zod-openapi/extend";

// Organization schema definition
export const organizationSchema = z
  .object({
    id: z.string().openapi({
      description: "Organization ID",
    }),
    name: z.string().openapi({
      description: "Organization name",
    }),
    auth_id: z.string().openapi({
      description: "Authentication ID",
    }),
    security_level: z.string().openapi({
      description: "Security level",
    }),
  })
  .openapi({
    title: "Organization",
    description: "Organization entity",
  });

// Request to create a new organization at the system level
export const createOrganizationRequestSchema = z
  .object({
    org_params: organizationSchema.openapi({
      description: "Organization parameters",
    }),
  })
  .openapi({
    title: "CreateOrganizationRequest",
    description: "Request to create a new organization at the system level",
  });

// Response from creating a new organization
export const createOrganizationResponseSchema = z
  .object({
    org: organizationSchema.openapi({
      description: "Created organization",
    }),
    // These will be properly typed when the referenced schemas are defined
    business: z.array(businessSchema).openapi({
      description: "Associated businesses",
    }),
    config: z.array(configSchema).openapi({
      description: "Associated configurations",
    }),
  })
  .openapi({
    title: "CreateOrganizationResponse",
    description: "Response from creating a new organization",
  });

// Request to get organization details
export const getOrganizationRequestSchema = z
  .object({
  })
  .openapi({
    title: "GetOrganizationRequest",
    description: "Request to get organization details",
  });

// Response with organization details
export const getOrganizationResponseSchema = z
  .object({
    org: organizationSchema.openapi({
      description: "Organization details",
    }),
  })
  .openapi({
    title: "GetOrganizationResponse",
    description: "Response with organization details",
  });

// Request to update organization details
export const updateOrganizationRequestSchema = z
  .object({
    org_params: z
      .object({
        name: z.string().optional().openapi({
          description: "Organization name",
        }),
        security_level: z.string().optional().openapi({
          description: "Security level",
        }),
      })
      .openapi({
        description: "Organization parameters to update",
      }),
  })
  .openapi({
    title: "UpdateOrganizationRequest",
    description: "Request to update organization details",
  });

// Response from updating organization details
export const updateOrganizationResponseSchema = z
  .object({
    org: organizationSchema.openapi({
      description: "Updated organization",
    }),
  })
  .openapi({
    title: "UpdateOrganizationResponse",
    description: "Response from updating organization details",
  });
