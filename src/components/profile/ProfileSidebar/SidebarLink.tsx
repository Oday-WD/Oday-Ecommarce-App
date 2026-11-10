import Link from "next/link";
import type { IconType } from "react-icons";
import { FaChevronRight } from "react-icons/fa6";

interface SidebarLinkProps {
  label: string;
  href: string;
  icon: IconType;
  active: boolean;
}

// one sidebar row, highlighted when active
export const SidebarLink = ({
  label,
  href,
  icon: Icon,
  active,
}: SidebarLinkProps) => (
  <li>
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
        active
          ? "bg-primary-50 text-primary-700"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
          active
            ? "bg-primary-500 text-white"
            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
        }`}
      >
        <Icon className="text-sm" />
      </div>
      <span className="flex-1 font-medium">{label}</span>
      <FaChevronRight
        className={`text-xs transition-transform ${
          active ? "text-primary-500" : "text-gray-400"
        }`}
      />
    </Link>
  </li>
);
