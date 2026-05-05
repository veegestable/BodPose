import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { JetBrainsMono_400Regular } from "@expo-google-fonts/jetbrains-mono";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import { observeAuthState } from "@/services/firebase/auth";
import { useAuthStore } from "@/stores/useAuthStore";

// Expo Go fallback: disable native screen optimization to avoid
// RNSScreen runtime type mismatch during rapid SDK/package transitions.
enableScreens(false);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const setAuthReady = useAuthStore((state) => state.setAuthReady);
  const hydrateProfile = useAuthStore((state) => state.hydrateProfile);
  const setUser = useAuthStore((state) => state.setUser);

  const [fontsLoaded, fontError] = useFonts({
    BebasNeue: BebasNeue_400Regular,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    JetBrainsMono_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontError, fontsLoaded]);

  useEffect(() => {
    hydrateProfile();
  }, [hydrateProfile]);

  useEffect(() => {
    try {
      const unsubscribe = observeAuthState((user) => {
        setUser(user);
        setAuthReady(true);
      });
      return unsubscribe;
    } catch {
      setAuthReady(true);
      setUser(null);
      return undefined;
    }
  }, [setAuthReady, setUser]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Slot />;
}
