import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { colors } from "@/constants/colors";
import { mvpExercises, MuscleGroup } from "@/constants/mvpData";
import { useMvpStore } from "@/stores/useMvpStore";

export default function MusclesScreen() {
  const selectedMuscles = useMvpStore((state) => state.selectedMuscles);
  const toggleMuscle = useMvpStore((state) => state.toggleMuscle);
  const groups: MuscleGroup[] = ["Chest", "Lats", "Quads"];

  const filteredExercises = useMemo(
    () => mvpExercises.filter((exercise) => selectedMuscles.includes(exercise.targetMuscle)),
    [selectedMuscles],
  );

  return (
    <ScreenPlaceholder
      title="Muscles"
      description="Select weak muscle groups and get offline exercise suggestions instantly (MVP covers Chest, Lats, and Quads)."
    >
      <View style={{ gap: 8 }}>
        <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_500Medium", fontSize: 12 }}>
          WEAK MUSCLES
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {groups.map((group) => {
            const isSelected = selectedMuscles.includes(group);
            return (
              <Pressable
                key={group}
                onPress={() => toggleMuscle(group)}
                style={{
                  borderRadius: 999,
                  borderWidth: 1,
                  borderColor: isSelected ? colors.accent : colors.border,
                  backgroundColor: isSelected ? colors.accent : colors.surface,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? colors.onAccent : colors.textPrimary,
                    fontFamily: "DMSans_500Medium",
                    fontSize: 12,
                  }}
                >
                  {group}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={{ gap: 10 }}>
        <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_500Medium", fontSize: 12 }}>
          EXERCISE SUGGESTIONS
        </Text>
        {filteredExercises.length === 0 ? (
          <View
            style={{
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.surface,
              padding: 14,
            }}
          >
            <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_400Regular", fontSize: 13 }}>
              Select at least one muscle to view recommendations.
            </Text>
          </View>
        ) : (
          filteredExercises.map((exercise) => (
            <View
              key={exercise.id}
              style={{
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.surface,
                padding: 14,
                gap: 6,
              }}
            >
              <Text style={{ color: colors.textPrimary, fontFamily: "DMSans_700Bold", fontSize: 14 }}>
                {exercise.name}
              </Text>
              <Text style={{ color: colors.detail, fontFamily: "DMSans_500Medium", fontSize: 12 }}>
                {exercise.targetMuscle} • {exercise.sets} sets • {exercise.reps} reps • {exercise.difficulty}
              </Text>
              <Text style={{ color: colors.textSecondary, fontFamily: "DMSans_400Regular", fontSize: 13, lineHeight: 20 }}>
                {exercise.description}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScreenPlaceholder>
  );
}
