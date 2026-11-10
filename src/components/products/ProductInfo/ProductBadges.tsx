import Link from "next/link";
import type { Product } from "@/interfaces/product.interface";

type ProductBadgesProps = Pick<Product, "category" | "brand">;

// category and brand links
export const ProductBadges = ({ category, brand }: ProductBadgesProps) => (
  <div className="flex flex-wrap gap-2 mb-4">
    <Link
      href={`/categories/${category._id}`}
      className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition"
    >
      {category.name}
    </Link>
    <Link
      href={`/brands/${brand._id}`}
      className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full hover:bg-gray-200 transition"
    >
      {brand.name}
    </Link>
  </div>
);