"use server";

import type { ActionResult } from "@/interfaces/auth.interface";
import { failureResult } from "@/lib/action-result";
import {
  routeForgotPassword,
  routeResetPassword,
  routeVerifyResetCode,
} from "@/lib/route-api";

// runs a Route API call and wraps the outcome as an ActionResult
async function toResult(
  task: () => Promise<{ message?: string }>,
  fallback: string,
): Promise<ActionResult> {
  try {
    const data = await task();
    return { ok: true, message: data.message ?? fallback };
  } catch (error) {
    return failureResult(error);
  }
}

export async function forgotPasswordAction(email: string) {
  return toResult(
    () => routeForgotPassword(email),
    "Reset code sent to your email",
  );
}

export async function verifyResetCodeAction(resetCode: string) {
  return toResult(() => routeVerifyResetCode(resetCode), "Code verified");
}

export async function resetPasswordAction(email: string, newPassword: string) {
  return toResult(
    () => routeResetPassword(email, newPassword),
    "Password reset successfully",
  );
}
