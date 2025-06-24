import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema, paginationMetaSchema } from "./common";
import { radgroupreplySchema } from "./radius";

import "zod-openapi/extend";

// Planbook schema definition
export const planbookSchema = z
  .object({
    id: z.string().openapi({
      description: "Planbook entry ID",
    }),
    plan_id: z.string().openapi({
      description: "Plan ID",
    }),
    business_id: z.string().openapi({
      description: "Business ID",
    }),
    period: z.string().openapi({
      description: "Billing period (e.g., monthly, yearly)",
    }),
    price: z.string().openapi({
      description: "Price for the plan",
    }),
    groupname: z.string().openapi({
      description: "RADIUS group name",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
  })
  .openapi({
    title: "Planbook",
    description: "Planbook entry details",
  });

// Planbook details schema with extended information
export const planbookDetailsSchema = z
  .object({
    id: z.string().openapi({
      description: "Planbook entry ID",
    }),
    plan_id: z.string().openapi({
      description: "Plan ID",
    }),
    plan_name: z.string().openapi({
      description: "Plan name",
    }),
    plan_type: z.string().openapi({
      description: "Plan type (Commercial, Enterprise, etc.)",
    }),
    plan_upspeed: z.string().openapi({
      description: "Plan upload speed",
    }),
    plan_downspeed: z.string().openapi({
      description: "Plan download speed",
    }),
    plan_upspeed_unit: z.string().openapi({
      description: "Plan upload speed unit (Kbps, Mbps, etc.)",
    }),
    plan_downspeed_unit: z.string().openapi({
      description: "Plan download speed unit (Kbps, Mbps, etc.)",
    }),
    business_id: z.string().openapi({
      description: "Business ID",
    }),
    business_name: z.string().openapi({
      description: "Business name",
    }),
    period: z.string().openapi({
      description: "Billing period (e.g., monthly, yearly)",
    }),
    price: z.string().openapi({
      description: "Price for the plan",
    }),
    groupname: z.string().openapi({
      description: "RADIUS group name",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
  })
  .openapi({
    title: "PlanbookDetails",
    description:
      "Detailed planbook entry information including plan and business details",
  });

// Planbook parameters for creation
export const createPlanbookParamsSchema = z
  .object({
    plan_id: z.string().openapi({
      description: "Plan ID",
    }),
    business_id: z.string().optional().openapi({
      description: "Business ID",
    }),
    price: z.number().optional().openapi({
      description: "Price for the plan",
    }),
    period: z.string().optional().openapi({
      description: "Billing period (e.g., monthly, yearly)",
    }),
  })
  .openapi({
    title: "CreatePlanbookParams",
    description: "Parameters for creating a new planbook entry",
  });

// Request to create a new planbook entry
export const createPlanbookRequestSchema = z
  .object({
    planbook_params: createPlanbookParamsSchema.openapi({
      description: "Planbook parameters",
    }),
  })
  .openapi({
    title: "CreatePlanbookRequest",
    description: "Request to create a new planbook entry",
  });

// Response from creating a new planbook entry
export const createPlanbookResponseSchema = z
  .object({
    planbooks: z.array(planbookSchema).openapi({
      description: "Created planbook entries",
    }),
    // This will be properly typed when the referenced schema is defined
    radgroupreply_entry: z.array(radgroupreplySchema).openapi({
      description: "RADIUS group reply entries",
    }),
  })
  .openapi({
    title: "CreatePlanbookResponse",
    description: "Response from creating a new planbook entry",
  });

// Planbook parameters for update
export const updatePlanbookParamsSchema = z
  .object({
    price: z.number().optional().openapi({
      description: "Price for the plan",
    }),
    period: z.string().optional().openapi({
      description: "Billing period (e.g., monthly, yearly)",
    }),
  })
  .openapi({
    title: "UpdatePlanbookParams",
    description: "Parameters for updating a planbook entry",
  });

// Request to update a planbook entry
export const updatePlanbookRequestSchema = z
  .object({
    planbook_params: updatePlanbookParamsSchema.openapi({
      description: "Planbook parameters to update",
    }),
  })
  .openapi({
    title: "UpdatePlanbookRequest",
    description: "Request to update a planbook entry",
  });

// Response from updating a planbook entry
export const updatePlanbookResponseSchema = z
  .object({
    planbooks: z.array(planbookSchema).openapi({
      description: "Updated planbook entries",
    }),
  })
  .openapi({
    title: "UpdatePlanbookResponse",
    description: "Response from updating a planbook entry",
  });

// Request to get a specific planbook entry
export const getPlanbookRequestSchema = z
  .object({
    planbook_id: z.string().openapi({
      description: "Planbook entry ID to retrieve",
    }),
  })
  .openapi({
    title: "GetPlanbookRequest",
    description: "Request to get a specific planbook entry",
  });

// Response with planbook entry details
export const getPlanbookResponseSchema = z
  .object({
    planbooks: z.array(planbookSchema).openapi({
      description: "Retrieved planbook entries",
    }),
  })
  .openapi({
    title: "GetPlanbookResponse",
    description: "Response with planbook entry details",
  });

// Request to get all planbook entries
export const getPlanbooksRequestSchema = z
  .object({
    limit: z.number().int().openapi({
      description: "Pagination limit (max number of items to return)",
    }),
    offset: z.number().int().openapi({
      description: "Pagination offset (starting position)",
    }),
    search: z.string().optional().openapi({
      description:
        "Search term to filter by plan name, business name, or price",
    }),
    plan_types: z.array(z.string()).openapi({
      description: "List of plan types to filter by (Commercial, Enterprise)",
    }),
    business_ids: z.array(z.string()).openapi({
      description: "List of business IDs to filter by",
    }),
    plan_ids: z.array(z.string()).openapi({
      description: "List of plan IDs to filter by",
    }),
  })
  .openapi({
    title: "GetPlanbooksRequest",
    description: "Request to get all planbook entries",
  });

// Response with all planbook entries
export const getPlanbooksResponseSchema = z
  .object({
    data: z.array(planbookDetailsSchema).openapi({
      description: "List of planbook entries with details",
    }),
    meta: paginationMetaSchema.optional().openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetPlanbooksResponse",
    description: "Response with all planbook entries",
  });
