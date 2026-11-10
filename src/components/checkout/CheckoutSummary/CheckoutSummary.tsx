import { FaBagShopping } from "react-icons/fa6";
import { CardHeader } from "@/components/shared/CardHeader/CardHeader";
import type { PopulatedCartItem } from "@/interfaces/cart.interface";
import { SubmitOrderButton } from "./SubmitOrderButton";
import { SummaryItem } from "./SummaryItem";
import { SummaryTotals } from "./SummaryTotals";
import { TrustBadges } from "./TrustBadges";

interface CheckoutSummaryProps {
  items: PopulatedCartItem[];
  subtotal: number;
  discount: number;
  total: number;
  method: "cash" | "card";
  submitting: boolean;
}

export const CheckoutSummary = ({
  items,
  subtotal,
  discount,
  total,
  method,
  submitting,
}: CheckoutSummaryProps) => (
  <div className="sticky top-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
    <CardHeader
      icon={<FaBagShopping />}
      title="Order Summary"
      subtitle={`${items.length} item${items.length !== 1 ? "s" : ""}`}
    />

    <div className="p-5">
      {/* Items */}
      <ul className="mb-5 max-h-56 space-y-3 overflow-y-auto pr-1">
        {items.map((item) => (
          <SummaryItem key={item.product._id} {...item} />
        ))}
      </ul>

      <hr className="my-4 border-gray-100" />

      {/* Totals and submit */}
      <SummaryTotals subtotal={subtotal} discount={discount} total={total} />
      <SubmitOrderButton method={method} submitting={submitting} />
      <TrustBadges />
    </div>
  </div>
);