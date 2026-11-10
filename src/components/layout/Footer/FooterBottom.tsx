import { FaCreditCard } from "react-icons/fa6";
import { payments } from "./footer-data";

// cached so cacheComponents allows new Date()
async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

// copyright and payment methods
export const FooterBottom = () => (
  <div className="border-t border-gray-800">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-gray-500 md:text-left">
          © <CurrentYear /> FreshCart. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {payments.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <FaCreditCard />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
