import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

// breadcrumb, title and saved count
export const WishlistHeader = ({ count }: { count: number }) => (
  <div className="border-b border-gray-100 bg-white">
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="transition-colors hover:text-primary-600">
          Home
        </Link>
        <span>/</span>
        <span className="font-medium text-gray-900">Wishlist</span>
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
          <FaHeart className="text-xl text-red-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-sm text-gray-500">
            {count} item{count !== 1 ? "s" : ""} saved
          </p>
        </div>
      </div>
    </div>
  </div>
);
