import type { ActionResult } from "@/interfaces/auth.interface";

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
  postalCode?: string;
}

export interface OrderProduct {
  _id: string;
  title: string;
  imageCover: string;
  category?: { _id: string; name: string };
}

export interface OrderItem {
  _id: string;
  count: number;
  price: number;
  product: OrderProduct | string | null;
}

export interface Order {
  _id: string;
  id: number;
  shippingAddress: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: "cash" | "card";
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  createdAt: string;
  cartItems: OrderItem[];
}

export interface CheckoutSessionResponse {
  status: string;
  session: { url: string };
}

export type CheckoutActionResult =
  | ActionResult
  | { ok: true; message: string; url: string };
