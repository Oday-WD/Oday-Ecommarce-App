import { FaEnvelope, FaLock, FaShieldHalved } from "react-icons/fa6";
import { AuthBadges } from "@/components/auth/AuthBadges/AuthBadges";
import { LockIllustration } from "./LockIllustration";

const badges = [
  { icon: FaEnvelope, label: "Email Verification" },
  { icon: FaShieldHalved, label: "Secure Reset" },
  { icon: FaLock, label: "Encrypted" },
];

// illustration and reassurance text beside the form
export const ForgotPasswordHero = () => (
  <div className="hidden lg:block">
    <div className="space-y-6 text-center">
      <LockIllustration />

      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Reset Your Password
        </h2>
        <p className="text-lg text-gray-600">
          Don&apos;t worry, it happens to the best of us. We&apos;ll help you
          get back into your account in no time.
        </p>
        <AuthBadges badges={badges} />
      </div>
    </div>
  </div>
);