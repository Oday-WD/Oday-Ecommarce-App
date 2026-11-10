"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export function useSignOut() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const signOut = async () => {
    setPending(true);

    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message ?? "Could not sign out");
      setPending(false);
      return;
    }

    toast.success("Signed out successfully");
    router.push("/login");
    router.refresh();
    setPending(false);
  };

  return { signOut, pending };
}