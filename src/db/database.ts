import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { PoseSessionModel } from "./models/PoseSession";
import { UserModel } from "./models/User";
import { WorkoutLogModel } from "./models/WorkoutLog";
import { schema } from "./schema";

const adapter = new SQLiteAdapter({
  schema,
  dbName: "bodpose",
});

export const database = new Database({
  adapter,
  modelClasses: [UserModel, PoseSessionModel, WorkoutLogModel],
});
