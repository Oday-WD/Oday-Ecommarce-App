"use server";

import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/interfaces/auth.interface";
import { withToken } from "@/lib/run-action";
import { addToWishlist, removeFromWishlist } from "@/services/wishlist.service";

// refreshes the wishlist page after each change
const run = (task: (token: string) => Promise<string>) =>
  withToken(task, () => revalidatePath("/wishlist"));

export async function addToWishlistAction(
  productId: string,
): Promise<ActionResult> {
  return run(async (token) => {
    await addToWishlist(token, productId);
    return "Added to your wishlist";
  });
}

export async function removeFromWishlistAction(
  productId: string,
): Promise<ActionResult> {
  return run(async (token) => {
    await removeFromWishlist(token, productId);
    return "Removed from your wishlist";
  });
}