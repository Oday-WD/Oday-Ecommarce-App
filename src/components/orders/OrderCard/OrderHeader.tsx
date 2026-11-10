import Image from "next/image";
import {
  FaBox,
  FaCalendarDays,
  FaChevronDown,
  FaCreditCard,
  FaHashtag,
  FaLocationDot,
  FaMoneyBill,
} from "react-icons/fa6";
import type { Order } from "@/interfaces/order.interface";
import {
  formatOrderDate,
  getOrderLines,
  money,
  type OrderStatus,
} from "@/lib/order";

interface OrderHeaderProps {
  order: Order;
  status: OrderStatus;
  open: boolean;
  onToggle: () => void;
}

// order summary row
export const OrderHeader = ({
  order,
  status,
  open,
  onToggle,
}: OrderHeaderProps) => {
  const {
    id,
    createdAt,
    cartItems,
    shippingAddress,
    paymentMethodType,
    totalOrderPrice,
  } = order;

  const StatusIcon = status.icon;
  const first = getOrderLines(order).find((line) => line.product)?.product;
  const itemCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const isCard = paymentMethodType === "card";

  return (
    <div className="p-5 sm:p-6">
      <div className="flex gap-5">
        {/* Thumbnail */}
        <div className="relative shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-gray-50 to-white sm:h-28 sm:w-28">
            {first && (
              <Image
                src={first.imageCover}
                alt={first.title}
                fill
                sizes="112px"
                className="object-contain p-2.5"
              />
            )}
          </div>
          {cartItems.length > 1 && (
            <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white shadow-lg">
              +{cartItems.length - 1}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          {/* Status and id */}
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <div
                className={`mb-2 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 ${status.badge}`}
              >
                <StatusIcon className={`text-xs ${status.text}`} />
                <span className={`text-xs font-semibold ${status.text}`}>
                  {status.label}
                </span>
              </div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <FaHashtag className="text-xs text-gray-400" />
                {id}
              </h3>
            </div>

            {/* Payment icon */}
            <div
              title={isCard ? "Paid online" : "Cash on delivery"}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                isCard ? "bg-purple-100" : "bg-gray-100"
              }`}
            >
              {isCard ? (
                <FaCreditCard className="text-purple-600" />
              ) : (
                <FaMoneyBill className="text-gray-600" />
              )}
            </div>
          </div>

          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <FaCalendarDays className="text-xs text-gray-400" />
              {formatOrderDate(createdAt)}
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <FaBox className="text-xs text-gray-400" />
              {itemCount} item{itemCount !== 1 ? "s" : ""}
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <FaLocationDot className="text-xs text-gray-400" />
              {shippingAddress.city}
            </span>
          </div>

          {/* Total and toggle */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {money(totalOrderPrice)}
              </span>
              <span className="ml-1 text-sm font-medium text-gray-400">
                EGP
              </span>
            </div>

            <button
              type="button"
              aria-expanded={open}
              onClick={onToggle}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                open
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {open ? "Hide" : "Details"}
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
