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
    billing_type: z.string().openapi({
      description: "Billing type",
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
    billing_type: z.string().openapi({
      description: "Billing type",
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
    billing_type: z.string().optional().openapi({
      description: "Billing type",
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
    billing_type: z.string().optional().openapi({
      description: "Billing type",
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
    data: z.array(planbookSchema).openapi({
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
    billing_types: z.array(z.string()).openapi({
      description:
        "List of billing types to filter by (EndUser, Business, LeaseLine)",
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

export const getFilteredPlanbooksResponseSchema = z
  .object({
    data: z.array(planbookSchema).openapi({
      description: "List of planbook entries",
    }),
    meta: paginationMetaSchema.optional().openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetFilteredPlanbooksResponse",
    description: "Response with filtered planbook entries",
  });

// Business for plan schema
export const businessPlanbookForPlanSchema = z
  .object({
    id: z.string().openapi({
      description: "Business ID",
    }),
    name: z.string().openapi({
      description: "Business name",
    }),
    type: z.string().openapi({
      description: "Business type",
    }),
    billing_type: z.string().openapi({
      description: "Billing type",
    }),
    customer_count: z.number().int().openapi({
      description: "Number of customers associated with this business",
    }),
    price: z.string().openapi({
      description: "Price of the plan",
    }),
    period: z.string().openapi({
      description: "Period of the plan",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
    business_id: z.string().uuid().openapi({
      description: "Business ID",
    }),
  })
  .openapi({
    title: "BusinessPlanbookForPlan",
    description: "Business planbook entity for plan",
  });

export const getBusinessesForPlanRequestSchema = z
  .object({
    limit: z.number().int().openapi({
      description: "Pagination limit (max number of items to return)",
    }),
    offset: z.number().int().openapi({
      description: "Pagination offset (starting position)",
    }),
    search: z.string().openapi({
      description: "Search term to filter businesses by name",
    }),
    types: z.array(z.string()).openapi({
      description: "Filter businesses by type (B2B, B2B2C, B2C)",
    }),
    billing_types: z.array(z.string()).openapi({
      description:
        "Filter businesses by billing type (EndUser, LeaseLine, Business)",
    }),
    plan_id: z.string().openapi({
      description: "Plan ID",
    }),
  })
  .openapi({
    title: "GetBusinessesForPlanRequest",
    description: "Request to get businesses for a specific plan",
  });

// Response with all businesses
export const getBusinessesPlanbookForPlanResponseSchema = z
  .object({
    data: z.array(businessPlanbookForPlanSchema).openapi({
      description: "List of businesses",
    }),
    meta: paginationMetaSchema.openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetBusinessesPlanbookForPlanResponse",
    description: "Response with all businesses for a specific plan",
  });

export const planPlanbookForBusinessSchema = z
  .object({
    id: z.string().openapi({
      description: "Plan ID",
    }),
    name: z.string().openapi({
      description: "Plan name",
    }),
    up_speed: z.number().int().openapi({
      description: "Plan upload speed",
    }),
    down_speed: z.number().int().openapi({
      description: "Plan download speed",
    }),
    up_speed_unit: z.string().openapi({
      description: "Plan upload speed unit (Kbps, Mbps, etc.)",
    }),
    down_speed_unit: z.string().openapi({
      description: "Plan download speed unit (Kbps, Mbps, etc.)",
    }),
    is_post_fup: z.boolean().openapi({
      description: "Plan post FUP (true or false)",
    }),
    data_limit: z.string().optional().openapi({
      description: "Plan data limit",
    }),
    type: z.string().openapi({
      description: "Plan type (Commercial, Enterprise, etc.)",
    }),
    price: z.string().openapi({
      description: "Plan price",
    }),
    period: z.string().openapi({
      description: "Plan period (e.g., monthly, yearly)",
    }),
    customer_count: z.number().int().openapi({
      description: "Number of customers associated with this plan",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
    plan_id: z.string().uuid().openapi({
      description: "Plan ID",
    }),
    billing_type: z.string().openapi({
      description: "Billing type",
    }),
  })
  .openapi({
    title: "PlanPlanbookForBusiness",
    description: "Plan planbook entity for business",
  });

export const getPlansPlanbookForBusinessRequestSchema = z
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
    business_id: z.string().openapi({
      description: "Business ID",
    }),
    billing_types: z.array(z.string()).openapi({
      description:
        "Filter plans by billing type (EndUser, LeaseLine, Business)",
    }),
  })
  .openapi({
    title: "GetPlansPlanbookForBusinessRequest",
    description: "Request to get plans for a specific business",
  });

// Response with all plans
export const getPlansPlanbookForBusinessResponseSchema = z
  .object({
    data: z.array(planPlanbookForBusinessSchema).openapi({
      description: "List of plans",
    }),
    meta: paginationMetaSchema.optional().openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetPlansPlanbookForBusinessResponse",
    description: "Response with all plans for a specific business",
  });
