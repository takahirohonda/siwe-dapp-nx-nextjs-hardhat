require('dotenv').config({ path: 'apps/next-gb/.env' })
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'turso',
  out: './apps/next-gb/src/drizzle/migration',
  schema: './apps/next-gb/src/drizzle/schema.ts',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL ?? '',
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
})
