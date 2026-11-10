import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

interface CartItemImageProps {
  href: string;
  src: string;
  title: string;
  inStock: boolean;
}

// product image with stock badge
export const CartItemImage = ({
  href,
  src,
  title,
  inStock,
}: CartItemImageProps) => (
  <Link href={href} className="group relative shrink-0">
    <div className="h-28 w-28 overflow-hidden rounded-xl border border-gray-100 bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 sm:h-32 sm:w-32">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={title}
          fill
          sizes="128px"
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>

    {inStock ? (
      <div className="absolute -right-1 -bottom-1 flex items-center gap-1 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">
        <FaCheck className="text-[8px]" />
        In Stock
      </div>
    ) : (
      <div className="absolute -right-1 -bottom-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white">
        Out of Stock
      </div>
    )}
  </Link>
);
