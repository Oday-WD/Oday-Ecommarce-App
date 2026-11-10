import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

// breadcrumb, title and items count
export const CartHeader = ({ itemCount }: { itemCount: number }) => (
  <div className="mb-8">
    <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
      <Link href="/" className="transition hover:text-primary-600">
        Home
      </Link>
      <span>/</span>
      <span className="font-medium text-gray-900">Shopping Cart</span>
    </nav>

    <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-900">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-primary-600 to-primary-700 text-white">
        <FaCartShopping />
      </span>
      Shopping Cart
    </h1>
    <p className="mt-2 text-gray-500">
      You have{" "}
      <span className="font-semibold text-primary-600">
        {itemCount} item{itemCount !== 1 ? "s" : ""}
      </span>{" "}
      in your cart
    </p>
  </div>
);
