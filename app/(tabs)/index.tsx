import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import { SectionCard } from "@/components/home/SectionCard";
import { colors } from "@/constants/colors";
import { logout } from "@/services/firebase/auth";
import { useAuthStore } from "@/stores/useAuthStore";
import { AppTopBar } from "@/components/ui/AppTopBar";

export default function HomeScreen() {
  const user = useAuthStore((state) => state.user);
  const profile = useAuthStore((state) => state.profile);
  const clearSession = useAuthStore((state) => state.clearSession);

  async function handleLogout() {
    try {
      await logout();
    } catch {
      clearSession();
    }
  }

  const displayName = profile?.name?.trim() || "Champion";

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AppTopBar />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 24, paddingBottom: 32 }}
      >
        <View style={{ gap: 8 }}>
          <Text
            style={{
              color: colors.textSecondary,
              fontFamily: "DMSans_700Bold",
              fontSize: 12,
              letterSpacing: 1.2,
            }}
          >
            WELCOME BACK
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              fontFamily: "BebasNeue",
              fontSize: 36,
              letterSpacing: 0.7,
            }}
          >
            {displayName}
          </Text>
        </View>

        <SectionCard
        title="Vj Daily Check-In"
        subtitle="Your AI gym buddy"
        >
          <Text
          style={{
            color: colors.textSecondary,
            fontFamily: "DMSans_400Regular",
            fontSize: 13,
            lineHeight: 20,
          }}
        >
          "Lock in 15 minutes today. Stage-ready physiques are built one session at a time."
        </Text>
          <Pressable
          onPress={() => router.push("/(tabs)/pose")}
          style={{
            marginTop: 2,
            alignSelf: "flex-start",
            borderRadius: 9,
            backgroundColor: colors.accent,
            paddingHorizontal: 12,
            paddingVertical: 8,
          }}
        >
            <Text
            style={{
              color: colors.onAccent,
              fontFamily: "DMSans_700Bold",
              fontSize: 12,
            }}
          >
            Start Pose Session
            </Text>
          </Pressable>
        </SectionCard>

        <SectionCard
        title="Current Streak"
        subtitle="Consistency scoreboard"
        >
          <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}>
            <Text
            style={{
              color: colors.textPrimary,
              fontFamily: "BebasNeue",
              fontSize: 34,
              letterSpacing: 0.5,
            }}
          >
            3
          </Text>
            <Text
            style={{
              color: colors.textSecondary,
              fontFamily: "DMSans_500Medium",
              fontSize: 13,
              marginBottom: 6,
            }}
          >
            day streak
            </Text>
          </View>
          <Text
          style={{
            color: colors.detail,
            fontFamily: "DMSans_400Regular",
            fontSize: 12,
          }}
          >
          Full streak logic and historical trend wiring will be connected in Unit 09.
          </Text>
        </SectionCard>

        <SectionCard
        title="Quick Start"
        subtitle="Jump right into training"
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Pressable
            onPress={() => router.push("/(tabs)/pose")}
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: colors.accent,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
              <Text
              style={{
                color: colors.onAccent,
                fontFamily: "DMSans_700Bold",
                fontSize: 12,
              }}
            >
              Pose
              </Text>
            </Pressable>
            <Pressable
            onPress={() => router.push("/(tabs)/analyze")}
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: colors.accent,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
              <Text
              style={{
                color: colors.onAccent,
                fontFamily: "DMSans_700Bold",
                fontSize: 12,
              }}
            >
              Analyze
              </Text>
            </Pressable>
            <Pressable
            onPress={() => router.push("/(tabs)/progress")}
            style={{
              flex: 1,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.border,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
              <Text
              style={{
                color: colors.textPrimary,
                fontFamily: "DMSans_700Bold",
                fontSize: 12,
              }}
            >
              Progress
              </Text>
            </Pressable>
          </View>
        </SectionCard>

        <SectionCard
        title="Account Status"
        subtitle="Session and access state"
        >
          <Text
          style={{
            color: colors.textSecondary,
            fontFamily: "JetBrainsMono_400Regular",
            fontSize: 12,
          }}
        >
          Signed in: {user?.email ?? "No active session"}
          </Text>
          <Text
          style={{
            color: colors.detail,
            fontFamily: "DMSans_400Regular",
            fontSize: 12,
          }}
          >
          Phase 1 foundations active. Pose engine and progress persistence continue in upcoming units.
          </Text>
          <Pressable
          onPress={handleLogout}
          style={{
            alignSelf: "flex-start",
            marginTop: 2,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
            <Text
            style={{
              color: colors.textPrimary,
              fontFamily: "DMSans_500Medium",
              fontSize: 12,
            }}
            >
            Logout
            </Text>
          </Pressable>
        </SectionCard>
      </ScrollView>
    </View>
  );
}
