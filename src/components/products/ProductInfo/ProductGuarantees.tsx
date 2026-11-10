import {
  FaArrowRotateLeft,
  FaShieldHalved,
  FaTruckFast,
} from "react-icons/fa6";

const guarantees = [
  { icon: FaTruckFast, title: "Free Delivery", text: "Orders over 500 EGP" },
  { icon: FaArrowRotateLeft, title: "30 Days Return", text: "Money back" },
  { icon: FaShieldHalved, title: "Secure Payment", text: "100% Protected" },
];

// trust badges
export const ProductGuarantees = () => (
  <div className="border-t border-gray-100 pt-6">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {guarantees.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
            <Icon />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 text-sm">{title}</h4>
            <p className="text-xs text-gray-500">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
