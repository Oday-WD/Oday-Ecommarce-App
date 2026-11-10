"use client";

import { useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaSpinner, FaTrash } from "react-icons/fa6";
import { toast } from "sonner";
import { removeFromWishlistAction } from "@/actions/wishlist.actions";
import { useAddToCart } from "@/hooks/useAddToCart";
import type { Product } from "@/interfaces/product.interface";
import { readWishlistIds, setWishlistIds } from "@/lib/wishlist-store";

export const WishlistRow = ({ product }: { product: Product }) => {
  const {
    _id,
    id,
    title,
    imageCover,
    category,
    price,
    priceAfterDiscount,
    quantity,
  } = product;

  const [removing, startTransition] = useTransition();
  const { addToCart, pending } = useAddToCart();

  const href = `/products/${id}`;
  const hasDiscount =
    priceAfterDiscount !== undefined && priceAfterDiscount < price;
  const inStock = quantity > 0;

  const remove = () =>
    startTransition(async () => {
      const result = await removeFromWishlistAction(_id);

      if (!result.ok) {
        toast.error(result.message);
        return;
      }

      setWishlistIds(readWishlistIds().filter((item) => item !== _id));
      toast.success(result.message);
    });

  return (
    <div
      className={`grid grid-cols-1 items-center gap-4 p-4 transition-colors hover:bg-gray-50/50 md:grid-cols-12 md:px-6 md:py-5 ${
        removing ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-4 md:col-span-6">
        <Link
          href={href}
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
        >
          <Image
            src={imageCover}
            alt={title}
            fill
            sizes="80px"
            className="object-contain p-2"
          />
        </Link>
        <div className="min-w-0">
          <Link
            href={href}
            className="line-clamp-2 font-medium text-gray-900 transition-colors hover:text-primary-600"
          >
            {title}
          </Link>
          <p className="mt-1 text-sm text-gray-400">{category.name}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:col-span-2 md:justify-center">
        <span className="text-sm text-gray-500 md:hidden">Price:</span>
        <div className="text-right md:text-center">
          <div className="font-semibold text-gray-900">
            {hasDiscount ? priceAfterDiscount : price} EGP
          </div>
          {hasDiscount && (
            <div className="text-sm text-gray-400 line-through">
              {price} EGP
            </div>
          )}
        </div>
      </div>

      <div className="flex md:col-span-2 md:justify-center">
        <span className="mr-2 text-sm text-gray-500 md:hidden">Status:</span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            inStock ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              inStock ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="flex items-center gap-2 md:col-span-2 md:justify-center">
        <button
          type="button"
          disabled={!inStock || pending}
          onClick={() => addToCart(_id)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50 md:flex-none"
        >
          {pending ? (
            <FaSpinner className="animate-spin text-xs" />
          ) : (
            <FaCartShopping className="text-xs" />
          )}
          <span className="md:hidden lg:inline">Add to Cart</span>
        </button>

        <button
          type="button"
          title="Remove"
          aria-label="Remove from wishlist"
          disabled={removing}
          onClick={remove}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-500 disabled:opacity-50"
        >
          {removing ? (
            <FaSpinner className="animate-spin text-sm" />
          ) : (
            <FaTrash className="text-sm" />
          )}
        </button>
      </div>
    </div>
  );
};