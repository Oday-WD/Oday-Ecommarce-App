import type { ReactNode } from "react";
import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: { label: string; href: string };
}

// centered message with optional icon and button
export const EmptyState = ({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) => (
  <div className="py-20 text-center">
    {icon && (
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl text-gray-400">
        {icon}
      </div>
    )}
    <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
    <p className="mb-6 text-gray-500">{description}</p>
    {action && (
      <Link
        href={action.href}
        className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
      >
        {action.label}
      </Link>
    )}
  </div>
);
