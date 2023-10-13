declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HTTP_PORT: number;
      HTTPS_PORT: number;
    }
  }
}

export {};
