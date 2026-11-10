import { useWatch, type Control } from "react-hook-form";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { PasswordStrength } from "@/components/auth/PasswordStrength/PasswordStrength";
import type { RegisterFormValues } from "@/schemas/auth.schema";

// name, email, password, confirm and phone inputs
export const RegisterFields = ({
  control,
}: {
  control: Control<RegisterFormValues>;
}) => {
  const password = useWatch({ control, name: "password" });

  return (
    <>
      <FormInput
        control={control}
        variant="register"
        name="name"
        label="Name*"
        placeholder="Ali"
      />

      <FormInput
        control={control}
        variant="register"
        name="email"
        type="email"
        label="Email*"
        placeholder="ali@example.com"
        autoComplete="email"
      />

      {/* Password with strength meter */}
      <FormInput
        control={control}
        variant="register"
        name="password"
        type="password"
        label="Password*"
        placeholder="create a strong password"
        autoComplete="new-password"
      >
        <PasswordStrength password={password} />
        <p className="-mt-2 text-xs text-gray-500">
          Must be at least 8 characters with numbers and symbols
        </p>
      </FormInput>

      <FormInput
        control={control}
        variant="register"
        name="rePassword"
        type="password"
        label="Confirm Password*"
        placeholder="confirm your password"
        autoComplete="new-password"
      />

      <FormInput
        control={control}
        variant="register"
        name="phone"
        type="tel"
        label="Phone Number*"
        placeholder="01012345678"
        autoComplete="tel"
      />
    </>
  );
};
