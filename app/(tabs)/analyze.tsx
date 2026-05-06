import { Camera, TriangleAlert } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AppTopBar } from "@/components/ui/AppTopBar";
import { colors } from "@/constants/colors";

export default function AnalyzeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AppTopBar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 120 }}>
        <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 24, letterSpacing: 0.4, lineHeight: 24 }}>
          AI BODY ANALYSIS
        </Text>
        <View style={{ width: 48, height: 4, borderRadius: 4, backgroundColor: colors.accent, marginTop: -6 }} />

        <View
          style={{
            height: 260,
            marginTop: 2,
            borderRadius: 16,
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: colors.border,
            backgroundColor: colors.surface2,
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Camera size={34} color={colors.detail} />
          <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 18, letterSpacing: 0.4 }}>
            UPLOAD FRONT POSE
          </Text>
          <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.2 }}>
            RAW PERFORMANCE DATA ONLY
          </Text>
        </View>

        <Pressable
          style={{
            borderRadius: 12,
            backgroundColor: colors.accent,
            alignItems: "center",
            justifyContent: "center",
            height: 60,
          }}
        >
          <Text style={{ color: colors.onAccent, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.7 }}>
            ANALYZE NOW
          </Text>
        </Pressable>

        <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 20, letterSpacing: 0.5 }}>
          PREVIOUS SESSION
        </Text>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 14,
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: colors.detail, fontFamily: "DMSans_700Bold", fontSize: 12 }}>METRIC</Text>
            <Text style={{ color: colors.detail, fontFamily: "DMSans_700Bold", fontSize: 12 }}>STATUS</Text>
          </View>
          <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_500Medium", fontSize: 13 }}>Proportions</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
            <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 22, lineHeight: 22 }}>
              Shoulder-to-
              {"\n"}Waist
            </Text>
            <Text style={{ color: colors.accent, fontFamily: "BebasNeue", fontSize: 16, letterSpacing: 0.4 }}>EXCELLENT</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: colors.detail, fontFamily: "DMSans_700Bold", fontSize: 12 }}>V-TAPER INDEX</Text>
            <Text style={{ color: colors.accent, fontFamily: "JetBrainsMono_400Regular", fontSize: 14 }}>94.2%</Text>
          </View>
          <View style={{ height: 8, borderRadius: 999, backgroundColor: colors.surface2 }}>
            <View style={{ width: "94%", height: 8, borderRadius: 999, backgroundColor: colors.accent }} />
          </View>
        </View>

        <View style={{ borderRadius: 14, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, padding: 14, gap: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <TriangleAlert size={16} color={colors.warning} />
            <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 16, letterSpacing: 0.4 }}>
              WEAKNESS FOCUS
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
            {["Quad Sweep", "Calf Size", "Lower Lat Insertion"].map((item) => (
              <View key={item} style={{ borderRadius: 8, backgroundColor: colors.surface2, paddingHorizontal: 10, paddingVertical: 7 }}>
                <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.0 }}>
                  {item.toUpperCase()}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 14,
            gap: 6,
          }}
        >
          <Text style={{ color: colors.accent, fontFamily: "DMSans_700Bold", fontSize: 12 }}>COACH VJ SAYS:</Text>
          <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_400Regular", fontSize: 16, lineHeight: 24 }}>
            "Upper body is stacked, bro. We just need to bring up those wheels!"
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
