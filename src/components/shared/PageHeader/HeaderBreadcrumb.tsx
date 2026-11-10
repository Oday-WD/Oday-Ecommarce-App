import { Fragment } from "react";
import Link from "next/link";
import type { BreadcrumbItem } from "@/components/shared/Breadcrumb/Breadcrumb";

// white-on-gradient breadcrumb used inside the page header
export const HeaderBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav
    aria-label="Breadcrumb"
    className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70"
  >
    <Link href="/" className="transition-colors hover:text-white">
      Home
    </Link>
    {items.map(({ label, href }, index) => (
      <Fragment key={`${label}-${index}`}>
        <span className="text-white/40">/</span>
        {href ? (
          <Link href={href} className="transition-colors hover:text-white">
            {label}
          </Link>
        ) : (
          <span className="font-medium text-white">{label}</span>
        )}
      </Fragment>
    ))}
  </nav>
);
