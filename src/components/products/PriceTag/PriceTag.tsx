import { calcDiscount } from "@/lib/price";

interface PriceTagProps {
  price: number;
  priceAfterDiscount?: number;
}

// current price, with the old one crossed out when discounted
export const PriceTag = ({ price, priceAfterDiscount }: PriceTagProps) => {
  if (calcDiscount(price, priceAfterDiscount) === 0) {
    return <span className="text-lg font-bold text-gray-800">{price} EGP</span>;
  }

  return (
    <>
      <span className="text-lg font-bold text-primary-600">
        {priceAfterDiscount} EGP
      </span>
      <span className="ml-2 text-sm text-gray-500 line-through">
        {price} EGP
      </span>
    </>
  );
};
