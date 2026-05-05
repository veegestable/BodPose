import { PropsWithChildren } from "react";
import { SafeAreaView, Text, View } from "react-native";

import { colors } from "@/constants/colors";

type AuthCardProps = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            padding: 16,
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
              fontSize: 14,
            }}
          >
            {subtitle}
          </Text>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
