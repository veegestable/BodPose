export type PosePreset = {
  id: string;
  name: string;
  category: "classic" | "open" | "physique";
};

export type MuscleGroup = "Chest" | "Lats" | "Quads";

export type Exercise = {
  id: string;
  name: string;
  targetMuscle: MuscleGroup;
  sets: string;
  reps: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
};

export const mvpPoses: PosePreset[] = [
  { id: "front-double-bicep", name: "Front Double Bicep", category: "classic" },
  { id: "front-lat-spread", name: "Front Lat Spread", category: "classic" },
  { id: "side-chest-left", name: "Side Chest (Left)", category: "classic" },
  { id: "side-chest-right", name: "Side Chest (Right)", category: "classic" },
  { id: "side-tricep-left", name: "Side Tricep (Left)", category: "classic" },
  { id: "side-tricep-right", name: "Side Tricep (Right)", category: "classic" },
  { id: "rear-double-bicep", name: "Rear Double Bicep", category: "open" },
  { id: "rear-lat-spread", name: "Rear Lat Spread", category: "open" },
  { id: "abdominal-thigh", name: "Abdominal & Thigh", category: "open" },
  { id: "most-muscular", name: "Most Muscular", category: "open" },
];

export const vjMvpMessages = [
  "Bro, lock in 15 minutes today. Stage-ready physiques are built daily.",
  "Let's get it. Keep your elbows high and your chest proud this session.",
  "No excuses. One quality pose round right now beats perfect plans tomorrow.",
  "That focus is fire. Hit clean reps and own every transition.",
  "Champion mode only. Consistency is what wins under the lights.",
];

export const mvpExercises: Exercise[] = [
  {
    id: "incline-db-press",
    name: "Incline Dumbbell Press",
    targetMuscle: "Chest",
    sets: "4",
    reps: "8-12",
    difficulty: "intermediate",
    description: "Controls upper-chest fullness and supports stronger front poses.",
  },
  {
    id: "machine-fly",
    name: "Machine Fly",
    targetMuscle: "Chest",
    sets: "3",
    reps: "12-15",
    difficulty: "beginner",
    description: "Builds chest squeeze control for better peak contraction posing.",
  },
  {
    id: "weighted-pullup",
    name: "Weighted Pull-Up",
    targetMuscle: "Lats",
    sets: "4",
    reps: "6-10",
    difficulty: "advanced",
    description: "Improves lat width and helps your spread look wider on stage.",
  },
  {
    id: "single-arm-row",
    name: "Single-Arm Cable Row",
    targetMuscle: "Lats",
    sets: "4",
    reps: "10-12",
    difficulty: "intermediate",
    description: "Targets lat sweep while reinforcing torso control.",
  },
  {
    id: "hack-squat",
    name: "Hack Squat",
    targetMuscle: "Quads",
    sets: "4",
    reps: "8-12",
    difficulty: "intermediate",
    description: "Builds quad sweep for stronger front and side leg presentation.",
  },
  {
    id: "leg-extension",
    name: "Leg Extension",
    targetMuscle: "Quads",
    sets: "3",
    reps: "12-20",
    difficulty: "beginner",
    description: "Increases quad separation and improves line detail under lights.",
  },
];
