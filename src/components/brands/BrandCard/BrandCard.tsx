import Image from "next/image";
import Link from "next/link";
import { HoverHint } from "@/components/shared/HoverHint/HoverHint";
import type { Brand } from "@/interfaces/brand.interface";

// brand tile linking to its details page
export const BrandCard = ({ brand }: { brand: Brand }) => {
  const { _id, name, image } = brand;

  return (
    <Link
      href={`/products?brand=${_id}`}
      className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-5"
    >
      <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="truncate text-center text-sm font-semibold text-gray-900 transition-colors group-hover:text-violet-600">
        {name}
      </h3>
      <HoverHint label="View Products" className="mt-1.5 text-violet-600" />
    </Link>
  );
};