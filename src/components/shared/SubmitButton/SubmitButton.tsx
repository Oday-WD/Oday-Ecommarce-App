import type { ReactNode } from "react";
import { FaSpinner } from "react-icons/fa6";

const tones = {
  primary: "bg-primary-600 shadow-primary-600/25 hover:bg-primary-700",
  amber: "bg-amber-600 shadow-amber-600/25 hover:bg-amber-700",
} as const;

interface SubmitButtonProps {
  pending: boolean;
  icon: ReactNode;
  children: ReactNode;
  tone?: keyof typeof tones;
  fullWidth?: boolean;
}

// form submit button with spinner while pending
export const SubmitButton = ({
  pending,
  icon,
  children,
  tone = "primary",
  fullWidth = false,
}: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={pending}
    aria-busy={pending}
    className={`items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
      fullWidth ? "flex w-full" : "inline-flex"
    } ${tones[tone]}`}
  >
    {pending ? <FaSpinner className="animate-spin" /> : icon}
    {children}
  </button>
);
