import { headers } from "next/headers";

// site url of the current request (used for Stripe redirects)
export async function getOrigin() {
  const list = await headers();
  const host = list.get("x-forwarded-host") ?? list.get("host");
  const proto =
    list.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");

  return host ? `${proto}://${host}` : (process.env.BETTER_AUTH_URL ?? "");
}