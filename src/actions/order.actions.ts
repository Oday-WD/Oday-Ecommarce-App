"use server";

import { revalidatePath } from "next/cache";
import type { CheckoutActionResult } from "@/interfaces/order.interface";
import { failureResult, unauthorizedResult } from "@/lib/action-result";
import { getApiToken } from "@/lib/auth-session";
import { fetchCart } from "@/lib/cart-session";
import { getOrigin } from "@/lib/origin";
import {
  checkoutSchema,
  type CheckoutFormValues,
} from "@/schemas/checkout.schema";
import { clearCart } from "@/services/cart.service";
import {
  createCashOrder,
  createCheckoutSession,
} from "@/services/order.service";

export async function placeOrderAction(
  values: CheckoutFormValues,
): Promise<CheckoutActionResult> {
  const parsed = checkoutSchema.safeParse(values);
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues[0]?.message ?? "Invalid order data",
    };
  }

  const token = await getApiToken();
  if (!token) return unauthorizedResult;

  try {
    // the cart id comes from the server, never from the browser
    const cart = await fetchCart(token);
    const cartId = cart?.cartId ?? cart?.data?._id;

    if (!cartId || !cart?.data?.products.length) {
      return { ok: false, message: "Your cart is empty" };
    }

    const { paymentMethod, ...shippingAddress } = parsed.data;

    // online: send the user to Stripe
    if (paymentMethod === "card") {
      const data = await createCheckoutSession(
        token,
        cartId,
        shippingAddress,
        await getOrigin(),
      );

      return {
        ok: true,
        message: "Redirecting to secure payment...",
        url: data.session.url,
      };
    }

    // cash: create the order directly
    await createCashOrder(token, cartId, shippingAddress);
    // safety net in case the API did not empty the cart
    await clearCart(token).catch(() => undefined);

    revalidatePath("/", "layout");
    return { ok: true, message: "Order placed successfully!" };
  } catch (error) {
    return failureResult(error);
  }
}