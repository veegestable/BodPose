import { User } from "firebase/auth";
import { create } from "zustand";

import { UserProfile } from "@/types/auth.types";

type AuthState = {
  user: User | null;
  isAuthReady: boolean;
  profile: UserProfile | null;
  setUser: (user: User | null) => void;
  setAuthReady: (ready: boolean) => void;
  completeProfile: (profile: UserProfile) => void;
  hydrateProfile: () => void;
  clearSession: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthReady: false,
  profile: null,
  setUser: (user) => set({ user }),
  setAuthReady: (isAuthReady) => set({ isAuthReady }),
  completeProfile: (profile) => set({ profile }),
  hydrateProfile: () => undefined,
  clearSession: () => set({ user: null, profile: null }),
}));
