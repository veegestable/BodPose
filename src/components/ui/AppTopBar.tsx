import { Menu, UserCircle2 } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";

type AppTopBarProps = {
  title?: string;
  showMenu?: boolean;
};

export function AppTopBar({ title = "BODPOSE", showMenu = true }: AppTopBarProps) {
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
          height: 58,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {showMenu ? (
            <Pressable
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                borderWidth: 1,
                borderColor: colors.border,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.bg,
              }}
            >
              <Menu size={18} color={colors.textSecondary} />
            </Pressable>
          ) : null}
          <Text
            style={{
              color: colors.accent,
              fontFamily: "BebasNeue",
              fontSize: 30,
              letterSpacing: 1.2,
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            width: 38,
            height: 38,
            borderRadius: 19,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.bg,
          }}
        >
          <UserCircle2 size={20} color={colors.textSecondary} />
        </View>
      </View>
    </View>
  );
}
