import type {
  CheckoutSessionResponse,
  Order,
  ShippingAddress,
} from "@/interfaces/order.interface";
import { routeFetch } from "@/lib/route-fetch";

export async function getUserOrders(
  token: string,
  userId: string,
): Promise<Order[]> {
  const data = await routeFetch<Order[] | { data?: Order[] }>(
    `orders/user/${userId}`,
    { token },
  );

  return Array.isArray(data) ? data : (data.data ?? []);
}

export const createCashOrder = (
  token: string,
  cartId: string,
  shippingAddress: ShippingAddress,
) =>
  routeFetch<unknown>(`orders/${cartId}`, {
    token,
    method: "POST",
    body: { shippingAddress },
  });

export const createCheckoutSession = (
  token: string,
  cartId: string,
  shippingAddress: ShippingAddress,
  origin: string,
) =>
  routeFetch<CheckoutSessionResponse>(
    `orders/checkout-session/${cartId}?url=${encodeURIComponent(origin)}`,
    { token, method: "POST", body: { shippingAddress } },
  );