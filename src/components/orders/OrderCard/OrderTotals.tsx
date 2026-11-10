import type { Order } from "@/interfaces/order.interface";
import { money, type OrderStatus } from "@/lib/order";

interface OrderTotalsProps {
  order: Order;
  status: OrderStatus;
}

// price breakdown card
export const OrderTotals = ({ order, status }: OrderTotalsProps) => {
  const { cartItems, taxPrice, shippingPrice, totalOrderPrice } = order;

  const StatusIcon = status.icon;
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  return (
    <div className={`rounded-xl border p-4 ${status.panel}`}>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-lg ${status.iconBox}`}
        >
          <StatusIcon className="text-xs text-white" />
        </span>
        Order Summary
      </h4>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">{money(subtotal)} EGP</span>
        </div>
        {taxPrice > 0 && (
          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span className="font-medium">{money(taxPrice)} EGP</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium">
            {shippingPrice > 0 ? `${money(shippingPrice)} EGP` : "Free"}
          </span>
        </div>
        <hr className="my-2 border-gray-200/50" />
        <div className="flex justify-between pt-1">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="text-lg font-bold text-gray-900">
            {money(totalOrderPrice)} EGP
          </span>
        </div>
      </div>
    </div>
  );
};