"use client";

import { useState } from "react";
import { AuthCard } from "@/components/auth/AuthCard/AuthCard";
import { AuthSwitch } from "@/components/auth/AuthSwitch/AuthSwitch";
import { CodeStep } from "./CodeStep";
import { EmailStep } from "./EmailStep";
import { ResetStep } from "./ResetStep";
import { StepIndicator } from "./StepIndicator";

type Step = "email" | "code" | "reset";

const stepIndex: Record<Step, number> = { email: 0, code: 1, reset: 2 };

// heading text per step
const getHeader = (step: Step, email: string) =>
  ({
    email: {
      title: "Forgot Password?",
      text: "No worries, we'll send you a reset code",
    },
    code: {
      title: "Check Your Email",
      text: `Enter the 6-digit code sent to ${email}`,
    },
    reset: {
      title: "Create New Password",
      text: "Your new password must be different from previous passwords",
    },
  })[step];

export const ForgotPasswordFlow = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");

  const header = getHeader(step, email);

  return (
    <AuthCard title={header.title} text={header.text}>
      <StepIndicator current={stepIndex[step]} />

      {/* Steps */}
      {step === "email" && (
        <EmailStep
          defaultEmail={email}
          onSuccess={(value) => {
            setEmail(value);
            setStep("code");
          }}
        />
      )}

      {step === "code" && (
        <CodeStep
          email={email}
          onSuccess={() => setStep("reset")}
          onChangeEmail={() => setStep("email")}
        />
      )}

      {step === "reset" && <ResetStep email={email} />}

      {/* Sign in link */}
      {step === "email" && (
        <AuthSwitch
          text="Remember your password?"
          linkLabel="Sign In"
          href="/login"
        />
      )}
    </AuthCard>
  );
};
