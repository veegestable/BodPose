import { Model } from "@nozbe/watermelondb";
import { field, readonly, text } from "@nozbe/watermelondb/decorators";

export class UserModel extends Model {
  static table = "users";

  @text("user_id") userId!: string;
  @text("name") name!: string;
  @field("height_cm") heightCm!: number;
  @field("weight_kg") weightKg!: number;
  @text("competition_category") competitionCategory!: string;
  @text("experience_level") experienceLevel!: string;
  @readonly @field("updated_at") updatedAt!: number;
}
