import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema, paginationMetaSchema } from "./common";

import "zod-openapi/extend";

// NAS device schema definition
export const nasSchema = z
  .object({
    id: z.string().uuid().openapi({
      description: "Unique identifier for the NAS",
      example: "123e4567-e89b-12d3-a456-426614174000",
    }),
    nasname: z.string().openapi({
      description: "Name of the NAS",
      example: "NAS-01",
    }),
    shortname: z.string().openapi({
      description: "Short name of the NAS",
      example: "NAS1",
    }),
    type: z.string().openapi({
      description: "Type of the NAS",
      example: "other",
    }),
    ports: z.number().nullable().openapi({
      description: "Number of ports on the NAS",
      example: 100,
    }),
    secret: z.string().openapi({
      description: "Secret for the NAS",
      example: "supersecret",
    }),
    server: z.string().nullable().openapi({
      description: "Server associated with the NAS",
      example: "server1",
    }),
    community: z.string().nullable().openapi({
      description: "Community string for the NAS",
      example: "public",
    }),
    location: z.string().nullable().optional().openapi({
      description: "Location of the NAS device",
      example: "Main NOC",
    }),
    active: z.boolean().nullable().optional().openapi({
      description: "Activity status of the NAS device",
    }),
    lastSeen: z
      .preprocess(
        (val) => (val instanceof Date ? val.toISOString() : val),
        z.string().datetime().nullable().openapi({
          description: "Timestamp when the nas was last seen",
          example: "2025-03-24T14:17:22Z",
        })
      )
      .nullable()
      .optional(),
    requireMa: z.string().nullable().optional().openapi({
      description: "Whether to require MAC address authentication",
      example: "auto",
    }),
    limitProxyState: z.string().nullable().optional().openapi({
      description: "Proxy state limit",
      example: "auto",
    }),
    description: z.string().nullable().optional().openapi({
      description: "Description of the NAS",
      example: "Main office NAS",
    }),
    tenantId: z.string().uuid().openapi({
      description: "Tenant ID associated with the NAS",
      example: "123e4567-e89b-12d3-a456-426614174000",
    }),
  })
  .openapi({
    title: "NAS Schema",
    description: "Schema for NAS data",
  });

// NAS device parameters for registration with authentication
export const deviceParamsSchema = z
  .object({
    nasname: z.string().openapi({
      description: "Name of the NAS",
      example: "NAS-01",
    }),
    shortname: z.string().openapi({
      description: "Short name of the NAS",
      example: "NAS1",
    }),
    type: z.string().openapi({
      description: "Type of the NAS",
      example: "other",
    }),
    ports: z.number().nullable().openapi({
      description: "Number of ports on the NAS",
      example: 100,
    }),
    secret: z.string().openapi({
      description: "Secret for the NAS",
      example: "supersecret",
    }),
    server: z.string().nullable().openapi({
      description: "Server associated with the NAS",
      example: "server1",
    }),
    community: z.string().nullable().openapi({
      description: "Community string for the NAS",
      example: "public",
    }),
    location: z.string().nullable().optional().openapi({
      description: "Location of the NAS device",
      example: "Main NOC",
    }),
    active: z.boolean().nullable().optional().openapi({
      description: "Activity status of the NAS device",
    }),
    description: z.string().nullable().optional().openapi({
      description: "Description of the NAS",
      example: "Main office NAS",
    }),
    require_ma: z.string().nullable().optional().openapi({
      description: "Require message authenticator",
    }),
    limit_proxy_state: z.string().nullable().optional().openapi({
      description: "Limit proxy state",
    }),
  })
  .openapi({
    title: "DeviceParams",
    description: "NAS device parameters for registration",
  });

// Request to register a new NAS device with authentication
export const registerNasDeviceRequestSchema = z
  .object({
    device_params: deviceParamsSchema.openapi({
      description: "NAS device parameters",
    }),
  })
  .openapi({
    title: "RegisterNasDeviceRequest",
    description: "Request to register a new NAS device with authentication",
  });

// NAS device parameters for system-level registration
export const sysDeviceParamsSchema = deviceParamsSchema
  .extend({
    organization_id: z.string().openapi({
      description: "Organization ID",
    }),
  })
  .openapi({
    title: "SysDeviceParams",
    description: "NAS device parameters for system-level registration",
  });

// Request to register a new NAS device at the system level
export const sysRegisterNasDeviceRequestSchema = z
  .object({
    device_params: sysDeviceParamsSchema.openapi({
      description: "NAS device parameters",
    }),
  })
  .openapi({
    title: "SysRegisterNasDeviceRequest",
    description: "Request to register a new NAS device at the system level",
  });

// Response from registering a NAS device
export const registerNasDeviceResponseSchema = z
  .object({
    nas_devices: z.array(nasSchema).openapi({
      description: "Registered NAS devices",
    }),
  })
  .openapi({
    title: "RegisterNasDeviceResponse",
    description: "Response from registering a NAS device",
  });

export const selectNasDeviceSchema = nasSchema
  .extend({
    active_sessions: z.number().int().openapi({
      description: "Number of active sessions on this NAS Device",
    }),
  })
  .openapi({
    title: "Select NAS Schema",
    description: "Schema for selecting NAS data",
  });

export const getNASDeviceRequestSchema = z
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
    types: z.array(z.string()).optional().openapi({
      description: "Optional list of types to filter by",
    }),
    locations: z.array(z.string()).optional().openapi({
      description: "Optional list of locations to filter by",
    }),
    servers: z.array(z.string()).optional().openapi({
      description: "Optional list of servers to filter by",
    }),
    communities: z.array(z.string()).optional().openapi({
      description: "Optional list of communities to filter by",
    }),
    status: z.array(z.boolean()).optional().openapi({
      description: "Optional status filter (active/inactive)",
    }),
  })
  .openapi({
    title: "GetNASDeviceRequest",
    description:
      "Request for getting nas devices with filtering and pagination",
  });

export const getNASDeviceResponseSchema = z
  .object({
    data: z.array(selectNasDeviceSchema).openapi({
      description: "List of nas devices with extended information",
    }),
    meta: paginationMetaSchema.openapi({
      description: "Pagination metadata",
    }).optional(),
  })
  .openapi({
    title: "GetNASDeviceResponse",
    description: "Response containing nas devices and pagination metadata",
  });
