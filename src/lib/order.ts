import { FaCircleCheck, FaClock, FaTruck } from "react-icons/fa6";
import type { Order } from "@/interfaces/order.interface";

// price format
export const money = (value: number) => value.toLocaleString("en-US");

// date format
export const formatOrderDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

// status styles
const statuses = {
  delivered: {
    label: "Delivered",
    icon: FaCircleCheck,
    badge: "bg-green-100",
    text: "text-green-600",
    panel: "border-green-200 bg-green-100",
    iconBox: "bg-green-500",
  },
  shipping: {
    label: "On the way",
    icon: FaTruck,
    badge: "bg-blue-100",
    text: "text-blue-600",
    panel: "border-blue-200 bg-blue-100",
    iconBox: "bg-blue-500",
  },
  processing: {
    label: "Processing",
    icon: FaClock,
    badge: "bg-amber-100",
    text: "text-amber-600",
    panel: "border-amber-200 bg-amber-100",
    iconBox: "bg-amber-500",
  },
} as const;

export type OrderStatus = (typeof statuses)[keyof typeof statuses];

// delivered > paid (on the way) > processing
export const getOrderStatus = ({ isDelivered, isPaid }: Order): OrderStatus =>
  isDelivered
    ? statuses.delivered
    : isPaid
      ? statuses.shipping
      : statuses.processing;

// items with a safe product (null if missing)
export const getOrderLines = ({ cartItems }: Order) =>
  cartItems.map((item) => ({
    ...item,
    product:
      item.product && typeof item.product !== "string" ? item.product : null,
  }));
