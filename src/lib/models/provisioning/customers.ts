import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema, paginationMetaSchema } from "./common";
import {
  radcheckSchema,
  radgroupreplySchema,
  radusergroupSchema,
} from "./radius";

import "zod-openapi/extend";

// Customer schema definition
export const customerSchema = z
  .object({
    id: z.string().openapi({
      description: "Customer ID",
    }),
    name: z.string().openapi({
      description: "Customer name",
    }),
    email: z.string().email().openapi({
      description: "Customer email address",
    }),
    username: z.string().openapi({
      description: "Customer username for authentication",
    }),
    subscription_plan: z.string().optional().openapi({
      description: "Customer's subscription plan",
    }),
    post_fup_plan: z.string().optional().openapi({
      description: "Customer's post-FUP plan",
    }),
    created_at: z.string().openapi({
      description: "Customer creation timestamp",
    }),
    active: z.boolean().openapi({
      description: "Whether the customer is active",
    }),
    last_renew_date: z.string().optional().openapi({
      description: "Last renewal date",
    }),
    data_usage: z.number().int().openapi({
      description: "Customer's data usage in bytes",
    }),
    last_active: z.string().datetime().openapi({
      description: "Last active timestamp",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
  })
  .openapi({
    title: "Customer",
    description: "Customer entity details",
  });

// Extended customer information including plan and business details
export const customerWithPlanInfoSchema = z
  .object({
    // Base customer fields
    id: z.string().openapi({
      description: "Customer ID",
    }),
    name: z.string().openapi({
      description: "Customer name",
    }),
    email: z.string().email().openapi({
      description: "Customer email address",
    }),
    username: z.string().openapi({
      description: "Customer username for authentication",
    }),
    subscription_plan: z.string().optional().openapi({
      description: "Customer's subscription plan",
    }),
    post_fup_plan: z.string().optional().openapi({
      description: "Customer's post-FUP plan",
    }),
    created_at: z.string().openapi({
      description: "Customer creation timestamp",
    }),
    active: z.boolean().openapi({
      description: "Whether the customer is active",
    }),
    last_renew_date: z.string().optional().openapi({
      description: "Last renewal date",
    }),
    data_usage: z.number().int().openapi({
      description: "Customer's data usage in bytes",
    }),
    data_limit: z.number().int().optional().openapi({
      description: "Customer's data limit in bytes",
    }),
    last_active: z.string().datetime().openapi({
      description: "Last active timestamp",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),

    // Extended fields from joins
    plan_name: z.string().nullable().optional().openapi({
      description: "Name of the customer's plan",
    }),
    business_name: z.string().nullable().optional().openapi({
      description: "Name of the customer's business",
    }),
    plan_id: z.string().nullable().optional().openapi({
      description: "ID of the customer's plan",
    }),
    business_id: z.string().nullable().optional().openapi({
      description: "ID of the customer's business",
    }),
  })
  .openapi({
    title: "CustomerWithPlanInfo",
    description:
      "Extended customer information including plan and business details",
  });

export const customerWithPlanBusinessAndPlanbookInfoSchema = z
  .object({
    // Base customer fields
    id: z.string().openapi({
      description: "Customer ID",
    }),
    name: z.string().openapi({
      description: "Customer name",
    }),
    username: z.string().openapi({
      description: "Customer username for authentication",
    }),
    subscription_plan: z.string().optional().openapi({
      description: "Customer's subscription plan",
    }),
    post_fup_plan: z.string().optional().openapi({
      description: "Customer's post-FUP plan",
    }),
    active: z.boolean().openapi({
      description: "Whether the customer is active",
    }),
    last_active: z.string().datetime().openapi({
      description: "Last active timestamp",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),

    // Extended fields from joins
    plan_name: z.string().nullable().optional().openapi({
      description: "Name of the customer's plan",
    }),
    plan_id: z.string().nullable().optional().openapi({
      description: "ID of the customer's plan",
    }),
    business_name: z.string().nullable().optional().openapi({
      description: "Name of the customer's business",
    }),
    business_id: z.string().nullable().optional().openapi({
      description: "ID of the customer's business",
    }),
    price: z.string().nullable().optional().openapi({
      description: "Price of the customer's plan",
    }),
    period: z.string().nullable().optional().openapi({
      description: "Period of the customer's plan",
    }),
  })
  .openapi({
    title: "CustomerWithPlanInfo",
    description:
      "Extended customer information including plan and business details",
  });

// Customer parameters for creation
export const customerParamsSchema = z
  .object({
    id: z.string().openapi({
      description: "Customer ID",
    }),
    name: z.string().openapi({
      description: "Customer name",
    }),
    email: z.string().email().openapi({
      description: "Customer email address",
    }),
    username: z.string().openapi({
      description: "Customer username for authentication",
    }),
    subscription_plan: z.string().optional().openapi({
      description: "Customer's subscription plan",
    }),
    post_fup_plan: z.string().optional().openapi({
      description: "Customer's post-FUP plan",
    }),
    rad_password: z.string().openapi({
      description: "RADIUS password for authentication",
    }),
  })
  .openapi({
    title: "CustomerParams",
    description: "Customer parameters for creation",
  });

// Request to create a new customer
export const createCustomerRequestSchema = z
  .object({
    customer_params: customerParamsSchema.openapi({
      description: "Customer parameters",
    }),
  })
  .openapi({
    title: "CreateCustomerRequest",
    description: "Request to create a new customer",
  });

// Response from creating a new customer
export const createCustomerResponseSchema = z
  .object({
    created_customer: z.array(customerSchema).openapi({
      description: "Created customer",
    }),
    // These will be properly typed when the referenced schemas are defined
    created_radius_user: z.array(radcheckSchema).openapi({
      description: "Created RADIUS user",
    }),
    plan_rad_groups: z.array(radgroupreplySchema).openapi({
      description: "Plan RADIUS groups",
    }),
  })
  .openapi({
    title: "CreateCustomerResponse",
    description: "Response from creating a new customer",
  });

// Customer details to update
export const updateCustomerDetailsParamsSchema = z
  .object({
    name: z.string().optional().openapi({
      description: "Customer name",
    }),
    email: z.string().email().optional().openapi({
      description: "Customer email address",
    }),
  })
  .openapi({
    title: "UpdateCustomerDetailsParams",
    description: "Customer details to update",
  });

// Request to update a customer's basic information
export const updateCustomerDetailsRequestSchema = z
  .object({
    customer_params: updateCustomerDetailsParamsSchema.openapi({
      description: "Customer details to update",
    }),
  })
  .openapi({
    title: "UpdateCustomerDetailsRequest",
    description: "Request to update a customer's basic information",
  });

// Response from updating customer details
export const updateCustomerDetailsResponseSchema = z
  .object({
    customers: z.array(customerSchema).openapi({
      description: "Updated customers",
    }),
  })
  .openapi({
    title: "UpdateCustomerDetailsResponse",
    description: "Response from updating customer details",
  });

// Plan parameters to update
export const updateCustomerPlanParamsSchema = z
  .object({
    subscription_plan: z.string().optional().openapi({
      description: "Customer's subscription plan",
    }),
    post_fup_plan: z.string().optional().openapi({
      description: "Customer's post-FUP plan",
    }),
  })
  .openapi({
    title: "UpdateCustomerPlanParams",
    description: "Plan parameters to update",
  });

// Request to update a customer's plan
export const updateCustomerPlanRequestSchema = z
  .object({
    customer_params: updateCustomerPlanParamsSchema.openapi({
      description: "Plan parameters to update",
    }),
  })
  .openapi({
    title: "UpdateCustomerPlanRequest",
    description: "Request to update a customer's plan",
  });

// Response from updating customer plan
export const updateCustomerPlanResponseSchema = z
  .object({
    updated_customer: z.array(customerSchema).openapi({
      description: "Updated customer",
    }),
    // These will be properly typed when the referenced schemas are defined
    updated_radusergroup: z.array(radusergroupSchema).openapi({
      description: "Updated RADIUS user groups",
    }),
  })
  .openapi({
    title: "UpdateCustomerPlanResponse",
    description: "Response from updating customer plan",
  });

// Request to get a specific customer
export const getCustomerRequestSchema = z
  .object({
    customer_id: z.string().openapi({
      description: "Customer ID to retrieve",
    }),
  })
  .openapi({
    title: "GetCustomerRequest",
    description: "Request to get a specific customer",
  });

// Response with customer details
export const getCustomerResponseSchema = z
  .object({
    data: z.array(customerSchema).openapi({
      description: "Retrieved customers",
    }),
  })
  .openapi({
    title: "GetCustomerResponse",
    description: "Response with customer details",
  });

// Request for getting customers with filtering and pagination
export const getCustomersRequestSchema = z
  .object({
    limit: z.number().int().openapi({
      description: "Pagination limit (max number of items to return)",
    }),
    offset: z.number().int().openapi({
      description: "Pagination offset (starting position)",
    }),
    search: z.string().optional().openapi({
      description: "Optional search term to filter by name, username, or email",
    }),
    plan_ids: z.array(z.string()).optional().openapi({
      description: "Optional list of plan IDs to filter by",
    }),
    business_ids: z.array(z.string()).optional().openapi({
      description: "Optional list of business IDs to filter by",
    }),
    status: z.array(z.boolean()).optional().openapi({
      description: "Optional status filter (active/inactive)",
    }),
  })
  .openapi({
    title: "GetCustomersRequest",
    description: "Request for getting customers with filtering and pagination",
  });

// Response containing customers and pagination metadata
export const getCustomersResponseSchema = z
  .object({
    data: z.array(customerWithPlanInfoSchema).openapi({
      description: "List of customers with extended information",
    }),
    meta: paginationMetaSchema.openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetCustomersResponse",
    description: "Response containing customers and pagination metadata",
  });

export const getCustomersWithPlanBusinessAndPlanbookInfoRequestSchema = z
  .object({
    limit: z.number().int().openapi({
      description: "Pagination limit (max number of items to return)",
    }),
    offset: z.number().int().openapi({
      description: "Pagination offset (starting position)",
    }),
    search: z.string().optional().openapi({
      description: "Optional search term to filter by name, username, or email",
    }),
    plan_ids: z.array(z.string()).optional().openapi({
      description: "Optional list of plan IDs to filter by",
    }),
    business_ids: z.array(z.string()).optional().openapi({
      description: "Optional list of business IDs to filter by",
    }),
    status: z.array(z.boolean()).optional().openapi({
      description: "Optional status filter (active/inactive)",
    }),
  })
  .openapi({
    title: "GetCustomersWithPlanBusinessAndPlanbookInfoRequest",
    description:
      "Request for getting customers with plan, business, and planbook information with filtering and pagination",
  });

export const getCustomersWithPlanBusinessAndPlanbookInfoResponseSchema = z
  .object({
    data: z.array(customerWithPlanBusinessAndPlanbookInfoSchema).openapi({
      description: "List of customers with extended information",
    }),
    meta: paginationMetaSchema.optional().openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetCustomersWithPlanBusinessAndPlanbookInfoResponse",
    description:
      "Response containing customers with plan, business, and planbook information",
  });

// Request to restore a customer's plan after FUP enforcement
export const restoreCustomerPlanRequestSchema = z
  .object({
    customer_id: z.string().openapi({
      description: "Customer ID to restore",
    }),
  })
  .openapi({
    title: "RestoreCustomerPlanRequest",
    description: "Request to restore a customer's plan after FUP enforcement",
  });

// Response from restoring customer plan
export const restoreCustomerPlanResponseSchema = z
  .object({
    restored_customer: z.array(customerSchema).openapi({
      description: "Restored customer",
    }),
    // These will be properly typed when the referenced schemas are defined
    restored_radusergroups: z.array(radusergroupSchema).openapi({
      description: "Restored RADIUS user groups",
    }),
  })
  .openapi({
    title: "RestoreCustomerPlanResponse",
    description: "Response from restoring customer plan",
  });
