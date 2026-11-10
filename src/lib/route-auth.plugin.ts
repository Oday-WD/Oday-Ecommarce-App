import type { BetterAuthPlugin } from "better-auth";
import {
  APIError,
  createAuthEndpoint,
  getSessionFromCtx,
} from "better-auth/api";
import { setSessionCookie } from "better-auth/cookies";
import { symmetricDecrypt, symmetricEncrypt } from "better-auth/crypto";
import { jwtDecode } from "jwt-decode";
import { z } from "zod";
import type {
  AuthResponse,
  AuthUser,
  TokenPayload,
} from "@/interfaces/auth.interface";
import { DEFAULT_ERROR_MESSAGE, SESSION_MAX_AGE } from "@/lib/constants";
import { RouteApiError, routeSignIn, routeSignUp } from "@/lib/route-api";
import { routeFetch } from "@/lib/route-fetch";

type SessionCtx = Parameters<typeof setSessionCookie>[0];

/* ---------- Request bodies ---------- */

const signUpBody = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  rePassword: z.string(),
  phone: z.string(),
});

const signInBody = z.object({
  email: z.string(),
  password: z.string(),
  rememberMe: z.boolean().optional(),
});

const updateProfileBody = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

const changePasswordBody = z.object({
  currentPassword: z.string(),
  password: z.string(),
  rePassword: z.string(),
});

/* ---------- Helpers ---------- */

// turns any error into an APIError the client can read
function toApiError(error: unknown, fallback: "UNAUTHORIZED" | "BAD_REQUEST") {
  if (error instanceof APIError) return error;

  if (error instanceof RouteApiError) {
    return new APIError(error.status === 409 ? "CONFLICT" : fallback, {
      message: error.message,
    });
  }

  return new APIError("INTERNAL_SERVER_ERROR", {
    message: DEFAULT_ERROR_MESSAGE,
  });
}

// creates the session: the Route token is encrypted before it goes in the cookie
async function startSession(
  ctx: SessionCtx,
  { user: routeUser, token }: AuthResponse,
  rememberMe: boolean,
) {
  const payload = jwtDecode<TokenPayload>(token);
  const now = new Date();
  const expiresAt = new Date(
    Math.min(payload.exp * 1000, now.getTime() + SESSION_MAX_AGE * 1000),
  );

  const session = {
    id: crypto.randomUUID(),
    token: crypto.randomUUID(),
    userId: payload.id,
    createdAt: now,
    updatedAt: now,
    expiresAt,
    apiToken: await symmetricEncrypt({ key: ctx.context.secret, data: token }),
  };

  const user = {
    id: payload.id,
    name: routeUser.name,
    email: routeUser.email,
    emailVerified: false,
    image: null,
    createdAt: now,
    updatedAt: now,
    role: routeUser.role,
  };

  await setSessionCookie(ctx, { session, user }, !rememberMe);
}

// current session plus the decrypted Route token
async function requireSession(ctx: Parameters<typeof getSessionFromCtx>[0]) {
  const current = await getSessionFromCtx(ctx);
  const encrypted = current?.session.apiToken as string | undefined;

  if (!current || !encrypted) {
    throw new APIError("UNAUTHORIZED", { message: "Please sign in again" });
  }

  const token = await symmetricDecrypt({
    key: ctx.context.secret,
    data: encrypted,
  });

  return { current, token };
}

/* ---------- Plugin ---------- */

export const routeAuth = () =>
  ({
    id: "route-auth",
    endpoints: {
      // sign up only, no session (the user is sent to /login afterwards)
      signUp: createAuthEndpoint(
        "/route-auth/sign-up",
        { method: "POST", body: signUpBody },
        async (ctx) => {
          try {
            const data = await routeSignUp(ctx.body);
            return ctx.json({ message: data.message, user: data.user });
          } catch (error) {
            throw toApiError(error, "BAD_REQUEST");
          }
        },
      ),

      // sign in and start the session
      signIn: createAuthEndpoint(
        "/route-auth/sign-in",
        { method: "POST", body: signInBody },
        async (ctx) => {
          try {
            const { email, password, rememberMe = false } = ctx.body;
            const data = await routeSignIn({ email, password });
            await startSession(ctx, data, rememberMe);
            // the token never reaches the browser
            return ctx.json({ message: data.message, user: data.user });
          } catch (error) {
            throw toApiError(error, "UNAUTHORIZED");
          }
        },
      ),

      // update name, email and phone, then refresh the session
      updateProfile: createAuthEndpoint(
        "/route-auth/update-profile",
        { method: "POST", body: updateProfileBody },
        async (ctx) => {
          try {
            const { current, token } = await requireSession(ctx);

            const data = await routeFetch<{ user?: Partial<AuthUser> }>(
              "users/updateMe/",
              { method: "PUT", token, body: ctx.body },
            );

            const user = {
              ...current.user,
              name: data.user?.name ?? ctx.body.name,
              email: data.user?.email ?? ctx.body.email,
              phone: ctx.body.phone,
              updatedAt: new Date(),
            };

            await setSessionCookie(ctx, { session: current.session, user });

            return ctx.json({ message: "Profile updated successfully" });
          } catch (error) {
            throw toApiError(error, "BAD_REQUEST");
          }
        },
      ),

      // change password: Route issues a new token, so the session token is replaced
      changePassword: createAuthEndpoint(
        "/route-auth/change-password",
        { method: "POST", body: changePasswordBody },
        async (ctx) => {
          try {
            const { current, token } = await requireSession(ctx);

            const data = await routeFetch<{ token?: string }>(
              "users/changeMyPassword",
              { method: "PUT", token, body: ctx.body },
            );

            if (data.token) {
              const session = {
                ...current.session,
                apiToken: await symmetricEncrypt({
                  key: ctx.context.secret,
                  data: data.token,
                }),
                updatedAt: new Date(),
              };

              await setSessionCookie(ctx, { session, user: current.user });
            }

            return ctx.json({ message: "Password changed successfully" });
          } catch (error) {
            throw toApiError(error, "BAD_REQUEST");
          }
        },
      ),
    },
  }) satisfies BetterAuthPlugin;