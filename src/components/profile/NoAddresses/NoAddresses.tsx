import { FaLocationDot } from "react-icons/fa6";
import { AddAddressButton } from "@/components/profile/AddAddressButton/AddAddressButton";

// shown when the user has no saved addresses
export const NoAddresses = () => (
  <div className="rounded-3xl border border-gray-100 bg-white p-12 text-center">
    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
      <FaLocationDot className="text-3xl text-gray-400" />
    </div>
    <h3 className="mb-2 text-lg font-bold text-gray-900">No Addresses Yet</h3>
    <p className="mx-auto mb-6 max-w-sm text-gray-500">
      Add your first delivery address to make checkout faster and easier.
    </p>
    <AddAddressButton variant="empty" />
  </div>
);