import type { IconType } from "react-icons";
import {
  FaArrowRotateLeft,
  FaHeadset,
  FaShieldHalved,
  FaTruck,
} from "react-icons/fa6";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

export const features: Feature[] = [
  {
    icon: FaTruck,
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: FaShieldHalved,
    title: "Secure Payment",
    description: "100% secure transactions",
    color: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: FaArrowRotateLeft,
    title: "Easy Returns",
    description: "14-day return policy",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Dedicated support team",
    color: "bg-purple-50 text-purple-500",
  },
];