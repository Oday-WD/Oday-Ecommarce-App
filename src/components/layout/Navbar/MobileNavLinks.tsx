import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Brands", href: "/brands" },
];

// main pages
export const MobileNavLinks = () => (
  <nav className="space-y-1 p-4">
    {links.map(({ label, href }) => (
      <SheetClose
        key={href}
        render={
          <Link
            href={href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
          />
        }
      >
        {label}
      </SheetClose>
    ))}
  </nav>
);
