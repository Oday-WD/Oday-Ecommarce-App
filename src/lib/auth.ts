import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

import { SESSION_MAX_AGE } from "@/lib/constants";
import { routeAuth } from "@/lib/route-auth.plugin";

const trustedOrigins = [
  "http://localhost:3000",
  "https://oday-ecommarce-app.vercel.app",
  process.env.BETTER_AUTH_URL,
  process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
].filter((origin): origin is string => Boolean(origin));

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins,

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
