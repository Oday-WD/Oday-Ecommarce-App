import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/interfaces/category.interface";

// round category tile (home page)
export const CategoryCardCompact = ({ category }: { category: Category }) => {
  const { _id, name, image } = category;

  return (
    <Link
      href={`/categories/${_id}`}
      className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
    >
      <div className="h-20 w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-medium">{name}</h3>
    </Link>
  );
};
