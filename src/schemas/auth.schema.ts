import { z } from "zod";

import { emailRule, nameRule, passwordRule, phoneRule } from "./rules";

export const loginSchema = z.object({
  email: emailRule,
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
});

export const registerSchema = z
  .object({
    name: nameRule,
    email: emailRule,
    password: passwordRule,
    rePassword: z.string().min(1, "Please confirm your password"),
    phone: phoneRule,
    terms: z.boolean().refine((value) => value, {
      message: "You must accept the terms to continue",
    }),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
  });

/* ---------- Forgot password flow ---------- */

export const forgotPasswordSchema = z.object({ email: emailRule });

export const verifyCodeSchema = z.object({
  resetCode: z.string().regex(/^\d{6}$/, "Enter the 6-digit code"),
});

export const resetPasswordSchema = z
  .object({
    password: passwordRule,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
export type VerifyCodeValues = z.infer<typeof verifyCodeSchema>;
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
