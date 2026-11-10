import { FaBolt, FaCartShopping } from "react-icons/fa6";

interface ProductActionsProps {
  disabled: boolean;
  onAdd: () => void;
  onBuy: () => void;
}

// add to cart and buy now
export const ProductActions = ({
  disabled,
  onAdd,
  onBuy,
}: ProductActionsProps) => (
  <div className="flex flex-col sm:flex-row gap-3 mb-6">
    <button
      type="button"
      disabled={disabled}
      onClick={onAdd}
      className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium bg-primary-600 hover:bg-primary-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 disabled:opacity-60 disabled:pointer-events-none"
    >
      <FaCartShopping />
      Add to Cart
    </button>
    <button
      type="button"
      disabled={disabled}
      onClick={onBuy}
      className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
    >
      <FaBolt />
      Buy Now
    </button>
  </div>
);
