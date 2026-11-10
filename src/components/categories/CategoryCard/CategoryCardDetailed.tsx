import Image from "next/image";
import Link from "next/link";
import { HoverHint } from "@/components/shared/HoverHint/HoverHint";
import type { Category } from "@/interfaces/category.interface";

// large category card (categories page)
export const CategoryCardDetailed = ({ category }: { category: Category }) => {
  const { _id, name, image } = category;

  return (
    <Link
      href={`/categories/${_id}`}
      className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="font-bold text-gray-900 text-center group-hover:text-primary-600 transition-colors">
        {name}
      </h3>
      <HoverHint label="View Subcategories" className="mt-2 text-primary-600" />
    </Link>
  );
};
