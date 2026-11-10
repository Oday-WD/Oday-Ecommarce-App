import Link from "next/link";

import type { Category } from "@/interfaces/category.interface";
import { CategoriesMenu } from "./CategoriesMenu";

const navLink =
  "font-medium text-gray-700 transition-colors hover:text-primary-600";

// desktop main links
export const NavLinks = ({ categories }: { categories: Category[] }) => (
  <nav className="hidden items-center gap-6 xl:flex">
    <Link href="/" className={navLink}>
      Home
    </Link>
    <Link href="/products" className={navLink}>
      Shop
    </Link>
    <CategoriesMenu categories={categories} />
    <Link href="/brands" className={navLink}>
      Brands
    </Link>
  </nav>
);