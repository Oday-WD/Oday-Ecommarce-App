"use client";

import { FaRegHeart } from "react-icons/fa6";
import { useWishlistIds } from "@/lib/wishlist-store";
import { NavIconLink } from "./NavIconLink";

// wishlist icon with saved count
export const WishlistLink = () => {
  const count = useWishlistIds().length;

  return (
    <NavIconLink
      href="/wishlist"
      label="Wishlist"
      icon={FaRegHeart}
      count={count}
      badgeClass="bg-red-500"
    />
  );
};