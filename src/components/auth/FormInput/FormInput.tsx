"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordToggle } from "./PasswordToggle";
import { inputVariants, type InputVariant } from "./variants";

interface FormInputProps<T extends FieldValues> extends Omit<
  ComponentProps<"input">,
  "name" | "form" | "ref"
> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  variant?: InputVariant;
  labelAside?: ReactNode;
  leftIcon?: ReactNode;
  showPasswordToggle?: boolean;
  children?: ReactNode;
  inputClassName?: string;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  variant = "login",
  labelAside,
  leftIcon,
  showPasswordToggle = false,
  type = "text",
  children,
  inputClassName,
  ...props
}: FormInputProps<T>) {
  const [visible, setVisible] = useState(false);
  const inputType = showPasswordToggle && visible ? "text" : type;
  const style = inputVariants[variant];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value, ...rest } = field;

        return (
          <Field data-invalid={fieldState.invalid}>
            {/* Label */}
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor={name} className={style.label}>
                {label}
              </FieldLabel>
              {labelAside}
            </div>

            {/* Input */}
            <div className="relative">
              {leftIcon && (
                <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                  {leftIcon}
                </span>
              )}

              <Input
                {...props}
                {...rest}
                value={value as string}
                id={name}
                type={inputType}
                aria-invalid={fieldState.invalid}
                className={`${style.input} ${leftIcon ? "pl-12!" : ""} ${showPasswordToggle ? "pr-12!" : ""} ${inputClassName ?? ""}`}
              />

              {showPasswordToggle && (
                <PasswordToggle
                  visible={visible}
                  onToggle={() => setVisible((prev) => !prev)}
                />
              )}
            </div>

            {/* Extra content and error */}
            {children}
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
}
