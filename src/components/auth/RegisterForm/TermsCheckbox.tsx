import Link from "next/link";
import { Controller, type Control } from "react-hook-form";
import { PrimaryCheckbox } from "@/components/shared/PrimaryCheckbox/PrimaryCheckbox";
import { Field, FieldError } from "@/components/ui/field";
import type { RegisterFormValues } from "@/schemas/auth.schema";

// terms and privacy agreement
export const TermsCheckbox = ({
  control,
}: {
  control: Control<RegisterFormValues>;
}) => (
  <Controller
    control={control}
    name="terms"
    render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
        <div className="flex items-center gap-2">
          <PrimaryCheckbox
            id="terms"
            name={field.name}
            checked={field.value}
            onCheckedChange={field.onChange}
            aria-invalid={fieldState.invalid}
          />
          <label htmlFor="terms" className="ms-2">
            I agree to the{" "}
            <Link href="/terms" className="text-primary-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            *
          </label>
        </div>
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </Field>
    )}
  />
);
