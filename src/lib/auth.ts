import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { SESSION_MAX_AGE } from "@/lib/constants";
import { routeAuth } from "@/lib/route-auth.plugin";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  session: {
    expiresIn: SESSION_MAX_AGE,
    cookieCache: {
      enabled: true,
      maxAge: SESSION_MAX_AGE,
      strategy: "jwe",
      refreshCache: true,
    },
    additionalFields: {
      apiToken: { type: "string", required: false, input: false },
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        input: false,
        defaultValue: "user",
      },
      phone: { type: "string", required: false, input: false },
    },
  },

  plugins: [routeAuth(), nextCookies()],
});
