import { app } from "./routes/app";

Bun.serve({
  port: 3001,
  hostname: "localhost",
  fetch: app.fetch,
});

console.log("Server started on http://localhost:3001");

