import { createServer, createViteRuntime } from "vite";

const server = await createServer();
await server.listen();
const runtime = await createViteRuntime(server);
const res = await runtime.executeUrl("module.js");
console.log(res);
