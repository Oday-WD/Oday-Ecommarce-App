import Image from "next/image";
import type { PopulatedCartItem } from "@/interfaces/cart.interface";

// one product row
export const SummaryItem = ({ product, count, price }: PopulatedCartItem) => (
  <li className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 transition-colors hover:bg-gray-100">
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white p-1">
      <Image
        src={product.imageCover}
        alt={product.title}
        fill
        sizes="56px"
        className="object-contain p-1"
      />
    </div>
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-medium text-gray-900">
        {product.title}
      </p>
      <p className="mt-0.5 text-xs text-gray-500">
        {count} × {price} EGP
      </p>
    </div>
    <p className="shrink-0 text-sm font-bold text-gray-900">{price * count}</p>
  </li>
);