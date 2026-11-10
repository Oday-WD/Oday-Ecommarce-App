import {
  FaArrowRotateLeft,
  FaHeadset,
  FaShieldHalved,
  FaTruck,
} from "react-icons/fa6";

const features = [
  { icon: FaTruck, title: "Free Shipping", text: "On orders over 500 EGP" },
  {
    icon: FaArrowRotateLeft,
    title: "Easy Returns",
    text: "14-day return policy",
  },
  {
    icon: FaShieldHalved,
    title: "Secure Payment",
    text: "100% secure checkout",
  },
  { icon: FaHeadset, title: "24/7 Support", text: "Contact us anytime" },
];

// store promises strip above the footer
export const FeaturesBar = () => (
  <div className="border-y border-primary-100 bg-primary-50">
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
              <Icon className="text-lg text-primary-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
              <p className="text-xs text-gray-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
