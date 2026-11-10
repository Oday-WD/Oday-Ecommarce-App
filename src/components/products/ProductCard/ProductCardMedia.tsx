import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa6";
import { DiscountBadge } from "@/components/products/DiscountBadge/DiscountBadge";
import { WishlistButton } from "@/components/wishlist/WishlistButton/WishlistButton";
import type { Product } from "@/interfaces/product.interface";
import { calcDiscount } from "@/lib/price";

// image with discount badge and quick actions
export const ProductCardMedia = ({ product }: { product: Product }) => {
  const { _id, id, title, imageCover, price, priceAfterDiscount } = product;
  const discount = calcDiscount(price, priceAfterDiscount);

  return (
    <div className="relative h-60 bg-white">
      <Image
        src={imageCover}
        alt={title}
        fill
        sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-contain"
      />

      {/* Discount */}
      {discount > 0 && (
        <div className="absolute top-3 left-3">
          <DiscountBadge percent={discount} />
        </div>
      )}

      {/* Quick actions */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2">
        <WishlistButton productId={_id} />
        <Link
          href={`/products/${id}`}
          aria-label="View product"
          className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
        >
          <FaRegEye />
        </Link>
      </div>
    </div>
  );
};
