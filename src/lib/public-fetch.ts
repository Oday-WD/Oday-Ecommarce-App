import { BASE_URL } from "@/lib/constants";

// GET request to a public Route API endpoint
export async function fetchPublic<T>(path: string, what: string): Promise<T> {
  const response = await fetch(`${BASE_URL}/api/v1/${path}`);

  if (!response.ok) {
    throw new Error(`${response.status} Error occurred while fetching ${what}`);
  }

  return response.json();
}
