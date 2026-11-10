"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaShieldHalved } from "react-icons/fa6";
import {
  forgotPasswordAction,
  verifyResetCodeAction,
} from "@/actions/auth.actions";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton/AuthSubmitButton";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { notify } from "@/lib/notify";
import { verifyCodeSchema, type VerifyCodeValues } from "@/schemas/auth.schema";

interface CodeStepProps {
  email: string;
  onSuccess: () => void;
  onChangeEmail: () => void;
}

// step 2: enter the 6-digit code from the email
export const CodeStep = ({
  email,
  onSuccess,
  onChangeEmail,
}: CodeStepProps) => {
  const [resending, setResending] = useState(false);

  const form = useForm<VerifyCodeValues>({
    resolver: zodResolver(verifyCodeSchema),
    mode: "onTouched",
    defaultValues: { resetCode: "" },
  });

  const onSubmit = async ({ resetCode }: VerifyCodeValues) => {
    const result = await verifyResetCodeAction(resetCode);
    if (notify(result, "Code verified successfully")) onSuccess();
  };

  // send a new code to the same email
  const resend = async () => {
    setResending(true);
    notify(await forgotPasswordAction(email));
    setResending(false);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
    >
      <FormInput
        control={form.control}
        name="resetCode"
        label="Verification Code"
        placeholder="••••••"
        maxLength={6}
        inputMode="numeric"
        autoComplete="one-time-code"
        leftIcon={<FaShieldHalved />}
        inputClassName="text-center! text-2xl! md:text-2xl! tracking-[0.5em] font-mono"
      />

      {/* Resend */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            onClick={resend}
            disabled={resending}
            className="font-semibold text-primary-600 transition-colors hover:text-primary-700 disabled:opacity-50"
          >
            Resend Code
          </button>
        </p>
      </div>

      <AuthSubmitButton pending={form.formState.isSubmitting}>
        Verify Code
      </AuthSubmitButton>

      {/* Back */}
      <div className="text-center">
        <button
          type="button"
          onClick={onChangeEmail}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary-600"
        >
          <FaArrowLeft className="text-xs" />
          Change email address
        </button>
      </div>
    </form>
  );
};