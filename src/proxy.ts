import { NextResponse, type NextRequest } from "next/server";
import { decryptApiToken, verifyApiToken } from "@/lib/api-token";
import { auth } from "@/lib/auth";

const GUEST_ONLY = ["/login", "/register", "/forgot-password"];
const PROTECTED = ["/cart", "/wishlist", "/orders", "/profile", "/checkout"];
const matches = (pathname: string, paths: string[]) =>
  paths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth.api.getSession({ headers: request.headers });

  if (matches(pathname, GUEST_ONLY)) {
    return session
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  }

  if (matches(pathname, PROTECTED)) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const isPrefetch =
      request.headers.has("next-router-prefetch") ||
      request.headers.get("purpose") === "prefetch";

    if (!isPrefetch) {
      const token = await decryptApiToken(session.session.apiToken);

      if (!token || !(await verifyApiToken(token))) {
        return NextResponse.redirect(new URL("/api/session-expired", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/forgot-password",
    "/cart/:path*",
    "/wishlist/:path*",
    "/orders/:path*",
    "/profile/:path*",
    "/checkout/:path*",
  ],
};