import Link from "next/link";
import { FaHeadset } from "react-icons/fa6";

// support shortcut
export const SupportLink = () => (
  <Link
    href="/contact"
    className="mr-2 hidden items-center gap-2 border-r border-gray-200 pr-3 transition-opacity hover:opacity-80 lg:flex"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
      <FaHeadset className="text-primary-600" />
    </div>
    <div className="text-xs">
      <div className="text-gray-400">Support</div>
      <div className="font-semibold text-gray-700">24/7 Help</div>
    </div>
  </Link>
);