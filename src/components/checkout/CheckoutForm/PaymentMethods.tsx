import { FaCreditCard, FaMoneyBill, FaShieldHalved } from "react-icons/fa6";
import { PaymentOption, type PaymentMethod } from "./PaymentOption";

const methods: PaymentMethod[] = [
  {
    value: "cash",
    title: "Cash on Delivery",
    text: "Pay when your order arrives at your doorstep",
    icon: FaMoneyBill,
    active: "from-primary-50 to-emerald-50",
    iconActive: "from-primary-500 to-primary-600",
  },
  {
    value: "card",
    title: "Pay Online",
    text: "Secure payment with Credit/Debit Card via Stripe",
    icon: FaCreditCard,
    active: "from-primary-50 to-blue-50",
    iconActive: "from-primary-500 to-blue-600",
  },
];

interface PaymentMethodsProps {
  value: PaymentMethod["value"];
  onChange: (value: PaymentMethod["value"]) => void;
}

// payment choices list
export const PaymentMethods = ({ value, onChange }: PaymentMethodsProps) => (
  <div role="radiogroup" aria-label="Payment method" className="space-y-4 p-6">
    {methods.map((method) => (
      <PaymentOption
        key={method.value}
        method={method}
        selected={value === method.value}
        onSelect={() => onChange(method.value)}
      />
    ))}

    {/* Secure note */}
    <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-100 bg-linear-to-r from-green-50 to-emerald-50 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
        <FaShieldHalved className="text-green-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-green-800">
          Secure &amp; Encrypted
        </p>
        <p className="mt-0.5 text-xs text-green-600">
          Your payment info is protected with 256-bit SSL encryption
        </p>
      </div>
    </div>
  </div>
);
