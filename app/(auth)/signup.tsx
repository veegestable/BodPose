import { router } from "expo-router";
import { useState } from "react";

import { AuthCard } from "@/components/ui/AuthCard";
import { AuthForm } from "@/components/ui/AuthForm";
import { signupWithEmail } from "@/services/firebase/auth";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await signupWithEmail(email.trim(), password);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to create account right now.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      subtitle="Create your BodPose account and start building your stage-ready physique."
      title="Sign Up"
    >
      <AuthForm
        email={email}
        error={error}
        loading={loading}
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onSubmit={handleSignup}
        onSwitchMode={() => router.push("/(auth)/login")}
        password={password}
        submitLabel="Create Account"
        switchLabel="Already have an account? Sign in"
      />
    </AuthCard>
  );
}
