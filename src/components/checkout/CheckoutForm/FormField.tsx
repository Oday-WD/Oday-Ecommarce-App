import type { ReactNode } from "react";
import type { FieldError } from "react-hook-form";

// input style, red when invalid
export const inputClass = (invalid: boolean) =>
  `w-full rounded-xl border-2 px-4 py-3.5 pl-14 transition-all focus:outline-none focus:ring-2 ${
    invalid
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-gray-200 focus:border-primary-500 focus:ring-primary-100"
  }`;

interface FormFieldProps {
  id: string;
  label: string;
  icon: ReactNode;
  error?: FieldError;
  hint?: string;
  top?: boolean;
  children: ReactNode;
}

// labeled field with icon and error
export const FormField = ({
  id,
  label,
  icon,
  error,
  hint,
  top,
  children,
}: FormFieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-700"
    >
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <div
        className={`absolute left-4 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 ${
          top ? "top-4" : "top-1/2 -translate-y-1/2"
        }`}
      >
        {icon}
      </div>
      {children}
      {hint && (
        <span className="absolute top-1/2 right-4 -translate-y-1/2 text-xs text-gray-400">
          {hint}
        </span>
      )}
    </div>
    {error && <p className="mt-1.5 text-sm text-red-500">{error.message}</p>}
  </div>
);
