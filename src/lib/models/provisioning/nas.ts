import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema } from "./common";

import "zod-openapi/extend";

// NAS device schema definition
export const nasSchema = z
  .object({
    id: z.string().openapi({
      description: "NAS device ID",
    }),
    nasname: z.string().openapi({
      description: "NAS device name/IP address",
    }),
    shortname: z.string().openapi({
      description: "NAS device short name",
    }),
    type: z.string().openapi({
      description: "NAS device type",
    }),
    ports: z.number().int().optional().openapi({
      description: "Number of ports",
    }),
    secret: z.string().openapi({
      description: "RADIUS shared secret",
    }),
    server: z.string().optional().openapi({
      description: "Server information",
    }),
    community: z.string().optional().openapi({
      description: "SNMP community string",
    }),
    description: z.string().optional().openapi({
      description: "NAS device description",
    }),
    require_ma: z.string().openapi({
      description: "Require message authenticator",
    }),
    limit_proxy_state: z.string().openapi({
      description: "Limit proxy state",
    }),
    tenant_id: z.string().openapi({
      description: "Tenant ID",
    }),
  })
  .openapi({
    title: "Nas",
    description: "Network Access Server device details",
  });

// NAS device parameters for registration with authentication
export const deviceParamsSchema = z
  .object({
    nasname: z.string().openapi({
      description: "NAS device name/IP address",
    }),
    shortname: z.string().openapi({
      description: "NAS device short name",
    }),
    type: z.string().openapi({
      description: "NAS device type",
    }),
    ports: z.number().int().optional().openapi({
      description: "Number of ports",
    }),
    secret: z.string().openapi({
      description: "RADIUS shared secret",
    }),
    server: z.string().optional().openapi({
      description: "Server information",
    }),
    community: z.string().optional().openapi({
      description: "SNMP community string",
    }),
    description: z.string().optional().openapi({
      description: "NAS device description",
    }),
    require_ma: z.string().optional().openapi({
      description: "Require message authenticator",
    }),
    limit_proxy_state: z.string().optional().openapi({
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
