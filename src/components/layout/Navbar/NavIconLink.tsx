import Link from "next/link";
import type { IconType } from "react-icons";

interface NavIconLinkProps {
  href: string;
  label: string;
  icon: IconType;
  count?: number;
  badgeClass?: string;
}

// round icon link with optional count badge
export const NavIconLink = ({
  href,
  label,
  icon: Icon,
  count = 0,
  badgeClass = "bg-primary-600",
}: NavIconLinkProps) => (
  <Link
    href={href}
    title={label}
    className="group relative rounded-full p-2.5 transition-colors hover:bg-gray-100"
  >
    <Icon className="text-xl text-gray-500 transition-colors group-hover:text-primary-600" />
    {count > 0 && (
      <span
        className={`absolute top-0.5 right-0.5 flex size-[18px] items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white ${badgeClass}`}
      >
        {count > 99 ? "99+" : count}
      </span>
    )}
    <span className="sr-only">{label}</span>
  </Link>
);
