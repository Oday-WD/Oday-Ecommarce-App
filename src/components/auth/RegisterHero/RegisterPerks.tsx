import { FaShieldHalved, FaStar, FaTruckFast } from "react-icons/fa6";

const perks = [
  {
    icon: FaStar,
    title: "Premium Quality",
    text: "Premium quality products sourced from trusted suppliers.",
  },
  {
    icon: FaTruckFast,
    title: "Fast Delivery",
    text: "Same-day delivery available in most areas",
  },
  {
    icon: FaShieldHalved,
    title: "Secure Shopping",
    text: "Your data and payments are completely secure",
  },
];

// benefits list
export const RegisterPerks = () => (
  <ul className="my-8 space-y-6">
    {perks.map(({ icon: Icon, title, text }) => (
      <li key={title} className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-200 text-lg text-primary-600">
          <Icon />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600">{text}</p>
        </div>
      </li>
    ))}
  </ul>
);