import Link from "next/link";
import { FaRegUser, FaRightFromBracket, FaUserPlus } from "react-icons/fa6";
import { SignOutButton } from "@/components/auth/SignOutButton/SignOutButton";

const linkClass =
  "flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600";

// profile and sign out, or sign in / sign up for guests
export const TopBarUser = ({ user }: { user?: { name: string } }) => (
  <div className="flex items-center gap-4">
    {user ? (
      <>
        <Link href="/profile" className={linkClass}>
          <FaRegUser className="text-xs" />
          <span>{user.name}</span>
        </Link>
        <SignOutButton className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-red-500 disabled:opacity-50">
          <FaRightFromBracket className="text-xs" />
          <span>Sign Out</span>
        </SignOutButton>
      </>
    ) : (
      <>
        <Link href="/login" className={linkClass}>
          <FaRegUser className="text-xs" />
          <span>Sign In</span>
        </Link>
        <Link href="/register" className={linkClass}>
          <FaUserPlus className="text-xs" />
          <span>Sign Up</span>
        </Link>
      </>
    )}
  </div>
);