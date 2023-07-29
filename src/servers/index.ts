import PGExpressServer from "./express-server.ts";
import PGVanillaServer from "./vanilla-server.ts";

export type Server = {
  run: () => void;
};

export { PGExpressServer, PGVanillaServer };
