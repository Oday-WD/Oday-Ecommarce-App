import { FaGift, FaTruck } from "react-icons/fa6";

// store promises on the left
export const TopBarPromo = () => (
  <div className="flex items-center gap-6 text-gray-500">
    <span className="flex items-center gap-2">
      <FaTruck className="text-xs text-primary-600" />
      <span>Free Shipping on Orders 500 EGP</span>
    </span>
    <span className="flex items-center gap-2">
      <FaGift className="text-xs text-primary-600" />
      <span>New Arrivals Daily</span>
    </span>
  </div>
);