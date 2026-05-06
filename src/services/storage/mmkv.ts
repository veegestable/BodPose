import Constants from "expo-constants";

type StorageLike = {
  set: (key: string, value: string) => void;
  getString: (key: string) => string | undefined;
  remove: (key: string) => void;
};

function isExpoGo() {
  // Expo Go cannot load many native modules (NitroModules).
  return Constants.appOwnership === "expo";
}

function createMemoryStorage(): StorageLike {
  const memory = new Map<string, string>();
  return {
    set: (key, value) => memory.set(key, value),
    getString: (key) => memory.get(key),
    remove: (key) => memory.delete(key),
  };
}

function createNativeStorage(): StorageLike {
  // Only require MMKV in a custom dev client / prebuild environment.
  // This keeps Expo Go from crashing at runtime.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { createMMKV } = require("react-native-mmkv") as {
    createMMKV: (opts: { id: string }) => StorageLike;
  };
  return createMMKV({ id: "bodpose-storage" });
}

export const storage: StorageLike = isExpoGo() ? createMemoryStorage() : createNativeStorage();

export const storageKeys = {
  userProfile: "user.profile",
  mvpState: "mvp.state",
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
