import { toast } from "sonner";

import type { ActionResult } from "@/interfaces/auth.interface";

// shows a success or error toast, returns true when the action succeeded
export function notify(result: ActionResult, successMessage?: string): boolean {
  if (result.ok) {
    toast.success(successMessage ?? result.message);
    return true;
  }

  toast.error(result.message);
  return false;
}
