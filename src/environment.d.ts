declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: 56c81ae-0fda-4ad5-ac2c-cdd8e1588d4c
      DATABASE_URI: string
      NEXT_PUBLIC_SERVER_URL: string
      VERCEL_PROJECT_PRODUCTION_URL: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
