import { router } from "expo-router";
import { useState } from "react";

import { AuthCard } from "@/components/ui/AuthCard";
import { AuthForm } from "@/components/ui/AuthForm";
import { loginWithEmail } from "@/services/firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await loginWithEmail(email.trim(), password);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to sign in right now.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      subtitle="Sign in with your BodPose account to continue your training journey."
      title="Login"
    >
      <AuthForm
        email={email}
        error={error}
        loading={loading}
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onSubmit={handleLogin}
        onSwitchMode={() => router.push("/(auth)/signup")}
        password={password}
        submitLabel="Sign In"
        switchLabel="Need an account? Create one"
      />
    </AuthCard>
  );
}
