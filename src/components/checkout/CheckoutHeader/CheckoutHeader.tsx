import Link from "next/link";
import { FaArrowLeft, FaReceipt } from "react-icons/fa6";

// breadcrumb, title and back link
export const CheckoutHeader = () => (
  <div className="mb-8">
    <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
      <Link href="/" className="transition hover:text-primary-600">
        Home
      </Link>
      <span className="text-gray-300">/</span>
      <Link href="/cart" className="transition hover:text-primary-600">
        Cart
      </Link>
      <span className="text-gray-300">/</span>
      <span className="font-medium text-gray-900">Checkout</span>
    </nav>

    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-900">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/20">
            <FaReceipt />
          </span>
          Complete Your Order
        </h1>
        <p className="mt-2 text-gray-500">
          Review your items and complete your purchase
        </p>
      </div>

      <Link
        href="/cart"
        className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-primary-600 transition-all hover:bg-primary-50 hover:text-primary-700"
      >
        <FaArrowLeft />
        Back to Cart
      </Link>
    </div>
  </div>
);
