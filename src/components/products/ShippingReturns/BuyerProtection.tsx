import { FaShieldHalved } from "react-icons/fa6";

// buyer protection note
export const BuyerProtection = () => (
  <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-6">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
      <FaShieldHalved className="text-2xl" />
    </div>
    <div>
      <h4 className="mb-1 font-semibold text-gray-900">
        Buyer Protection Guarantee
      </h4>
      <p className="text-sm text-gray-600">
        Get a full refund if your order doesn&apos;t arrive or isn&apos;t as
        described. We ensure your shopping experience is safe and secure.
      </p>
    </div>
  </div>
);
