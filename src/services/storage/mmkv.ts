import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV({
  id: "bodpose-storage",
});

export const storageKeys = {
  userProfile: "user.profile",
} as const;

export function setJson<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export function getJson<T>(key: string): T | null {
  const raw = storage.getString(key);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function removeKey(key: string) {
  storage.remove(key);
}
