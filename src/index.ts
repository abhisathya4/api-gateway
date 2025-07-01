import { app } from "./routes/app";

const hostname = "localhost";
const port = 3000;

Bun.serve({
  port: port,
  hostname: hostname,
  fetch: app.fetch,
});

console.log(`Server started on http://${hostname}:${port}`);
