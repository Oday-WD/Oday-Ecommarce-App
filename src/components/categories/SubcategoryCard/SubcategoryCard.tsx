import Link from "next/link";
import { FaArrowRight, FaFolderOpen } from "react-icons/fa6";

import type { Subcategory } from "@/interfaces/subcategory.interface";

// subcategory card linking to its products
export const SubcategoryCard = ({
  subcategory,
}: {
  subcategory: Subcategory;
}) => {
  const { _id, name } = subcategory;

  return (
    <Link
      href={`/products?subcategory=${_id}`}
      className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-primary-100">
        <FaFolderOpen className="text-2xl text-primary-600" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-600">
        {name}
      </h3>
      <div className="flex items-center gap-2 text-sm text-primary-600 opacity-0 transition-opacity group-hover:opacity-100">
        <span>Browse Products</span>
        <FaArrowRight className="text-xs" />
      </div>
    </Link>
  );
};