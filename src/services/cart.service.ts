import type { CartResponse } from "@/interfaces/cart.interface";
import { routeFetch } from "@/lib/route-fetch";

const v2 = { version: "v2" } as const;

export const getCart = (token: string) =>
  routeFetch<CartResponse>("cart", { token, ...v2 });

export const addToCart = (token: string, productId: string) =>
  routeFetch<CartResponse>("cart", {
    token,
    ...v2,
    method: "POST",
    body: { productId },
  });

export const updateCartItem = (
  token: string,
  productId: string,
  count: number,
) =>
  routeFetch<CartResponse>(`cart/${productId}`, {
    token,
    ...v2,
    method: "PUT",
    body: { count },
  });

export const removeCartItem = (token: string, productId: string) =>
  routeFetch<CartResponse>(`cart/${productId}`, {
    token,
    ...v2,
    method: "DELETE",
  });

export const clearCart = (token: string) =>
  routeFetch<CartResponse>("cart", { token, ...v2, method: "DELETE" });

export const applyCoupon = (token: string, couponName: string) =>
  routeFetch<CartResponse>("cart/applyCoupon", {
    token,
    ...v2,
    method: "PUT",
    body: { couponName },
  });