import Link from "next/link";
import { FaRegUser, FaRightFromBracket } from "react-icons/fa6";
import { SheetClose } from "@/components/ui/sheet";
import type { SessionUser } from "@/interfaces/auth.interface";
import { MobileRow } from "./MobileRow";

interface MobileUserSectionProps {
  user: SessionUser | null;
  pending: boolean;
  onSignOut: () => void;
}

// profile and sign out, or sign in / sign up for guests
export const MobileUserSection = ({
  user,
  pending,
  onSignOut,
}: MobileUserSectionProps) => (
  <div className="space-y-1 p-4">
    {user ? (
      <>
        <MobileRow
          href="/profile"
          icon={FaRegUser}
          label={user.name}
          tone="gray"
        />
        <button
          type="button"
          onClick={onSignOut}
          disabled={pending}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-red-50 disabled:opacity-50"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50">
            <FaRightFromBracket className="text-red-500" />
          </div>
          <span className="font-medium text-red-600">Sign Out</span>
        </button>
      </>
    ) : (
      <div className="grid grid-cols-2 gap-3 pt-2">
        <SheetClose
          render={
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
            />
          }
        >
          Sign In
        </SheetClose>
        <SheetClose
          render={
            <Link
              href="/register"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary-600 px-4 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50"
            />
          }
        >
          Sign Up
        </SheetClose>
      </div>
    )}
  </div>
);
