import { Pressable, Text, TextInput, View } from "react-native";

import { colors } from "@/constants/colors";

type AuthFormProps = {
  email: string;
  password: string;
  error?: string;
  loading?: boolean;
  submitLabel: string;
  switchLabel: string;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  onSubmit: () => void;
  onSwitchMode: () => void;
};

export function AuthForm({
  email,
  password,
  error,
  loading,
  submitLabel,
  switchLabel,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  onSwitchMode,
}: AuthFormProps) {
  return (
    <View style={{ gap: 10 }}>
      <TextInput
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={onChangeEmail}
        placeholder="Email"
        placeholderTextColor={colors.detail}
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.bg,
          borderRadius: 10,
          color: colors.textPrimary,
          paddingHorizontal: 12,
          paddingVertical: 12,
          fontFamily: "DMSans_400Regular",
        }}
        value={email}
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangePassword}
        placeholder="Password"
        placeholderTextColor={colors.detail}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.bg,
          borderRadius: 10,
          color: colors.textPrimary,
          paddingHorizontal: 12,
          paddingVertical: 12,
          fontFamily: "DMSans_400Regular",
        }}
        value={password}
      />

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
        onPress={onSubmit}
        style={{
          backgroundColor: colors.accent,
          borderRadius: 10,
          opacity: loading ? 0.7 : 1,
          paddingVertical: 12,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.onAccent,
            fontFamily: "DMSans_700Bold",
            fontSize: 14,
          }}
        >
          {loading ? "Please wait..." : submitLabel}
        </Text>
      </Pressable>

      <Pressable
        onPress={onSwitchMode}
        style={{ paddingVertical: 8, alignItems: "center" }}
      >
        <Text
          style={{
            color: colors.detail,
            fontFamily: "DMSans_400Regular",
            fontSize: 13,
          }}
        >
          {switchLabel}
        </Text>
      </Pressable>
    </View>
  );
}
