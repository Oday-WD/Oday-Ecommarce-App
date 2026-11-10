"use client";

import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { SubmitButton } from "@/components/shared/SubmitButton/SubmitButton";
import type { ActionResult } from "@/interfaces/auth.interface";
import { notify } from "@/lib/notify";
import {
  addressSchema,
  type AddressFormValues,
} from "@/schemas/address.schema";

// inputs in display order
const fields: {
  name: keyof AddressFormValues;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}[] = [
  { name: "name", label: "Address Name", placeholder: "Home" },
  { name: "city", label: "City", placeholder: "Cairo" },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "01xxxxxxxxx",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "details",
    label: "Address Details",
    placeholder: "Street, building, apartment...",
  },
];

interface AddressFormProps {
  defaultValues: AddressFormValues;
  submitLabel: string;
  submitIcon: ReactNode;
  action: (values: AddressFormValues) => Promise<ActionResult>;
  onSuccess: () => void;
}

// shared by add and edit address
export const AddressForm = ({
  defaultValues,
  submitLabel,
  submitIcon,
  action,
  onSuccess,
}: AddressFormProps) => {
  const { control, handleSubmit, formState } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    mode: "onTouched",
    defaultValues,
  });

  const onSubmit = async (values: AddressFormValues) => {
    if (notify(await action(values))) onSuccess();
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

      <SubmitButton pending={formState.isSubmitting} icon={submitIcon} fullWidth>
        {submitLabel}
      </SubmitButton>
    </form>
  );
};