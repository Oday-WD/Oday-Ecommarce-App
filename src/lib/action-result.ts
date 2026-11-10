import type { ActionResult } from "@/interfaces/auth.interface";
import { DEFAULT_ERROR_MESSAGE } from "@/lib/constants";
import { RouteApiError } from "@/lib/route-api";

export const unauthorizedResult: ActionResult = {
  ok: false,
  message: "Please sign in to continue",
  unauthorized: true,
};

// API errors keep their message, anything else gets the default one
export const failureResult = (error: unknown): ActionResult => ({
  ok: false,
  message: error instanceof RouteApiError ? error.message : DEFAULT_ERROR_MESSAGE,
});