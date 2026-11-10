import { FaRotateLeft, FaTruck } from "react-icons/fa6";
import { BuyerProtection } from "./BuyerProtection";
import { InfoPanel } from "./InfoPanel";

const shippingInfo = [
  "Free shipping on orders over 500 EGP",
  "Standard delivery: 3-5 business days",
  "Express delivery available (1-2 business days)",
  "Track your order in real-time",
];

const returnsInfo = [
  "30-day hassle-free returns",
  "Full refund or exchange available",
  "Free return shipping on defective items",
  "Easy online return process",
];

export const ShippingReturns = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Shipping */}
      <InfoPanel
        icon={FaTruck}
        title="Shipping Information"
        items={shippingInfo}
        background="from-primary-50 to-primary-100"
        iconBox="bg-primary-600"
        check="text-primary-600"
      />

      {/* Returns */}
      <InfoPanel
        icon={FaRotateLeft}
        title="Returns & Refunds"
        items={returnsInfo}
        background="from-green-50 to-green-100"
        iconBox="bg-green-600"
        check="text-green-600"
      />
    </div>

    {/* Buyer protection */}
    <BuyerProtection />
  </div>
);
