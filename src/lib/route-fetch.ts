import { BASE_URL } from "@/lib/constants";
import { readResponse } from "@/lib/route-api";

interface RouteFetchOptions {
  token: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  version?: "v1" | "v2";
}

// Route API requests that need the token header (server only)
export async function routeFetch<T>(
  path: string,
  { token, method = "GET", body, version = "v1" }: RouteFetchOptions,
): Promise<T> {
  const response = await fetch(`${BASE_URL}/api/${version}/${path}`, {
    method,
    headers: {
      token,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  return readResponse<T>(response);
}