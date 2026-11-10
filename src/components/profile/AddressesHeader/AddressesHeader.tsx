import { AddAddressButton } from "@/components/profile/AddAddressButton/AddAddressButton";

// page title with the add button
export const AddressesHeader = () => (
  <div className="mb-6 flex items-center justify-between">
    <div>
      <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
      <p className="mt-1 text-sm text-gray-500">
        Manage your saved delivery addresses
      </p>
    </div>
    <AddAddressButton variant="header" />
  </div>
);