import Link from "next/link";
import { FaArrowRight, FaRegHeart } from "react-icons/fa6";

// shown when nothing is saved
export const EmptyWishlist = () => (
  <div className="min-h-screen bg-gray-50/50">
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-sm text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
          <FaRegHeart className="text-3xl text-gray-400" />
        </div>
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Your wishlist is empty
        </h2>
        <p className="mb-6 text-sm text-gray-500">
          Browse products and save your favorites here.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Browse Products
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  </div>
);
