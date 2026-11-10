import Link from "next/link";
import { FaArrowRight, FaBoxOpen } from "react-icons/fa6";
import { getCategories } from "@/services/category.service";

export const EmptyCart = async () => {
  const categories = await getCategories()
    .then((res) => res.data.slice(0, 4))
    .catch(() => []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="relative mb-8">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-gray-100 to-gray-50">
            <FaBoxOpen className="text-5xl text-gray-300" />
          </div>
          <div className="absolute -bottom-2 left-1/2 h-4 w-24 -translate-x-1/2 rounded-full bg-gray-100 blur-md" />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          Your cart is empty
        </h2>
        <p className="mb-8 leading-relaxed text-gray-500">
          Looks like you haven&apos;t added anything to your cart yet.
          <br />
          Start exploring our products!
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary-600 to-primary-700 px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:from-primary-700 hover:to-primary-800 active:scale-[0.98]"
        >
          Start Shopping
          <FaArrowRight className="text-sm" />
        </Link>

        {categories.length > 0 && (
          <div className="mt-12 border-t border-gray-100 pt-8">
            <p className="mb-4 text-sm text-gray-400">Popular Categories</p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(({ _id, name }) => (
                <Link
                  key={_id}
                  href={`/products?category=${_id}`}
                  className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};