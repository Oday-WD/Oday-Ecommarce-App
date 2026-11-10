import type { AuthResponse } from "@/interfaces/auth.interface";
import { BASE_URL, DEFAULT_ERROR_MESSAGE } from "@/lib/constants";

export class RouteApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "RouteApiError";
    this.status = status;
  }
}

// reads a Route API response, throws RouteApiError when it failed
export async function readResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => null);

  if (!response.ok || data?.statusMsg === "fail") {
    throw new RouteApiError(
      data?.errors?.msg ?? data?.message ?? DEFAULT_ERROR_MESSAGE,
      response.status,
    );
  }

  return data as T;
}

/* ---------- Public auth endpoints ---------- */

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

interface SignInPayload {
  email: string;
  password: string;
}

interface MessageResponse {
  message?: string;
}

async function request<T>(
  path: string,
  method: "POST" | "PUT",
  body: object,
): Promise<T> {
  const response = await fetch(`${BASE_URL}/api/v1/auth/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  return readResponse<T>(response);
}

// signup / signin must return a token
async function authenticate(
  path: "signup" | "signin",
  body: SignUpPayload | SignInPayload,
): Promise<AuthResponse> {
  const data = await request<AuthResponse>(path, "POST", body);

  if (!data?.token) throw new RouteApiError(DEFAULT_ERROR_MESSAGE, 500);

  return data;
}

export const routeSignUp = (payload: SignUpPayload) =>
  authenticate("signup", payload);
export const routeSignIn = (payload: SignInPayload) =>
  authenticate("signin", payload);

// forgot password flow
export const routeForgotPassword = (email: string) =>
  request<MessageResponse>("forgotPasswords", "POST", { email });

export const routeVerifyResetCode = (resetCode: string) =>
  request<MessageResponse>("verifyResetCode", "POST", { resetCode });

export const routeResetPassword = (email: string, newPassword: string) =>
  request<MessageResponse>("resetPassword", "PUT", { email, newPassword });