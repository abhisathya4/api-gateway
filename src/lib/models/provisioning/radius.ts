import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";

import "zod-openapi/extend";

// RADIUS group reply schema
export const radgroupreplySchema = z.object({
  id: z.string().openapi({
    description: "RADIUS group reply ID"
  }),
  groupname: z.string().openapi({
    description: "RADIUS group name"
  }),
  attribute: z.string().openapi({
    description: "RADIUS attribute name"
  }),
  op: z.string().openapi({
    description: "RADIUS operator (e.g., :=, ==, +=)"
  }),
  value: z.string().openapi({
    description: "RADIUS attribute value"
  }),
  tenant_id: z.string().openapi({
    description: "Tenant ID"
  })
}).openapi({
  title: "Radgroupreply",
  description: "RADIUS group reply configuration"
});

// RADIUS user group schema
export const radusergroupSchema = z.object({
  id: z.string().openapi({
    description: "RADIUS user group ID"
  }),
  username: z.string().openapi({
    description: "RADIUS username"
  }),
  groupname: z.string().openapi({
    description: "RADIUS group name"
  }),
  priority: z.number().int().openapi({
    description: "RADIUS group priority"
  }),
  tenant_id: z.string().openapi({
    description: "Tenant ID"
  })
}).openapi({
  title: "Radusergroup",
  description: "RADIUS user group assignment"
});

// RADIUS check schema
export const radcheckSchema = z.object({
  id: z.string().openapi({
    description: "RADIUS check ID"
  }),
  username: z.string().openapi({
    description: "RADIUS username"
  }),
  attribute: z.string().openapi({
    description: "RADIUS attribute name"
  }),
  op: z.string().openapi({
    description: "RADIUS operator (e.g., :=, ==, +=)"
  }),
  value: z.string().openapi({
    description: "RADIUS attribute value"
  }),
  tenant_id: z.string().openapi({
    description: "Tenant ID"
  })
}).openapi({
  title: "RadCheck",
  description: "RADIUS check configuration"
});
