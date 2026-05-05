import { PropsWithChildren } from "react";
import { SafeAreaView, Text, View } from "react-native";

import { colors } from "@/constants/colors";

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
      style={{
        flex: 1,
        backgroundColor: colors.bg,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 20,
          gap: 12,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontFamily: "BebasNeue",
            fontSize: 38,
            letterSpacing: 0.75,
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
        {children}
      </View>
    </SafeAreaView>
  );
}
