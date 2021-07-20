import { config } from "dotenv";

config();

export namespace Config {
  export const port = parseInt(process.env.PORT || '80', 10);
}
