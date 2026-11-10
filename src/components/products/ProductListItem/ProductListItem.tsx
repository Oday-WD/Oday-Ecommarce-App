import Image from "next/image";
import Link from "next/link";
import { DiscountBadge } from "@/components/products/DiscountBadge/DiscountBadge";
import { PriceTag } from "@/components/products/PriceTag/PriceTag";
import { ProductRating } from "@/components/products/ProductRating/ProductRating";
import type { Product } from "@/interfaces/product.interface";
import { calcDiscount } from "@/lib/price";

// horizontal product row used by the search list view
export const ProductListItem = ({ product }: { product: Product }) => {
  const {
    id,
    title,
    price,
    priceAfterDiscount,
    imageCover,
    category,
    ratingsAverage,
    ratingsQuantity,
  } = product;

  const discount = calcDiscount(price, priceAfterDiscount);

  return (
    <Link
      href={`/products/${id}`}
      className="flex gap-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
    >
      {/* Image */}
      <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40">
        <Image
          src={imageCover}
          alt={title}
          fill
          sizes="160px"
          className="object-contain"
        />
        {discount > 0 && (
          <DiscountBadge percent={discount} className="absolute top-0 left-0" />
        )}
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="mb-1 text-xs text-gray-500">{category.name}</div>
          <h3 className="mb-2 line-clamp-2 font-medium">{title}</h3>
          <ProductRating
            average={ratingsAverage}
            count={ratingsQuantity}
            className="items-center"
          />
        </div>

        <div>
          <PriceTag price={price} priceAfterDiscount={priceAfterDiscount} />
        </div>
      </div>
    </Link>
  );
};