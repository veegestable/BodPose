import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export class PoseSessionModel extends Model {
  static table = "pose_sessions";

  @text("user_id") userId!: string;
  @text("pose_id") poseId!: string;
  @field("duration_seconds") durationSeconds!: number;
  @field("peak_score") peakScore!: number;
  @field("avg_score") avgScore!: number;
  @text("feedback_json") feedbackJson!: string;
  @field("session_date") sessionDate!: number;
}
