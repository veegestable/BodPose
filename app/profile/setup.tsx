import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { AuthCard } from "@/components/ui/AuthCard";
import { colors } from "@/constants/colors";
import {
  CompetitionCategory,
  ExperienceLevel,
  UserProfile,
} from "@/types/auth.types";
import { useAuthStore } from "@/stores/useAuthStore";

const categoryOptions: CompetitionCategory[] = [
  "classic",
  "physique",
  "open",
  "wellness",
];

const experienceOptions: ExperienceLevel[] = [
  "beginner",
  "intermediate",
  "advanced",
];

export default function ProfileSetupScreen() {
  const completeProfile = useAuthStore((state) => state.completeProfile);
  const [name, setName] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [competitionCategory, setCompetitionCategory] =
    useState<CompetitionCategory>("classic");
  const [experienceLevel, setExperienceLevel] =
    useState<ExperienceLevel>("beginner");
  const [error, setError] = useState("");

  const canSubmit = useMemo(
    () => Boolean(name.trim() && Number(heightCm) > 0 && Number(weightKg) > 0),
    [heightCm, name, weightKg],
  );

  function saveProfile() {
    if (!canSubmit) {
      setError("Please complete all required fields.");
      return;
    }

    const profile: UserProfile = {
      name: name.trim(),
      heightCm: Number(heightCm),
      weightKg: Number(weightKg),
      competitionCategory,
      experienceLevel,
    };

    completeProfile(profile);
    router.replace("/(tabs)");
  }

  return (
    <AuthCard
      subtitle="Tell BodPose your baseline stats so training feedback fits your category and experience."
      title="Profile Setup"
    >
      <View style={{ gap: 10 }}>
        <TextInput
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor={colors.detail}
          style={inputStyle}
          value={name}
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={setHeightCm}
          placeholder="Height (cm)"
          placeholderTextColor={colors.detail}
          style={inputStyle}
          value={heightCm}
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={setWeightKg}
          placeholder="Weight (kg)"
          placeholderTextColor={colors.detail}
          style={inputStyle}
          value={weightKg}
        />

        <View style={{ gap: 6 }}>
          <Text style={labelStyle}>Competition Category</Text>
          <View style={pillRowStyle}>
            {categoryOptions.map((option) => (
              <Pressable
                key={option}
                onPress={() => setCompetitionCategory(option)}
                style={pillStyle(option === competitionCategory)}
              >
                <Text style={pillTextStyle(option === competitionCategory)}>
                  {option.toUpperCase()}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={{ gap: 6 }}>
          <Text style={labelStyle}>Experience Level</Text>
          <View style={pillRowStyle}>
            {experienceOptions.map((option) => (
              <Pressable
                key={option}
                onPress={() => setExperienceLevel(option)}
                style={pillStyle(option === experienceLevel)}
              >
                <Text style={pillTextStyle(option === experienceLevel)}>
                  {option.toUpperCase()}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {error ? (
          <Text
            style={{
              color: colors.warning,
              fontFamily: "DMSans_400Regular",
              fontSize: 13,
            }}
          >
            {error}
          </Text>
        ) : null}

        <Pressable
          onPress={saveProfile}
          style={{
            backgroundColor: colors.accent,
            borderRadius: 10,
            paddingVertical: 12,
            alignItems: "center",
            opacity: canSubmit ? 1 : 0.7,
          }}
        >
          <Text
            style={{
              color: colors.onAccent,
              fontFamily: "DMSans_700Bold",
              fontSize: 14,
            }}
          >
            Save Profile
          </Text>
        </Pressable>
      </View>
    </AuthCard>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.bg,
  borderRadius: 10,
  color: colors.textPrimary,
  paddingHorizontal: 12,
  paddingVertical: 12,
  fontFamily: "DMSans_400Regular" as const,
};

const labelStyle = {
  color: colors.textSecondary,
  fontFamily: "DMSans_500Medium" as const,
  fontSize: 13,
};

const pillRowStyle = {
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
  gap: 8,
};

function pillStyle(active: boolean) {
  return {
    borderWidth: 1,
    borderColor: active ? colors.accent : colors.border,
    backgroundColor: active ? colors.accent : colors.bg,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 10,
  };
}

function pillTextStyle(active: boolean) {
  return {
    color: active ? colors.onAccent : colors.textSecondary,
    fontFamily: "DMSans_500Medium" as const,
    fontSize: 12,
  };
}
