import { Bell } from "lucide-react-native";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";

type AppTopBarProps = {
  title?: string;
};

export function AppTopBar({ title = "BODPOSE" }: AppTopBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        backgroundColor: colors.surface,
      }}
    >
      <View
        style={{
          height: 64,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: colors.accent,
            fontFamily: "BebasNeue",
            fontSize: 28,
            letterSpacing: 1.2,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.bg,
          }}
        >
          <Bell size={16} color={colors.textSecondary} />
        </View>
      </View>
    </View>
  );
}
