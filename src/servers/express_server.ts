// @deno-types="npm:@types/express@4.17.17"
import express from "npm:express@4.18.2";
import { Server } from "./index.ts";
import age_service from "../services/age_service.ts";
import nationality_service from "../services/nationality_service.ts";

const run = () => {
  const app = express();

  app.get("/", (_req, res) => {
    res.send("Hello, world!");
  });

  app.get("/names/:name/age", async (req, res) => {
    if (!req.params.name) {
      throw Error("name is required");
    }
    const age = await age_service.getByName(req.params.name);
    return res.send({ age });
  });

  app.get("/names/:name/country", async (req, res) => {
    if (!req.params.name) {
      throw Error("name is required");
    }
    const country = await nationality_service.getByName(req.params.name);
    return res.send({ country });
  });

  const listen = (port = 4505) => {
    app.listen(port);
    console.log(`listening on port ${port}...`);
  };

  listen(4505);
};

const PGExpressServer: Server = { run };
export default PGExpressServer;
