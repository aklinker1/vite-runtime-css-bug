import { createServer, createViteRuntime } from "vite";

const server = await createServer();
const runtime = await createViteRuntime(server);
await runtime.executeUrl("module.js");
