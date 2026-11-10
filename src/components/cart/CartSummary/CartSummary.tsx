import Link from "next/link";
import {
  FaBagShopping,
  FaLock,
  FaShieldHalved,
  FaTruck,
} from "react-icons/fa6";
import { PromoCode } from "@/components/cart/PromoCode/PromoCode";
import { CardHeader } from "@/components/shared/CardHeader/CardHeader";

interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
  discount: number;
}

export const CartSummary = ({
  subtotal,
  itemCount,
  discount,
}: CartSummaryProps) => {
  const total = subtotal - discount;

  return (
    <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <CardHeader
        icon={<FaBagShopping />}
        title="Order Summary"
        subtitle={`${itemCount} item${itemCount !== 1 ? "s" : ""} in your cart`}
      />

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-medium text-gray-900">{subtotal} EGP</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span className="font-medium text-green-600">
                -{discount} EGP
              </span>
            </div>
          )}

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>

          <div className="mt-3 border-t border-dashed border-gray-200 pt-3">
            <div className="flex items-baseline justify-between">
              <span className="font-semibold text-gray-900">Total</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">
                  {total}
                </span>
                <span className="ml-1 text-sm text-gray-500">EGP</span>
              </div>
            </div>
          </div>
        </div>

        <PromoCode />

        <Link
          href="/checkout"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-primary-600 to-primary-700 px-6 py-4 font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:from-primary-700 hover:to-primary-800 active:scale-[0.98]"
        >
          <FaLock />
          <span>Secure Checkout</span>
        </Link>

        <div className="flex items-center justify-center gap-4 py-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <FaShieldHalved className="text-green-500" />
            <span>Secure Payment</span>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <FaTruck className="text-blue-500" />
            <span>Fast Delivery</span>
          </div>
        </div>

        <Link
          href="/"
          className="block py-2 text-center text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
};
