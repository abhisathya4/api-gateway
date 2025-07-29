import { env } from "./config/env";
import { app } from "./routes/app";

const hostname = env.NODE_ENV === "prod" ? "0.0.0.0" : "localhost";
const port = env.NODE_ENV === "prod" ? 3000 : 3001;

Bun.serve({
  port: port,
  hostname: hostname,
  fetch: app.fetch,
});

console.log(`Server started on http://${hostname}:${port}`);
