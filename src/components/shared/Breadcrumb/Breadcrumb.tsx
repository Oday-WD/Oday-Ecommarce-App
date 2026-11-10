import Link from "next/link";
import { FaChevronRight, FaHouse } from "react-icons/fa6";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// light breadcrumb for pages without a header banner
export const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="py-4">
    <div className="container mx-auto px-4">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {/* Home */}
        <li className="flex items-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
          >
            <FaHouse className="text-xs" />
            Home
          </Link>
          <FaChevronRight className="text-gray-400 text-xs mx-2" />
        </li>

        {/* Items (the last one is the current page) */}
        {items.map(({ label, href }, index) => {
          const isLast = index === items.length - 1;

          return isLast || !href ? (
            <li
              key={`${label}-${index}`}
              aria-current={isLast ? "page" : undefined}
              className="text-gray-900 font-medium truncate max-w-xs"
            >
              {label}
            </li>
          ) : (
            <li key={`${label}-${index}`} className="flex items-center">
              <Link
                href={href}
                className="text-gray-500 hover:text-primary-600 transition"
              >
                {label}
              </Link>
              <FaChevronRight className="text-gray-400 text-xs mx-2" />
            </li>
          );
        })}
      </ol>
    </div>
  </nav>
);