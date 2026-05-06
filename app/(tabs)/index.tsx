import { router } from "expo-router";
import { Flame, ScanEye } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AppTopBar } from "@/components/ui/AppTopBar";
import { colors } from "@/constants/colors";
import { vjMvpMessages } from "@/constants/mvpData";
import { logout } from "@/services/firebase/auth";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMvpStore } from "@/stores/useMvpStore";

export default function HomeScreen() {
  const user = useAuthStore((state) => state.user);
  const profile = useAuthStore((state) => state.profile);
  const clearSession = useAuthStore((state) => state.clearSession);
  const streak = useMvpStore((state) => state.streak);
  const lastSession = useMvpStore((state) => state.sessions[0]);

  async function handleLogout() {
    try {
      await logout();
    } catch {
      clearSession();
    }
  }

  const displayName = profile?.name?.trim().toUpperCase() || "CHAMP";
  const vjLine = vjMvpMessages[(streak + 1) % vjMvpMessages.length];

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AppTopBar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 120 }}>
        <View style={{ gap: 4 }}>
          <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.4 }}>
            WELCOME BACK
          </Text>
          <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 24, letterSpacing: 0.4, lineHeight: 24 }}>
            GET AFTER IT, {displayName}
          </Text>
        </View>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 16,
            gap: 6,
          }}
        >
          <Text style={{ color: colors.accent, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.5 }}>VJ SAYS:</Text>
          <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_400Regular", fontSize: 16, lineHeight: 24 }}>
            "{vjLine}"
          </Text>
        </View>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface2,
            padding: 16,
            gap: 10,
          }}
        >
          <Text style={{ color: colors.detail, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.3 }}>
            ACTIVE ANALYSIS ON
          </Text>
          <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 22, letterSpacing: 0.4, lineHeight: 22 }}>
            READY FOR STAGE?
          </Text>
          <Pressable
            onPress={() => router.push("/(tabs)/pose")}
            style={{
              borderRadius: 12,
              backgroundColor: colors.accent,
              paddingHorizontal: 14,
              paddingVertical: 14,
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.onAccent, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.7 }}>
              START POSING
            </Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View
            style={{
              flex: 1,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.surface,
              padding: 14,
              gap: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Flame size={16} color={colors.accent} />
              <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.1 }}>
                CURRENT STREAK
              </Text>
            </View>
            <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.3 }}>
              {streak} DAYS
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.surface,
              padding: 14,
              gap: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <ScanEye size={16} color={colors.accent} />
              <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.1 }}>
                LAST SESSION
              </Text>
            </View>
            <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.3 }}>
              {lastSession?.score ?? "--"}%
            </Text>
          </View>
        </View>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 16,
            gap: 12,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.4 }}>
              WEEKLY VOLUME
            </Text>
            <Pressable onPress={() => router.push("/(tabs)/progress")}>
              <Text style={{ color: colors.accent, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.1 }}>
                VIEW DETAILS
              </Text>
            </Pressable>
          </View>
          <View style={{ gap: 8 }}>
            <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 12 }}>Back & Bis</Text>
            <View style={{ height: 8, borderRadius: 999, backgroundColor: colors.surface2 }}>
              <View style={{ width: "92%", height: 8, borderRadius: 999, backgroundColor: colors.accent }} />
            </View>
          </View>
          <View style={{ gap: 8 }}>
            <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 12 }}>Quads & Calves</Text>
            <View style={{ height: 8, borderRadius: 999, backgroundColor: colors.surface2 }}>
              <View style={{ width: "65%", height: 8, borderRadius: 999, backgroundColor: colors.accent }} />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <Pressable
            onPress={() => router.push("/(tabs)/pose")}
            style={{ flex: 1, borderRadius: 12, backgroundColor: colors.accent, paddingVertical: 12, alignItems: "center" }}
          >
            <Text style={{ color: colors.onAccent, fontFamily: "DMSans_700Bold", fontSize: 12, letterSpacing: 0.8 }}>
              Pose
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(tabs)/analyze")}
            style={{ flex: 1, borderRadius: 12, backgroundColor: colors.accent, paddingVertical: 12, alignItems: "center" }}
          >
            <Text style={{ color: colors.onAccent, fontFamily: "DMSans_700Bold", fontSize: 12, letterSpacing: 0.8 }}>
              Analyze
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(tabs)/progress")}
            style={{
              flex: 1,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              paddingVertical: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_700Bold", fontSize: 12, letterSpacing: 0.8 }}>
              Progress
            </Text>
          </Pressable>
        </View>

        <Pressable
          onPress={handleLogout}
          style={{
            alignSelf: "center",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_500Medium", fontSize: 12 }}>Logout</Text>
        </Pressable>
        <Text style={{ color: colors.detail, fontFamily: "JetBrainsMono_400Regular", fontSize: 12, textAlign: "center" }}>
          {user?.email ?? "No active session"}
        </Text>
      </ScrollView>
    </View>
  );
}
