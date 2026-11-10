"use client";

import type { ReactNode } from "react";
import { useSignOut } from "@/hooks/useSignOut";

interface SignOutButtonProps {
  className?: string;
  children: ReactNode;
}

// handles the sign out request
export const SignOutButton = ({ className, children }: SignOutButtonProps) => {
  const { signOut, pending } = useSignOut();

  return (
    <button
      type="button"
      onClick={signOut}
      disabled={pending}
      className={className}
    >
      {children}
    </button>
  );
};
