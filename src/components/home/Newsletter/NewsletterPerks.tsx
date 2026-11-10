import { FaLeaf, FaTag, FaTruck } from "react-icons/fa6";

const perks = [
  { icon: FaLeaf, label: "Fresh Picks Weekly" },
  { icon: FaTruck, label: "Free Delivery Codes" },
  { icon: FaTag, label: "Members-Only Deals" },
];

// perk pills
export const NewsletterPerks = () => (
  <div className="flex flex-wrap gap-3">
    {perks.map(({ icon: Icon, label }) => (
      <div
        key={label}
        className="flex items-center gap-2.5 rounded-full border border-emerald-100 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
          <Icon className="text-xs text-emerald-600" />
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
    ))}
  </div>
);
