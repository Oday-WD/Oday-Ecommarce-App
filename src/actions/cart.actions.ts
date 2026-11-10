"use server";

import { revalidatePath } from "next/cache";

import type { ActionResult } from "@/interfaces/auth.interface";
import { getProductId } from "@/lib/cart";
import { withToken } from "@/lib/run-action";
import {
  addToCart,
  applyCoupon,
  clearCart,
  getCart,
  removeCartItem,
  updateCartItem,
} from "@/services/cart.service";

// refreshes the current page and the navbar badge after each change
const run = (task: (token: string) => Promise<string>) =>
  withToken(task, () => revalidatePath("/", "layout"));

export async function addToCartAction(
  productId: string,
  quantity = 1,
): Promise<ActionResult> {
  const qty = Math.max(1, Math.floor(quantity));

  return run(async (token) => {
    const added = await addToCart(token, productId);

    // the API adds 1 only, so extra quantity is set afterwards
    if (qty > 1) {
      const cart = await getCart(token);
      const current =
        cart.data?.products.find((item) => getProductId(item) === productId)
          ?.count ?? 1;

      await updateCartItem(token, productId, current + qty - 1);
    }

    return added.message ?? "Product added successfully to your cart";
  });
}

export async function updateCartItemAction(
  productId: string,
  count: number,
): Promise<ActionResult> {
  const next = Math.max(1, Math.floor(count));

  return run(async (token) => {
    await updateCartItem(token, productId, next);
    return "Cart updated";
  });
}

export async function removeCartItemAction(
  productId: string,
): Promise<ActionResult> {
  return run(async (token) => {
    await removeCartItem(token, productId);
    return "Item removed from your cart";
  });
}

export async function clearCartAction(): Promise<ActionResult> {
  return run(async (token) => {
    await clearCart(token);
    return "Your cart has been cleared";
  });
}

export async function applyCouponAction(
  couponName: string,
): Promise<ActionResult> {
  const code = couponName.trim();
  if (!code) return { ok: false, message: "Enter a promo code" };

  return run(async (token) => {
    const data = await applyCoupon(token, code);
    return data.message ?? "Promo code applied";
  });
}
