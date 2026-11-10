import { DiscountBadge } from "@/components/products/DiscountBadge/DiscountBadge";
import { calcDiscount, getUnitPrice } from "@/lib/price";

interface ProductPriceProps {
  price: number;
  priceAfterDiscount?: number;
}

// current price, old price and discount
export const ProductPrice = ({
  price,
  priceAfterDiscount,
}: ProductPriceProps) => {
  const discount = calcDiscount(price, priceAfterDiscount);
  const hasDiscount = discount > 0;

  return (
    <div className="flex items-center flex-wrap gap-3 mb-6">
      <span
        className={`text-3xl font-bold ${hasDiscount ? "text-primary-600" : "text-gray-900"}`}
      >
        {getUnitPrice(price, priceAfterDiscount)} EGP
      </span>
      {hasDiscount && (
        <>
          <span className="text-lg text-gray-500 line-through">
            {price} EGP
          </span>
          <DiscountBadge percent={discount} />
        </>
      )}
    </div>
  );
};