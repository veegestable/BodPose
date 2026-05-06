import { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import { AppTopBar } from "@/components/ui/AppTopBar";

type ScreenPlaceholderProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function ScreenPlaceholder({
  title,
  description,
  children,
}: ScreenPlaceholderProps) {
  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
      style={{ flex: 1, backgroundColor: colors.bg }}
    >
      <AppTopBar />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 24,
          gap: 24,
        }}
      >
        <View style={{ gap: 8 }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontFamily: "BebasNeue",
              fontSize: 36,
              letterSpacing: 0.7,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: colors.textSecondary,
              fontFamily: "DMSans_400Regular",
              fontSize: 15,
              lineHeight: 22,
              maxWidth: 560,
            }}
          >
            {description}
          </Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
}
