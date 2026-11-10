import type { BetterAuthClientPlugin } from "better-auth/client";
import { createAuthClient } from "better-auth/react";
import type { routeAuth } from "@/lib/route-auth.plugin";

const routeAuthClient = () =>
  ({
    id: "route-auth",
    $InferServerPlugin: {} as ReturnType<typeof routeAuth>,
  }) satisfies BetterAuthClientPlugin;

export const authClient = createAuthClient({
  plugins: [routeAuthClient()],
});