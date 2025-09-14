import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config({ path: ".env" });
export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./db/schemas/*.ts",
  out: "./db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
