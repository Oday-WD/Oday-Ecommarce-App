"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaFloppyDisk } from "react-icons/fa6";
import { toast } from "sonner";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { SubmitButton } from "@/components/shared/SubmitButton/SubmitButton";
import { authClient } from "@/lib/auth-client";
import {
  updateProfileSchema,
  type UpdateProfileValues,
} from "@/schemas/profile.schema";

// inputs in display order
const fields: {
  name: keyof UpdateProfileValues;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete: string;
}[] = [
  { name: "name", label: "Full Name", placeholder: "Enter your name", autoComplete: "name" },
  { name: "email", label: "Email Address", placeholder: "Enter your email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone Number", placeholder: "01xxxxxxxxx", type: "tel", autoComplete: "tel" },
];

export const ProfileForm = ({
  defaultValues,
}: {
  defaultValues: UpdateProfileValues;
}) => {
  const router = useRouter();

  const { control, handleSubmit, formState } = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    mode: "onTouched",
    defaultValues,
  });

  const onSubmit = async (values: UpdateProfileValues) => {
    const { error } = await authClient.routeAuth.updateProfile(values);

    if (error) {
      toast.error(error.message ?? "Could not update your profile");
      return;
    }

    toast.success("Profile updated successfully");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {fields.map((field) => (
        <FormInput
          key={field.name}
          control={control}
          variant="settings"
          {...field}
        />
      ))}

      <div className="pt-4">
        <SubmitButton pending={formState.isSubmitting} icon={<FaFloppyDisk />}>
          Save Changes
        </SubmitButton>
      </div>
    </form>
  );
};