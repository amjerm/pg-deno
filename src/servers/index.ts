import PGExpressServer from "./express_server.ts";
import PGVanillaServer from "./vanilla_server.ts";

export type Server = {
  run: () => void;
};

export { PGExpressServer, PGVanillaServer };
