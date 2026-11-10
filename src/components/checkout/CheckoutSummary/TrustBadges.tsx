import { FaBox, FaShieldHalved, FaTruck } from "react-icons/fa6";

const badges = [
  { icon: FaShieldHalved, label: "Secure", color: "text-green-500" },
  { icon: FaTruck, label: "Fast Delivery", color: "text-blue-500" },
  { icon: FaBox, label: "Easy Returns", color: "text-orange-500" },
];

// small trust row under the button
export const TrustBadges = () => (
  <div className="mt-4 flex items-center justify-center gap-4 border-t border-gray-100 py-3">
    {badges.map(({ icon: Icon, label, color }, index) => (
      <div key={label} className="flex items-center gap-4">
        {index > 0 && <div className="h-4 w-px bg-gray-200" />}
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Icon className={color} />
          <span>{label}</span>
        </div>
      </div>
    ))}
  </div>
);
