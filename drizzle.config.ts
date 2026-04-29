import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/infra/schema.db.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: './RepoView.sqlite'
  }
});