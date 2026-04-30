import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/infra/schema.db.ts',
  out: './drizzle',
  dialect: 'sqlite',
  casing: 'snake_case',
  dbCredentials: {
    url: './RepoView.sqlite'
  }
});