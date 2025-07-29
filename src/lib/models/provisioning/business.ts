import { z } from "zod";
import { authContextSchema, paginationMetaSchema } from "./common";
import "zod-openapi/extend";

// Business schema definition based on business.proto
export const businessSchema = z
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
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
  })
  .openapi({
    title: "Business",
    description: "Business entity",
  });

// Business with counts schema
export const businessWithCountsSchema = z
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
    customer_count: z.number().int().openapi({
      description: "Number of customers associated with this business",
    }),
    planbook_count: z.number().int().openapi({
      description: "Number of planbooks associated with this business",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
  })
  .openapi({
    title: "BusinessWithCounts",
    description: "Business entity with associated counts",
  });

// Request to create a new business
export const createBusinessRequestSchema = z
  .object({
    business_params: z
      .object({
        name: z.string().openapi({
          description: "Business name",
        }),
        type: z.string().openapi({
          description: "Business type",
        }),
      })
      .openapi({
        description: "Business parameters",
      }),
  })
  .openapi({
    title: "CreateBusinessRequest",
    description: "Request to create a new business",
  });

// Response from creating a new business
export const createBusinessResponseSchema = z
  .object({
    businesses: z.array(businessSchema).openapi({
      description: "Created businesses",
    }),
  })
  .openapi({
    title: "CreateBusinessResponse",
    description: "Response from creating a new business",
  });

// Request to update an existing business
export const updateBusinessRequestSchema = z
  .object({
    business_params: z
      .object({
        name: z.string().optional().openapi({
          description: "Business name",
        }),
        type: z.string().optional().openapi({
          description: "Business type",
        }),
      })
      .openapi({
        description: "Business parameters to update",
      }),
  })
  .openapi({
    title: "UpdateBusinessRequest",
    description: "Request to update an existing business",
  });

// Response from updating a business
export const updateBusinessResponseSchema = z
  .object({
    updated_business: z.array(businessSchema).openapi({
      description: "Updated business",
    }),
    updated_planbook: z.array(z.any()).openapi({
      description: "Updated planbooks",
    }),
    updated_radgroupreply: z.array(z.any()).openapi({
      description: "Updated radgroupreply entries",
    }),
    updated_radusergroup: z.array(z.any()).openapi({
      description: "Updated radusergroup entries",
    }),
  })
  .openapi({
    title: "UpdateBusinessResponse",
    description: "Response from updating a business",
  });

// Request to get a specific business
export const getBusinessRequestSchema = z
  .object({
    business_id: z.string().openapi({
      description: "Business ID",
    }),
  })
  .openapi({
    title: "GetBusinessRequest",
    description: "Request to get a specific business",
  });

// Response with business details
export const getBusinessResponseSchema = z
  .object({
    businesses: z.array(businessSchema).openapi({
      description: "Business details",
    }),
  })
  .openapi({
    title: "GetBusinessResponse",
    description: "Response with business details",
  });

// Request to get all businesses
export const getBusinessesRequestSchema = z
  .object({
    limit: z.number().optional().openapi({
      description: "Limit for pagination",
    }),
    offset: z.number().optional().openapi({
      description: "Offset for pagination",
    }),
    search: z.string().optional().openapi({
      description: "Search query",
    }),
  })
  .openapi({
    title: "GetBusinessesRequest",
    description: "Request to get all businesses",
  });

// Response with all businesses
export const getBusinessesResponseSchema = z
  .object({
    data: z.array(businessWithCountsSchema).openapi({
      description: "List of businesses",
    }),
    meta: paginationMetaSchema.openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetBusinessesResponse",
    description: "Response with all businesses",
  });
