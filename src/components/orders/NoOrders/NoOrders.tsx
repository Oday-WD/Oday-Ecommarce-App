import Link from "next/link";
import { FaBagShopping, FaBoxOpen } from "react-icons/fa6";

// shown when the user has no orders yet
export const NoOrders = () => (
  <div className="flex min-h-[60vh] items-center justify-center px-4">
    <div className="max-w-sm text-center">
      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-100">
        <FaBoxOpen className="text-4xl text-gray-400" />
      </div>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">No orders yet</h2>
      <p className="mb-8 text-sm leading-relaxed text-gray-500">
        When you place orders, they&apos;ll appear here
        <br />
        so you can track them.
      </p>
      <Link
        href="/"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-700 sm:w-auto"
      >
        <FaBagShopping />
        Start Shopping
      </Link>
    </div>
  </div>
);
