import type { ReactNode } from "react";
import { FaSpinner } from "react-icons/fa6";

const variants = {
  default:
    "rounded-xl px-4 py-3 text-lg shadow-lg transition-all duration-200 hover:shadow-xl",
  compact: "rounded-lg px-4 py-2 transition-colors duration-200",
} as const;

interface AuthSubmitButtonProps {
  pending: boolean;
  children: ReactNode;
  icon?: ReactNode;
  variant?: keyof typeof variants;
}

// submit button with spinner while pending
export const AuthSubmitButton = ({
  pending,
  children,
  icon,
  variant = "default",
}: AuthSubmitButtonProps) => (
  <button
    type="submit"
    disabled={pending}
    aria-busy={pending}
    className={`flex w-full items-center justify-center gap-2 bg-primary-600 font-semibold text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]}`}
  >
    {pending ? <FaSpinner className="animate-spin" /> : icon}
    {children}
  </button>
);