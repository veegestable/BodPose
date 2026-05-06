import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export class WorkoutLogModel extends Model {
  static table = "workout_logs";

  @text("user_id") userId!: string;
  @field("log_date") logDate!: number;
  @text("log_type") logType!: string;
  @field("duration_minutes") durationMinutes!: number;
  @text("muscles_json") musclesJson!: string;
  @text("notes") notes!: string;
}
