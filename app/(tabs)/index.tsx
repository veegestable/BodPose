import { Text, View } from "react-native";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { colors } from "@/constants/colors";

export default function HomeScreen() {
  return (
    <ScreenPlaceholder
      title="Home"
      description="Welcome to BodPose. This is the dashboard shell with Vj mini-card, streak snapshot, and quick-start controls."
    >
      <View
        style={{
          marginTop: 8,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: colors.surface2,
          backgroundColor: colors.surface,
          padding: 16,
          gap: 8,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontFamily: "DMSans_700Bold",
            fontSize: 16,
          }}
        >
          Dashboard placeholder
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontFamily: "DMSans_400Regular",
            fontSize: 14,
          }}
        >
          Unit 01 establishes navigation and design tokens. Feature content arrives in later units.
        </Text>
      </View>
    </ScreenPlaceholder>
  );
}
