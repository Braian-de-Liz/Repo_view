import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from './schema.db';

const dbPath = Bun.env.DB_PATH! || "RepoView.sqlite";

export const sqlite = new Database(dbPath);

export const db = drizzle(sqlite, { schema });

export function closeDb() {
  sqlite.close();
}
