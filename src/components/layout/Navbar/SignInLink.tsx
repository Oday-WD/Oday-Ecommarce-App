import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";

// guest sign in button (desktop only)
export const SignInLink = () => (
  <Link
    href="/login"
    className="ml-2 hidden items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-600/20 transition-colors hover:bg-primary-700 lg:flex"
  >
    <FaRegUser className="text-xs" />
    Sign In
  </Link>
);