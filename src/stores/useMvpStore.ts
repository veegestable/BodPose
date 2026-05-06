import { create } from "zustand";

import { mvpPoses, MuscleGroup } from "@/constants/mvpData";
import { getJson, setJson, storageKeys } from "@/services/storage/mmkv";

type PoseSessionLog = {
  id: string;
  dateIso: string;
  poseName: string;
  score: number;
  durationSeconds: number;
};

type MvpState = {
  selectedMuscles: MuscleGroup[];
  activity: number[];
  streak: number;
  sessions: PoseSessionLog[];
  lastPoseId: string;
  toggleMuscle: (group: MuscleGroup) => void;
  setLastPoseId: (poseId: string) => void;
  recordPoseSession: (payload: {
    poseName: string;
    score: number;
    durationSeconds: number;
  }) => void;
};

type PersistedMvpState = Pick<
  MvpState,
  "selectedMuscles" | "activity" | "streak" | "sessions" | "lastPoseId"
>;

const initialPersistedState: PersistedMvpState = {
  selectedMuscles: ["Chest"],
  activity: [0, 1, 2, 0, 3, 1, 2, 1, 0, 3, 2, 1, 0, 2, 3, 2, 3, 4, 5, 6, 7, 2,3,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,4,2,1,2,3,4,5,2,1,2,3,4,2,1,1,4,5,2,3,4,5,6],
  streak: 3,
  sessions: [
    {
      id: "seed-1",
      dateIso: new Date().toISOString(),
      poseName: "Front Double Bicep",
      score: 84,
      durationSeconds: 540,
    },
    {
      id: "seed-2",
      dateIso: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      poseName: "Rear Lat Spread",
      score: 79,
      durationSeconds: 480,
    },
    {
      id: "seed-3",
      dateIso: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
      poseName: "Abdominal & Thigh",
      score: 88,
      durationSeconds: 510,
    },
  ],
  lastPoseId: mvpPoses[0]?.id ?? "",
};

const persistedState = getJson<PersistedMvpState>(storageKeys.mvpState) ?? initialPersistedState;

function saveState(partialState: PersistedMvpState) {
  setJson(storageKeys.mvpState, partialState);
}

function pickPersistedState(state: MvpState): PersistedMvpState {
  return {
    selectedMuscles: state.selectedMuscles,
    activity: state.activity,
    streak: state.streak,
    sessions: state.sessions,
    lastPoseId: state.lastPoseId,
  };
}

export const useMvpStore = create<MvpState>((set, get) => ({
  ...persistedState,
  toggleMuscle: (group) =>
    set((state) => {
      const selectedMuscles = state.selectedMuscles.includes(group)
        ? state.selectedMuscles.filter((item) => item !== group)
        : [...state.selectedMuscles, group];

      const nextState: PersistedMvpState = {
        ...pickPersistedState(get()),
        selectedMuscles,
      };
      saveState(nextState);
      return { selectedMuscles };
    }),
  setLastPoseId: (lastPoseId) =>
    set(() => {
      const nextState: PersistedMvpState = {
        ...pickPersistedState(get()),
        lastPoseId,
      };
      saveState(nextState);
      return { lastPoseId };
    }),
  recordPoseSession: ({ poseName, score, durationSeconds }) =>
    set((state) => {
      const sessionLevel = score >= 85 ? 3 : score >= 75 ? 2 : 1;
      const sessions = [
        {
          id: `${Date.now()}`,
          dateIso: new Date().toISOString(),
          poseName,
          score,
          durationSeconds,
        },
        ...state.sessions,
      ].slice(0, 20);
      const activity = [...state.activity.slice(1), sessionLevel];
      const streak = Math.min(state.streak + 1, 365);

      const nextState: PersistedMvpState = {
        ...pickPersistedState(get()),
        sessions,
        activity,
        streak,
      };
      saveState(nextState);
      return { sessions, activity, streak };
    }),
}));
