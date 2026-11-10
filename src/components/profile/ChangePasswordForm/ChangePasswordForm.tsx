"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa6";
import { toast } from "sonner";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { SubmitButton } from "@/components/shared/SubmitButton/SubmitButton";
import { authClient } from "@/lib/auth-client";
import {
  changePasswordSchema,
  type ChangePasswordValues,
} from "@/schemas/profile.schema";

// inputs in display order
const fields: {
  name: keyof ChangePasswordValues;
  label: string;
  placeholder: string;
  autoComplete: string;
  hint?: string;
}[] = [
  { name: "currentPassword", label: "Current Password", placeholder: "Enter your current password", autoComplete: "current-password" },
  { name: "password", label: "New Password", placeholder: "Enter your new password", autoComplete: "new-password", hint: "Must be at least 6 characters" },
  { name: "rePassword", label: "Confirm New Password", placeholder: "Confirm your new password", autoComplete: "new-password" },
];

export const ChangePasswordForm = () => {
  const router = useRouter();

  const form = useForm<ChangePasswordValues>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onTouched",
    defaultValues: { currentPassword: "", password: "", rePassword: "" },
  });

  const { control, handleSubmit, formState } = form;

  const onSubmit = async (values: ChangePasswordValues) => {
    const { error } = await authClient.routeAuth.changePassword(values);

    if (error) {
      toast.error(error.message ?? "Could not change your password");
      return;
    }

    toast.success("Password changed successfully");
    form.reset();
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {fields.map(({ hint, ...field }) => (
        <FormInput
          key={field.name}
          control={control}
          variant="settings"
          type="password"
          showPasswordToggle
          {...field}
        >
          {hint && <p className="-mt-1 text-xs text-gray-500">{hint}</p>}
        </FormInput>
      ))}

      <div className="pt-4">
        <SubmitButton
          pending={formState.isSubmitting}
          icon={<FaLock />}
          tone="amber"
        >
          Change Password
        </SubmitButton>
      </div>
    </form>
  );
};