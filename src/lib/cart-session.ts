import type { CartResponse } from "@/interfaces/cart.interface";
import { getApiToken } from "@/lib/auth-session";
import { RouteApiError } from "@/lib/route-api";
import { getCart } from "@/services/cart.service";

const EMPTY_CART: CartResponse = {
  numOfCartItems: 0,
  data: { _id: "", products: [], totalCartPrice: 0 },
};

export async function fetchCart(token: string): Promise<CartResponse | null> {
  try {
    return await getCart(token);
  } catch (error) {
    if (error instanceof RouteApiError && error.status === 404) {
      return EMPTY_CART;
    }
    return null;
  }
}

export async function getCartCount(): Promise<number> {
  const token = await getApiToken();
  if (!token) return 0;

  const cart = await fetchCart(token);
  return cart?.numOfCartItems ?? cart?.data?.products.length ?? 0;
}
