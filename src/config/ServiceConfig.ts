import { IBaseConfig } from "./types/IBaseConfig";


export module ServiceConfig {
  require("dotenv-json-complex")();

  export const config: IBaseConfig = JSON.parse(<any>process.env.config);

}
