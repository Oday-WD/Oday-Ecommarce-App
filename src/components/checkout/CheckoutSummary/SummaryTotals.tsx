import { FaTruck } from "react-icons/fa6";

interface SummaryTotalsProps {
  subtotal: number;
  discount: number;
  total: number;
}

// subtotal, discount, shipping and total
export const SummaryTotals = ({
  subtotal,
  discount,
  total,
}: SummaryTotalsProps) => (
  <div className="space-y-3">
    <div className="flex justify-between text-gray-600">
      <span>Subtotal</span>
      <span className="font-medium">{subtotal} EGP</span>
    </div>

    {discount > 0 && (
      <div className="flex justify-between text-gray-600">
        <span>Discount</span>
        <span className="font-medium text-green-600">-{discount} EGP</span>
      </div>
    )}

    <div className="flex justify-between text-gray-600">
      <span className="flex items-center gap-2">
        <FaTruck className="text-gray-400" />
        Shipping
      </span>
      <span className="font-semibold text-green-600">FREE</span>
    </div>

    <hr className="border-gray-100" />

    <div className="flex items-center justify-between">
      <span className="text-lg font-bold text-gray-900">Total</span>
      <div className="text-right">
        <span className="text-2xl font-bold text-primary-600">{total}</span>
        <span className="ml-1 text-sm text-gray-500">EGP</span>
      </div>
    </div>
  </div>
);
