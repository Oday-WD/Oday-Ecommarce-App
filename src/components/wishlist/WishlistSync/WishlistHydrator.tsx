"use client";

import { useEffect } from "react";
import { setWishlistIds } from "@/lib/wishlist-store";

export const WishlistHydrator = ({ ids }: { ids: string[] }) => {
  const key = ids.join(",");

  useEffect(() => {
    setWishlistIds(key ? key.split(",") : []);
  }, [key]);

  return null;
};