import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";
import { authContextSchema, paginationMetaSchema } from "./common";
import "zod-openapi/extend";


// Active session information
export const activeSessionSchema = z
  .object({
    id: z.string().openapi({
      description: "Unique session identifier",
    }),
    username: z.string().optional().openapi({
      description: "Username associated with the session",
    }),
    nasipaddress: z.string().openapi({
      description: "NAS IP address",
    }),
    acctstarttime: z.string().datetime().openapi({
      description: "Session start time",
    }),
    acctsessiontime: z.number().int().openapi({
      description: "Session duration in seconds",
    }),
    acctinputoctets: z.number().int().openapi({
      description: "Total bytes downloaded",
    }),
    acctoutputoctets: z.number().int().openapi({
      description: "Total bytes uploaded",
    }),
    framedipaddress: z.string().optional().openapi({
      description: "Client IP address",
    }),
    callingstationid: z.string().optional().openapi({
      description: "Client MAC address",
    }),
    acctstatustype: z.string().openapi({
      description: "Session status type",
    }),
  })
  .openapi({
    title: "ActiveSession",
    description: "Active session information",
  });

// Request for getting active sessions
export const getActiveSessionsRequestSchema = z
  .object({
    limit: z.number().int().openapi({
      description: "Pagination limit (max number of items to return)",
    }),
    offset: z.number().int().openapi({
      description: "Pagination offset (starting position)",
    }),
    search: z.string().optional().openapi({
      description:
        "Optional search term to filter by username, calling station ID, or framed IP",
    }),
    nas_devices: z.array(z.string()).optional().openapi({
      description: "Optional list of NAS device IPs to filter by",
    }),
  })
  .openapi({
    title: "GetActiveSessionsRequest",
    description: "Request for getting active sessions",
  });

// Response containing active sessions and pagination metadata
export const getActiveSessionsResponseSchema = z
  .object({
    data: z.array(activeSessionSchema).openapi({
      description: "List of active sessions",
    }),
    meta: paginationMetaSchema.openapi({
      description: "Pagination metadata",
    }),
  })
  .openapi({
    title: "GetActiveSessionsResponse",
    description: "Response containing active sessions and pagination metadata",
  });
