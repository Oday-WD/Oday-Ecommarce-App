import { FaLocationDot, FaPhone } from "react-icons/fa6";
import type { ShippingAddress } from "@/interfaces/order.interface";

// delivery address card
export const OrderAddress = ({ address }: { address: ShippingAddress }) => (
  <div className="rounded-xl border border-gray-100 bg-white p-4">
    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100">
        <FaLocationDot className="text-xs text-blue-600" />
      </span>
      Delivery Address
    </h4>
    <div className="space-y-2">
      <p className="font-medium text-gray-900">{address.city}</p>
      <p className="text-sm leading-relaxed text-gray-600">{address.details}</p>
      <p className="flex items-center gap-2 pt-1 text-sm text-gray-600">
        <FaPhone className="text-xs text-gray-400" />
        {address.phone}
      </p>
    </div>
  </div>
);