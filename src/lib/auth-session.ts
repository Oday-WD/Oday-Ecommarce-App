import { jwtDecode } from "jwt-decode";
import { headers } from "next/headers";
import { connection } from "next/server";
import { cache } from "react";
import type { TokenPayload } from "@/interfaces/auth.interface";
import { decryptApiToken } from "@/lib/api-token";
import { auth } from "@/lib/auth";

export const getSession = cache(async () => {
  await connection();

  return auth.api.getSession({ headers: await headers() });
});

export async function getApiToken(): Promise<string | null> {
  const session = await getSession();
  return decryptApiToken(session?.session.apiToken);
}

export async function getTokenPayload(): Promise<TokenPayload | null> {
  const token = await getApiToken();
  return token ? jwtDecode<TokenPayload>(token) : null;
}