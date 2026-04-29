import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const scans = sqliteTable("scans", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    timestamp: text("timestamp").default("CURRENT_TIMESTAMP"),
    filePath: text("file_path").notNull(),
    status: text("status").$type<"PARE" | "ATENÇÃO" | "OK">(),
    category: text("category").notNull(),
    impact: text("impact").notNull(),
    description: text("description").notNull(),
    suggestion: text("suggestion"),
});

export { scans };