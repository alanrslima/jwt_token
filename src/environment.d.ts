declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: number;
      MONGO_URI: string;
      TOKEN_SECRET: string;
      TOKEN_LIFE: number;
      REFRESH_TOKEN_SECRET: string;
      REFRESH_TOKEN_LIFE: number;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
