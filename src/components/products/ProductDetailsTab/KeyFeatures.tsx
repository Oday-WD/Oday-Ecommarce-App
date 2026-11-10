import { FaCheck } from "react-icons/fa6";

const keyFeatures = [
  "Premium Quality Product",
  "100% Authentic Guarantee",
  "Fast & Secure Packaging",
  "Quality Tested",
];

// static selling points
export const KeyFeatures = () => (
  <div className="rounded-lg bg-gray-50 p-4">
    <h4 className="mb-3 font-medium text-gray-900">Key Features</h4>
    <ul className="space-y-2">
      {keyFeatures.map((feature) => (
        <li key={feature} className="flex items-center text-sm text-gray-600">
          <FaCheck className="mr-2 w-4 text-primary-600" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);
