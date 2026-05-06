export type CompetitionCategory = "classic" | "physique" | "open" | "wellness";

export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export type UserProfile = {
  name: string;
  heightCm: number;
  weightKg: number;
  competitionCategory: CompetitionCategory;
  experienceLevel: ExperienceLevel;
};
