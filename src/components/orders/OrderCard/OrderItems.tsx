import Image from "next/image";
import Link from "next/link";
import { FaReceipt } from "react-icons/fa6";

import type { Order } from "@/interfaces/order.interface";
import { getOrderLines, money } from "@/lib/order";

// order products list
export const OrderItems = ({ order }: { order: Order }) => (
  <div className="p-5 sm:p-6">
    <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary-100">
        <FaReceipt className="text-xs text-primary-600" />
      </span>
      Order Items
    </h4>

    <div className="space-y-3">
      {getOrderLines(order).map(({ _id, count, price, product }) => (
        <div
          key={_id}
          className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4"
        >
          {/* Image */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-50">
            {product && (
              <Image
                src={product.imageCover}
                alt={product.title}
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            )}
          </div>

          {/* Name and qty */}
          <div className="min-w-0 flex-1">
            {product ? (
              <Link
                href={`/products/${product._id}`}
                className="block truncate font-medium text-gray-900 hover:text-primary-600"
              >
                {product.title}
              </Link>
            ) : (
              <p className="text-gray-400">Product unavailable</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              <span className="font-medium text-gray-700">{count}</span> ×{" "}
              {money(price)} EGP
            </p>
          </div>

          {/* Line total */}
          <div className="shrink-0 text-right">
            <p className="text-lg font-bold text-gray-900">
              {money(price * count)}
            </p>
            <p className="text-xs text-gray-400">EGP</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
