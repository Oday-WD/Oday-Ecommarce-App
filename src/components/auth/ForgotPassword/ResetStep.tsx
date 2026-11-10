"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa6";
import { resetPasswordAction } from "@/actions/auth.actions";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton/AuthSubmitButton";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { notify } from "@/lib/notify";
import {
  resetPasswordSchema,
  type ResetPasswordValues,
} from "@/schemas/auth.schema";

// step 3: choose a new password
export const ResetStep = ({ email }: { email: string }) => {
  const router = useRouter();

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onTouched",
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async ({ password }: ResetPasswordValues) => {
    const result = await resetPasswordAction(email, password);

    if (!notify(result, "Password reset successfully! Please sign in.")) return;
    router.push("/login");
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
    >
      <FormInput
        control={form.control}
        name="password"
        type="password"
        label="New Password"
        placeholder="Enter new password"
        autoComplete="new-password"
        leftIcon={<FaLock />}
        showPasswordToggle
      />

      <FormInput
        control={form.control}
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Confirm new password"
        autoComplete="new-password"
        leftIcon={<FaLock />}
        showPasswordToggle
      />

      <AuthSubmitButton pending={form.formState.isSubmitting}>
        Reset Password
      </AuthSubmitButton>
    </form>
  );
};