"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  addToWishlistAction,
  removeFromWishlistAction,
} from "@/actions/wishlist.actions";
import {
  readWishlistIds,
  setWishlistIds,
  useWishlistIds,
} from "@/lib/wishlist-store";

export function useToggleWishlist(productId: string) {
  const router = useRouter();
  const ids = useWishlistIds();
  const [pending, startTransition] = useTransition();
  const active = ids.includes(productId);

  const toggle = () =>
    startTransition(async () => {
      const previous = readWishlistIds();

      setWishlistIds(
        active
          ? previous.filter((id) => id !== productId)
          : [...previous, productId],
      );

      const result = await (active
        ? removeFromWishlistAction(productId)
        : addToWishlistAction(productId));

      if (result.ok) {
        toast.success(result.message);
        return;
      }

      setWishlistIds(previous);
      toast.error(result.message);
      if (result.unauthorized) router.push("/login");
    });

  return { active, pending, toggle };
}