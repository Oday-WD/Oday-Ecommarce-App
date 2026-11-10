import type { ActionResult } from "@/interfaces/auth.interface";
import { failureResult, unauthorizedResult } from "@/lib/action-result";
import { getApiToken } from "@/lib/auth-session";

// runs an action with the user's token and wraps the result
export async function withToken(
  task: (token: string) => Promise<string>,
  onSuccess?: () => void,
): Promise<ActionResult> {
  const token = await getApiToken();
  if (!token) return unauthorizedResult;

  try {
    const message = await task(token);
    onSuccess?.();
    return { ok: true, message };
  } catch (error) {
    return failureResult(error);
  }
}