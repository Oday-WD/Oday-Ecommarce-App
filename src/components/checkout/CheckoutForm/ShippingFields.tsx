import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { FaCircleInfo, FaCity, FaLocationDot, FaPhone } from "react-icons/fa6";
import type { CheckoutFormValues } from "@/schemas/checkout.schema";
import { FormField, inputClass } from "./FormField";

interface ShippingFieldsProps {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
  isNew: boolean;
}

// city, street and phone inputs
export const ShippingFields = ({
  register,
  errors,
  isNew,
}: ShippingFieldsProps) => (
  <>
    {/* Info note */}
    <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
        <FaCircleInfo className="text-sm text-blue-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-blue-800">
          Delivery Information
        </p>
        <p className="mt-0.5 text-xs text-blue-600">
          {isNew
            ? "Please ensure your address is accurate for smooth delivery"
            : "Using your saved address. You can edit the details below if needed."}
        </p>
      </div>
    </div>

    {/* City */}
    <FormField id="city" label="City" icon={<FaCity />} error={errors.city}>
      <input
        id="city"
        type="text"
        placeholder="e.g. Cairo, Alexandria, Giza"
        aria-invalid={!!errors.city}
        className={inputClass(!!errors.city)}
        {...register("city")}
      />
    </FormField>

    {/* Street */}
    <FormField
      id="details"
      label="Street Address"
      icon={<FaLocationDot />}
      error={errors.details}
      top
    >
      <textarea
        id="details"
        rows={3}
        placeholder="Street name, building number, floor, apartment..."
        aria-invalid={!!errors.details}
        className={`${inputClass(!!errors.details)} resize-none`}
        {...register("details")}
      />
    </FormField>

    {/* Phone */}
    <FormField
      id="phone"
      label="Phone Number"
      icon={<FaPhone />}
      error={errors.phone}
      hint="Egyptian numbers only"
    >
      <input
        id="phone"
        type="tel"
        placeholder="01xxxxxxxxx"
        autoComplete="tel"
        aria-invalid={!!errors.phone}
        className={`${inputClass(!!errors.phone)} pr-40`}
        {...register("phone")}
      />
    </FormField>
  </>
);
