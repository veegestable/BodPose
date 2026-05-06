import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Timer } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AppTopBar } from "@/components/ui/AppTopBar";
import { colors } from "@/constants/colors";
import { mvpPoses, vjMvpMessages } from "@/constants/mvpData";
import { useMvpStore } from "@/stores/useMvpStore";

export default function PoseScreen() {
  const lastPoseId = useMvpStore((state) => state.lastPoseId);
  const setLastPoseId = useMvpStore((state) => state.setLastPoseId);
  const recordPoseSession = useMvpStore((state) => state.recordPoseSession);
  const [activePoseId, setActivePoseId] = useState(lastPoseId || mvpPoses[0]?.id || "");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => setSeconds((current) => current + 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (activePoseId) {
      setLastPoseId(activePoseId);
    }
  }, [activePoseId, setLastPoseId]);

  const activePose = useMemo(
    () => mvpPoses.find((pose) => pose.id === activePoseId) ?? mvpPoses[0],
    [activePoseId],
  );

  const score = 68 + (seconds % 23);
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  const vjMessage = vjMvpMessages[seconds % vjMvpMessages.length];

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AppTopBar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 120 }}>
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface2,
            padding: 14,
            gap: 12,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                flex: 1,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.surface,
                padding: 12,
                gap: 10,
              }}
            >
              <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 10, letterSpacing: 1.1 }}>
                ALIGNMENT
              </Text>
              <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 26, lineHeight: 26 }}>
                {score}%
              </Text>
              <View style={{ height: 5, borderRadius: 999, backgroundColor: colors.surface2 }}>
                <View style={{ width: `${score}%`, height: 5, borderRadius: 999, backgroundColor: colors.accent }} />
              </View>
            </View>
            <View
              style={{
                width: 138,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.surface,
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Timer size={18} color={colors.textSecondary} />
              <Text style={{ color: colors.textPrimary, fontFamily: "JetBrainsMono_400Regular", fontSize: 18 }}>
                {minutes}:{remainingSeconds}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              borderRadius: 999,
              backgroundColor: colors.warning,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            <AlertTriangle size={14} color={colors.textPrimary} />
            <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_700Bold", fontSize: 10 }}>
              RAISE LEFT ELBOW
            </Text>
          </View>

          <View
            style={{
              height: 320,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.surface,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: colors.detail, fontFamily: "DMSans_500Medium", fontSize: 10, marginBottom: 8 }}>
              STATIC CAMERA PREVIEW
            </Text>
            <View style={{ width: 140, height: 3, backgroundColor: "#57A8E7", borderRadius: 3 }} />
            <View style={{ width: 3, height: 90, backgroundColor: "#57A8E7", marginTop: 6, borderRadius: 3 }} />
            <View style={{ width: 80, height: 3, backgroundColor: "#57A8E7", marginTop: 10, borderRadius: 3 }} />
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <Pressable
            onPress={() => setIsRunning((running) => !running)}
            style={{
              flex: 1,
              borderRadius: 12,
              backgroundColor: colors.accent,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
            }}
          >
            <Text style={{ color: colors.onAccent, fontFamily: "DMSans_700Bold", fontSize: 12 }}>
              {isRunning ? "Pause" : "Start"}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              if (!activePose || seconds < 10) return;
              recordPoseSession({
                poseName: activePose.name,
                score,
                durationSeconds: seconds,
              });
              setSeconds(0);
              setIsRunning(false);
            }}
            style={{
              flex: 1,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.accent,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
            }}
          >
            <Text style={{ color: colors.accent, fontFamily: "DMSans_700Bold", fontSize: 12 }}>Save Session</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSeconds(0);
              setIsRunning(false);
            }}
            style={{
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 14,
              paddingVertical: 12,
            }}
          >
            <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_500Medium", fontSize: 12 }}>Reset</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
          {mvpPoses.map((pose) => {
            const isActive = pose.id === activePose?.id;
            return (
              <Pressable
                key={pose.id}
                onPress={() => setActivePoseId(pose.id)}
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: isActive ? colors.accent : colors.border,
                  backgroundColor: isActive ? colors.accent : colors.surface,
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                }}
              >
                <Text style={{ color: isActive ? colors.onAccent : colors.textPrimary, fontFamily: "BebasNeue", fontSize: 16 }}>
                  {pose.name.toUpperCase()}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View
          style={{
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 12,
            gap: 4,
          }}
        >
          <Text style={{ color: colors.accent, fontFamily: "DMSans_700Bold", fontSize: 10 }}>VJ LIVE NOTE</Text>
          <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_400Regular", fontSize: 14, lineHeight: 22 }}>
            {vjMessage}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
/* import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Timer } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AppTopBar } from "@/components/ui/AppTopBar";
import { colors } from "@/constants/colors";
import { mvpPoses, vjMvpMessages } from "@/constants/mvpData";
import { useMvpStore } from "@/stores/useMvpStore";

export default function PoseScreen() {
  const lastPoseId = useMvpStore((state) => state.lastPoseId);
  const setLastPoseId = useMvpStore((state) => state.setLastPoseId);
  const recordPoseSession = useMvpStore((state) => state.recordPoseSession);
  const [activePoseId, setActivePoseId] = useState(lastPoseId || mvpPoses[0]?.id || "");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => setSeconds((current) => current + 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (activePoseId) {
      setLastPoseId(activePoseId);
    }
  }, [activePoseId, setLastPoseId]);

  const activePose = useMemo(
    () => mvpPoses.find((pose) => pose.id === activePoseId) ?? mvpPoses[0],
    [activePoseId],
  );

  const score = 68 + (seconds % 23);
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  const vjMessage = vjMvpMessages[seconds % vjMvpMessages.length];

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AppTopBar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 108 }}>
        <View
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface2,
            padding: 12,
            gap: 12,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.surface,
                padding: 10,
                gap: 8,
              }}
            >
              <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_700Bold", fontSize: 12 }}>ALIGNMENT</Text>
              <Text style={{ color: colors.textPrimary, fontFamily: "BebasNeue", fontSize: 46, lineHeight: 44 }}>{score}%</Text>
              <View style={{ height: 5, borderRadius: 999, backgroundColor: colors.surface2 }}>
                <View style={{ width: `${score}%`, height: 5, borderRadius: 999, backgroundColor: colors.accent }} />
              </View>
            </View>
            <View
              style={{
                width: 138,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.surface,
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Timer size={18} color={colors.textSecondary} />
              <Text style={{ color: colors.textPrimary, fontFamily: "JetBrainsMono_400Regular", fontSize: 24 }}>
                {minutes}:{remainingSeconds}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              borderRadius: 999,
              backgroundColor: colors.warning,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            <AlertTriangle size={14} color={colors.textPrimary} />
            <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_700Bold", fontSize: 12 }}>
              RAISE LEFT ELBOW
            </Text>
          </View>

          <View
            style={{
              height: 320,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.surface,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: colors.detail, fontFamily: "DMSans_500Medium", fontSize: 12, marginBottom: 8 }}>
              STATIC CAMERA PREVIEW
            </Text>
            <View style={{ width: 140, height: 3, backgroundColor: "#57A8E7", borderRadius: 3 }} />
            <View style={{ width: 3, height: 90, backgroundColor: "#57A8E7", marginTop: 6, borderRadius: 3 }} />
            <View style={{ width: 80, height: 3, backgroundColor: "#57A8E7", marginTop: 10, borderRadius: 3 }} />
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <Pressable
            onPress={() => setIsRunning((running) => !running)}
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: colors.accent,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: colors.onAccent, fontFamily: "DMSans_700Bold", fontSize: 13 }}>
              {isRunning ? "Pause" : "Start"}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              if (!activePose || seconds < 10) return;
              recordPoseSession({
                poseName: activePose.name,
                score,
                durationSeconds: seconds,
              });
              setSeconds(0);
              setIsRunning(false);
            }}
            style={{
              flex: 1,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.accent,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: colors.accent, fontFamily: "DMSans_700Bold", fontSize: 13 }}>Save Session</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSeconds(0);
              setIsRunning(false);
            }}
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 14,
            }}
          >
            <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_500Medium", fontSize: 13 }}>Reset</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
          {mvpPoses.map((pose) => {
            const isActive = pose.id === activePose?.id;
            return (
              <Pressable
                key={pose.id}
                onPress={() => setActivePoseId(pose.id)}
                style={{
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: isActive ? colors.accent : colors.border,
                  backgroundColor: isActive ? colors.accent : colors.surface,
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    color: isActive ? colors.onAccent : colors.textPrimary,
                    fontFamily: "BebasNeue",
                    fontSize: 20,
                    letterSpacing: 0.6,
                  }}
                >
                  {pose.name.toUpperCase()}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

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
          <Text style={{ color: colors.accent, fontFamily: "DMSans_700Bold", fontSize: 11, letterSpacing: 1.2 }}>
            VJ LIVE NOTE
          </Text>
          <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_400Regular", fontSize: 16, lineHeight: 24 }}>
            {vjMessage}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
*/
