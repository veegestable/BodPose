import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "users",
      columns: [
        { name: "user_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "height_cm", type: "number" },
        { name: "weight_kg", type: "number" },
        { name: "competition_category", type: "string" },
        { name: "experience_level", type: "string" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "pose_sessions",
      columns: [
        { name: "user_id", type: "string", isIndexed: true },
        { name: "pose_id", type: "string", isIndexed: true },
        { name: "duration_seconds", type: "number" },
        { name: "peak_score", type: "number" },
        { name: "avg_score", type: "number" },
        { name: "feedback_json", type: "string", isOptional: true },
        { name: "session_date", type: "number" },
      ],
    }),
    tableSchema({
      name: "workout_logs",
      columns: [
        { name: "user_id", type: "string", isIndexed: true },
        { name: "log_date", type: "number", isIndexed: true },
        { name: "log_type", type: "string" },
        { name: "duration_minutes", type: "number" },
        { name: "muscles_json", type: "string", isOptional: true },
        { name: "notes", type: "string", isOptional: true },
      ],
    }),
  ],
});
