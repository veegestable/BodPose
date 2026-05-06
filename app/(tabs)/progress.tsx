import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";

import { Flame } from "lucide-react-native";
import { AppTopBar } from "@/components/ui/AppTopBar";
import { colors } from "@/constants/colors";
import { useMvpStore } from "@/stores/useMvpStore";

export default function ProgressScreen() {
  const activity = useMvpStore((state) => state.activity);
  const streak = useMvpStore((state) => state.streak);
  const allSessions = useMvpStore((state) => state.sessions);
  const sessions = useMemo(() => allSessions.slice(0, 4), [allSessions]);
  const averageScore = sessions.length
    ? sessions.reduce((acc, session) => acc + session.score, 0) / sessions.length
    : 0;

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AppTopBar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 120 }}>
        <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 22, letterSpacing: 0.4, lineHeight: 22 }}>
          CHAMPION PROGRESS
        </Text>
        <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_400Regular", fontSize: 16 }}>
          Analyze your path to physical dominance.
        </Text>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Flame size={28} color={colors.accent} />
          </View>
          <View style={{ flex: 1, paddingLeft: 12 }}>
            <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.4 }}>
              {streak} DAY STREAK
            </Text>
            <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.2 }}>
              CONSISTENCY IS KING
            </Text>
          </View>
        </View>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 14,
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.detail, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.2 }}>AVG POSE SCORE</Text>
          <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 30, lineHeight: 30 }}>
            {averageScore.toFixed(1)}
          </Text>
          <Text style={{ color: colors.success, fontFamily: "JetBrainsMono_400Regular", fontSize: 14 }}>~ +2.4%</Text>
        </View>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 14,
            gap: 12,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 18 }}>TRAINING VOLUME</Text>
            <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.2 }}>
              LAST 70 WEEKS
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
            {activity.map((value, index) => {
              const shade = value === 0 ? colors.surface2 : value === 1 ? "#E7CBC8" : value === 2 ? "#D6928D" : colors.accent;
              return (
                <View
                  key={`${index}-${value}`}
                  style={{ width: 18, height: 18, borderRadius: 4, backgroundColor: shade, borderWidth: 1, borderColor: colors.border }}
                />
              );
            })}
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 8 }}>
            <Text style={{ color: colors.detail, fontFamily: "DMSans_500Medium", fontSize: 11 }}>Less</Text>
            {[0, 1, 2, 3].map((level) => (
              <View
                key={level}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  backgroundColor:
                    level === 0 ? colors.surface2 : level === 1 ? "#E7CBC8" : level === 2 ? "#D6928D" : colors.accent,
                }}
              />
            ))}
            <Text style={{ color: colors.detail, fontFamily: "DMSans_500Medium", fontSize: 11 }}>More Intense</Text>
          </View>
        </View>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 14,
            gap: 12,
          }}
        >
          <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 18 }}>POSE ACCURACY TREND</Text>
          <View style={{ height: 140, justifyContent: "center" }}>
            <View style={{ height: 6, borderRadius: 6, backgroundColor: colors.surface2, marginBottom: 26, width: "78%" }} />
            <View style={{ height: 6, borderRadius: 6, backgroundColor: colors.surface2, marginBottom: 18, width: "60%", alignSelf: "flex-end" }} />
            <View style={{ height: 6, borderRadius: 6, backgroundColor: colors.accent, width: "90%", alignSelf: "center" }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: colors.detail, fontFamily: "DMSans_500Medium", fontSize: 12 }}>30D AGO</Text>
            <Text style={{ color: colors.detail, fontFamily: "DMSans_500Medium", fontSize: 12 }}>TODAY</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
