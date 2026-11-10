import type { ReactNode } from "react";
import Link from "next/link";
import { FaFilter, FaXmark } from "react-icons/fa6";

export interface ActiveFilter {
  label: string;
  icon: ReactNode;
  className: string;
}

interface ActiveFiltersProps {
  filters: ActiveFilter[];
  clearHref?: string;
}

// colored filter chips for products pages (each one links to clear it)
export const ActiveFilters = ({
  filters,
  clearHref = "/products",
}: ActiveFiltersProps) => {
  if (filters.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-2 text-sm text-gray-600">
        <FaFilter />
        Active Filters:
      </span>

      {/* Chips */}
      {filters.map(({ label, icon, className }) => (
        <Link
          key={label}
          href={clearHref}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${className}`}
        >
          {icon}
          {label}
          <FaXmark className="text-xs" />
        </Link>
      ))}

      {/* Clear all */}
      <Link
        href={clearHref}
        className="text-sm text-gray-500 underline hover:text-gray-700"
      >
        Clear all
      </Link>
    </div>
  );
};