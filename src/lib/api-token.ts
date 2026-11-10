import { symmetricDecrypt } from "better-auth/crypto";
import { auth } from "@/lib/auth";
import { BASE_URL } from "@/lib/constants";

export async function decryptApiToken(
  encrypted?: string | null,
): Promise<string | null> {
  if (!encrypted) return null;

  try {
    const { secret } = await auth.$context;
    return await symmetricDecrypt({ key: secret, data: encrypted });
  } catch {
    return null;
  }
}

export async function verifyApiToken(token: string): Promise<boolean> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/auth/verifyToken`, {
      headers: { token },
      cache: "no-store",
    });

    return response.ok || response.status >= 500;
  } catch {
    return true;
  }
}