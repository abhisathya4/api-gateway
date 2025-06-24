import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema, paginationMetaSchema } from "./common";
import { planbookSchema } from "./planbook";
import { radgroupreplySchema, radusergroupSchema } from "./radius";

// These will be defined in their respective files
// Using forward declarations to avoid circular dependencies

import "zod-openapi/extend";

// Plan schema definition
export const planSchema = z
  .object({
    id: z.string().openapi({
      description: "Plan ID",
    }),
    name: z.string().openapi({
      description: "Plan name",
    }),
    up_speed: z.number().int().openapi({
      description: "Upload speed",
    }),
    down_speed: z.number().int().openapi({
      description: "Download speed",
    }),
    type: z.string().openapi({
      description: "Plan type (Commercial, Enterprise, etc.)",
    }),
    up_speed_unit: z.string().openapi({
      description: "Upload speed unit (Kbps, Mbps, etc.)",
    }),
    down_speed_unit: z.string().openapi({
      description: "Download speed unit (Kbps, Mbps, etc.)",
    }),
    is_post_fup: z.boolean().openapi({
      description: "Whether this is a post-FUP plan",
    }),
    data_limit: z.number().int().optional().openapi({
      description: "Data limit in Bytes",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
  })
  .openapi({
    title: "Plan",
    description: "Internet service plan details",
  });

// Plan with counts schema
export const planWithCountsSchema = planSchema
  .extend({
    planbook_count: z.number().int().openapi({
      description: "Number of planbooks using this plan",
    }),
    customer_count: z.number().int().openapi({
      description: "Number of customers using this plan",
    }),
  })
  .openapi({
    title: "PlanWithCounts",
    description: "Internet service plan with usage counts",
  });

// Plan parameters for creation
export const createPlanParamsSchema = z
  .object({
    name: z.string().openapi({
      description: "Plan name",
    }),
    up_speed: z.number().int().openapi({
      description: "Upload speed",
    }),
    down_speed: z.number().int().openapi({
      description: "Download speed",
    }),
    up_speed_unit: z.string().openapi({
      description: "Upload speed unit (Kbps, Mbps, etc.)",
    }),
    down_speed_unit: z.string().openapi({
      description: "Download speed unit (Kbps, Mbps, etc.)",
    }),
    is_post_fup: z.boolean().openapi({
      description: "Whether this is a post-FUP plan",
    }),
    data_limit: z.number().int().optional().openapi({
      description: "Data limit in Bytes",
    }),
    type: z.string().openapi({
      description: "Plan type (Commercial, Enterprise, etc.)",
    }),
  })
  .openapi({
    title: "CreatePlanParams",
    description: "Plan parameters for creation",
  });

// Request to create a new internet service plan
export const createPlanRequestSchema = z
  .object({
    plan_params: createPlanParamsSchema.openapi({
      description: "Plan parameters",
    }),
  })
  .openapi({
    title: "CreatePlanRequest",
    description: "Request to create a new internet service plan",
  });

// Response from creating a new internet service plan
export const createPlanResponseSchema = z
  .object({
    plans: z.array(planSchema).openapi({
      description: "Created plans",
    }),
  })
  .openapi({
    title: "CreatePlanResponse",
    description: "Response from creating a new internet service plan",
  });

// Plan parameters for update
export const updatePlanParamsSchema = z
  .object({
    name: z.string().optional().openapi({
      description: "Plan name",
    }),
    up_speed: z.number().int().optional().openapi({
      description: "Upload speed",
    }),
    down_speed: z.number().int().optional().openapi({
      description: "Download speed",
    }),
    up_speed_unit: z.string().optional().openapi({
      description: "Upload speed unit (Kbps, Mbps, etc.)",
    }),
    down_speed_unit: z.string().optional().openapi({
      description: "Download speed unit (Kbps, Mbps, etc.)",
    }),
    is_post_fup: z.boolean().optional().openapi({
      description: "Whether this is a post-FUP plan",
    }),
    data_limit: z.number().int().optional().openapi({
      description: "Data limit in Bytes",
    }),
    type: z.string().optional().openapi({
      description: "Plan type (Commercial, Enterprise, etc.)",
    }),
  })
  .openapi({
    title: "UpdatePlanParams",
    description: "Plan parameters for update",
  });

// Request to update an existing internet service plan
export const updatePlanRequestSchema = z
  .object({
    plan_params: updatePlanParamsSchema.openapi({
      description: "Plan parameters to update",
    }),
  })
  .openapi({
    title: "UpdatePlanRequest",
    description: "Request to update an existing internet service plan",
  });

// Response from updating an internet service plan
export const updatePlanResponseSchema = z
  .object({
    updated_plan: z.array(planSchema).openapi({
      description: "Updated plans",
    }),
    // These will be properly typed when the referenced schemas are defined
    updated_planbook: z.array(planbookSchema).openapi({
      description: "Updated planbooks",
    }),
    updated_radgroupreply: z.array(radgroupreplySchema).openapi({
      description: "Updated RADIUS group replies",
    }),
    updated_radusergroup: z.array(radusergroupSchema).openapi({
      description: "Updated RADIUS user groups",
    }),
  })
  .openapi({
    title: "UpdatePlanResponse",
    description: "Response from updating an internet service plan",
  });

// Request to get a specific internet service plan
export const getPlanRequestSchema = z
  .object({
    plan_id: z.string().openapi({
      description: "Plan ID to retrieve",
    }),
  })
  .openapi({
    title: "GetPlanRequest",
    description: "Request to get a specific internet service plan",
  });

// Response with plan details
export const getPlanResponseSchema = z
  .object({
    plans: z.array(planSchema).openapi({
      description: "Retrieved plans",
    }),
  })
  .openapi({
    title: "GetPlanResponse",
    description: "Response with plan details",
  });

// Request to get all internet service plans
export const getPlansRequestSchema = z
  .object({
    limit: z.number().int().openapi({
      description: "Pagination limit (max number of items to return)",
    }),
    offset: z.number().int().openapi({
      description: "Pagination offset (starting position)",
    }),
    search: z.string().openapi({
      description: "Search term to filter plans by name",
    }),
    types: z.array(z.string()).openapi({
      description: "Filter plans by type (Commercial, Enterprise)",
    }),
  })
  .openapi({
    title: "GetPlansRequest",
    description: "Request to get all internet service plans",
  });

// Response with all plans
export const getPlansResponseSchema = z
  .object({
    data: z.array(planWithCountsSchema).openapi({
      description: "List of plans with counts",
    }),
    meta: paginationMetaSchema.openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetPlansResponse",
    description: "Response with all plans",
  });
