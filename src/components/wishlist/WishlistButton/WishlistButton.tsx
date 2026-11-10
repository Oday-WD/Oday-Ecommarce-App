"use client";

import { FaHeart, FaRegHeart, FaSpinner } from "react-icons/fa6";
import { useToggleWishlist } from "@/hooks/useToggleWishlist";

interface WishlistButtonProps {
  productId: string;
  variant?: "icon" | "full";
}

export const WishlistButton = ({
  productId,
  variant = "icon",
}: WishlistButtonProps) => {
  const { active, pending, toggle } = useToggleWishlist(productId);
  const Icon = pending ? FaSpinner : active ? FaHeart : FaRegHeart;
  const label = active ? "Remove from wishlist" : "Add to wishlist";

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 font-medium transition disabled:opacity-70 ${
          active
            ? "border-red-200 bg-red-50 text-red-500"
            : "border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600"
        }`}
      >
        <Icon className={pending ? "animate-spin" : ""} />
        {active ? "In Wishlist" : "Add to Wishlist"}
      </button>
    );
  }

  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      onClick={toggle}
      disabled={pending}
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition active:scale-90 disabled:opacity-70 ${
        active ? "text-red-500" : "text-gray-600 hover:text-red-500"
      }`}
    >
      <Icon className={pending ? "animate-spin" : ""} />
    </button>
  );
};