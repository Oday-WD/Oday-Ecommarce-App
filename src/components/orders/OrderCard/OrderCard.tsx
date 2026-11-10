"use client";

import { useState } from "react";
import type { Order } from "@/interfaces/order.interface";
import { getOrderStatus } from "@/lib/order";
import { OrderAddress } from "./OrderAddress";
import { OrderHeader } from "./OrderHeader";
import { OrderItems } from "./OrderItems";
import { OrderTotals } from "./OrderTotals";

export const OrderCard = ({ order }: { order: Order }) => {
  const [open, setOpen] = useState(false);
  const status = getOrderStatus(order);

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        open
          ? "border-primary-200 shadow-lg shadow-primary-100/50"
          : "border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md"
      }`}
    >
      {/* Summary */}
      <OrderHeader
        order={order}
        status={status}
        open={open}
        onToggle={() => setOpen((value) => !value)}
      />

      {/* Details */}
      {open && (
        <div className="border-t border-gray-100 bg-gray-50/50">
          <OrderItems order={order} />
          <div className="grid gap-4 px-5 pb-5 sm:grid-cols-2 sm:px-6 sm:pb-6">
            <OrderAddress address={order.shippingAddress} />
            <OrderTotals order={order} status={status} />
          </div>
        </div>
      )}
    </div>
  );
};
