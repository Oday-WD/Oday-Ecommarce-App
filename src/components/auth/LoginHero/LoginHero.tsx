import Image from "next/image";
import { FaClock, FaShieldHalved, FaTruck } from "react-icons/fa6";

import authImage from "@/assets/images/authimage.png";
import { AuthBadges } from "@/components/auth/AuthBadges/AuthBadges";

const badges = [
  { icon: FaTruck, label: "Free Delivery" },
  { icon: FaShieldHalved, label: "Secure Payment" },
  { icon: FaClock, label: "24/7 Support" },
];

// image and welcome text beside the login form
export const LoginHero = () => (
  <div className="hidden lg:block">
    <div className="space-y-6 text-center">
      <Image
        src={authImage}
        alt="Fresh vegetables and fruits"
        className="h-96 w-full rounded-2xl object-cover shadow-lg"
        priority
      />
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">
          FreshCart - Your One-Stop Shop for Fresh Products
        </h2>
        <p className="text-lg text-gray-600">
          Join thousands of happy customers who trust FreshCart for their daily
          grocery needs
        </p>
        <AuthBadges badges={badges} />
      </div>
    </div>
  </div>
);
