import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://apollodbadmin:Test@123@35.207.195.181:5432/postgres",
  },
});