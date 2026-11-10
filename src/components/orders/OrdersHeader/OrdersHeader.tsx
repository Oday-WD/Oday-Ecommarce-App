import Link from "next/link";
import { FaBagShopping, FaBox } from "react-icons/fa6";

// breadcrumb, title and orders count
export const OrdersHeader = ({ count }: { count: number }) => (
  <div className="mb-8">
    <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
      <Link href="/" className="transition hover:text-primary-600">
        Home
      </Link>
      <span className="text-gray-300">/</span>
      <span className="font-medium text-gray-900">My Orders</span>
    </nav>

    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25">
          <FaBox className="text-2xl text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            My Orders
          </h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Track and manage your {count} order{count !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="flex items-center gap-2 self-start rounded-xl px-4 py-2 text-sm font-medium text-primary-600 transition-all hover:bg-primary-50 hover:text-primary-700 sm:self-auto"
      >
        <FaBagShopping className="text-xs" />
        Continue Shopping
      </Link>
    </div>
  </div>
);