import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema } from "./common";

import "zod-openapi/extend";

// Admin schema definition
export const adminSchema = z
  .object({
    id: z.string().openapi({
      description: "Admin ID",
    }),
    organization_id: z.string().openapi({
      description: "Organization ID",
    }),
    email: z.string().email().openapi({
      description: "Admin email address",
    }),
    name: z.string().openapi({
      description: "Admin name",
    }),
    auth_id: z.string().openapi({
      description: "Authentication ID for the admin",
    }),
    created_at: z.string().openapi({
      description: "Admin creation timestamp",
    }),
  })
  .openapi({
    title: "Admin",
    description: "Administrator entity details",
  });

// Admin parameters for creation
export const adminParamsSchema = z
  .object({
    id: z.string().openapi({
      description: "Admin ID",
    }),
    email: z.string().email().openapi({
      description: "Admin email address",
    }),
    name: z.string().openapi({
      description: "Admin name",
    }),
    auth_id: z.string().openapi({
      description: "Authentication ID for the admin",
    }),
  })
  .openapi({
    title: "AdminParams",
    description: "Admin parameters for creation",
  });

// Request to create a new admin
export const createAdminRequestSchema = z
  .object({
    admin_params: adminParamsSchema.openapi({
      description: "Admin parameters",
    }),
  })
  .openapi({
    title: "CreateAdminRequest",
    description: "Request to create a new admin",
  });

// Response from creating a new admin
export const createAdminResponseSchema = z
  .object({
    admins: z.array(adminSchema).openapi({
      description: "Created admins",
    }),
  })
  .openapi({
    title: "CreateAdminResponse",
    description: "Response from creating a new admin",
  });

// Request to get a specific admin
export const getAdminRequestSchema = z
  .object({
    filter: z.string().openapi({
      description: "Filter type: 'id', 'email', or 'auth_id'",
    }),
    value: z.string().openapi({
      description: "Filter value",
    }),
  })
  .openapi({
    title: "GetAdminRequest",
    description: "Request to get a specific admin",
  });

// Response with admin details
export const getAdminResponseSchema = z
  .object({
    admin: adminSchema.openapi({
      description: "Admin details",
    }),
  })
  .openapi({
    title: "GetAdminResponse",
    description: "Response with admin details",
  });

// Request to get all admins
export const getAllAdminsRequestSchema = z
  .object({
  })
  .openapi({
    title: "GetAllAdminsRequest",
    description: "Request to get all admins",
  });

// Response with all admins
export const getAllAdminsResponseSchema = z
  .object({
    admins: z.array(adminSchema).openapi({
      description: "List of admins",
    }),
  })
  .openapi({
    title: "GetAllAdminsResponse",
    description: "Response with all admins",
  });

// Admin parameters to update
export const updateAdminParamsSchema = z
  .object({
    email: z.string().email().optional().openapi({
      description: "Admin email address",
    }),
    name: z.string().optional().openapi({
      description: "Admin name",
    }),
    auth_id: z.string().optional().openapi({
      description: "Authentication ID for the admin",
    }),
    organization_id: z.string().optional().openapi({
      description: "Organization ID",
    }),
  })
  .openapi({
    title: "UpdateAdminParams",
    description: "Admin parameters to update",
  });

// Request to update an admin
export const updateAdminRequestSchema = z
  .object({
    auth_context: authContextSchema.openapi({
      description: "Authentication context",
    }),
    admin_id: z.string().openapi({
      description: "Admin ID to update",
    }),
    admin_params: updateAdminParamsSchema.openapi({
      description: "Admin parameters to update",
    }),
  })
  .openapi({
    title: "UpdateAdminRequest",
    description: "Request to update an admin",
  });

// Response from updating an admin
export const updateAdminResponseSchema = z
  .object({
    admins: z.array(adminSchema).openapi({
      description: "Updated admins",
    }),
  })
  .openapi({
    title: "UpdateAdminResponse",
    description: "Response from updating an admin",
  });

// Request to delete an admin
export const deleteAdminRequestSchema = z
  .object({
    auth_context: authContextSchema.openapi({
      description: "Authentication context",
    }),
    admin_id: z.string().openapi({
      description: "Admin ID to delete",
    }),
  })
  .openapi({
    title: "DeleteAdminRequest",
    description: "Request to delete an admin",
  });

// Response from deleting an admin
export const deleteAdminResponseSchema = z
  .object({
    admins: z.array(adminSchema).openapi({
      description: "Remaining admins after deletion",
    }),
  })
  .openapi({
    title: "DeleteAdminResponse",
    description: "Response from deleting an admin",
  });
