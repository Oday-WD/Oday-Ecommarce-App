import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

// one links column
export const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="lg:col-span-2">
    <h3 className="mb-5 text-lg font-semibold">{title}</h3>
    <ul className="space-y-3">
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className="text-sm text-gray-400 transition-colors hover:text-primary-400"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);