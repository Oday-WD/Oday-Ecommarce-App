"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa6";
import { forgotPasswordAction } from "@/actions/auth.actions";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton/AuthSubmitButton";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { notify } from "@/lib/notify";
import {
  forgotPasswordSchema,
  type ForgotPasswordValues,
} from "@/schemas/auth.schema";

interface EmailStepProps {
  defaultEmail: string;
  onSuccess: (email: string) => void;
}

// step 1: ask for the account email
export const EmailStep = ({ defaultEmail, onSuccess }: EmailStepProps) => {
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
    defaultValues: { email: defaultEmail },
  });

  const onSubmit = async ({ email }: ForgotPasswordValues) => {
    const result = await forgotPasswordAction(email);
    if (notify(result)) onSuccess(email);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
    >
      <FormInput
        control={form.control}
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter your email address"
        autoComplete="email"
        leftIcon={<FaEnvelope />}
      />

      <AuthSubmitButton pending={form.formState.isSubmitting}>
        Send Reset Code
      </AuthSubmitButton>

      <div className="text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
        >
          <FaArrowLeft className="text-xs" />
          Back to Sign In
        </Link>
      </div>
    </form>
  );
};