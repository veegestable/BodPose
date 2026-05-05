import { PropsWithChildren } from "react";
import { Text, View } from "react-native";

import { colors } from "@/constants/colors";

type SectionCardProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

export function SectionCard({ title, subtitle, children }: SectionCardProps) {
  return (
    <View
      style={{
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        padding: 14,
        gap: 10,
      }}
    >
      <View style={{ gap: 4 }}>
        <Text
          style={{
            color: colors.textPrimary,
            fontFamily: "DMSans_700Bold",
            fontSize: 15,
          }}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={{
              color: colors.textSecondary,
              fontFamily: "DMSans_400Regular",
              fontSize: 13,
            }}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
      {children}
    </View>
  );
}
