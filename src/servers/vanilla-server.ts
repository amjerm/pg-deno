import { server } from "../../deps.ts";
import { Server } from "./index.ts";

const run = () => {
  const listener = Deno.listen({ hostname: "localhost", port: 4505 });

  const handler = (req: Request): Response => {
    console.log("Request Details:", req);
    return new Response("Hello, world!");
  };

  server.serveListener(listener, handler);
};

const PGVanillaServer: Server = { run };
export default PGVanillaServer;
