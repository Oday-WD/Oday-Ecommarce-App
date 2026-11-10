import { FaBookmark, FaPlus } from "react-icons/fa6";
import type { Address } from "@/interfaces/address.interface";
import { AddressOption } from "./AddressOption";

interface SavedAddressesProps {
  addresses: Address[];
  selected: string;
  onSelect: (address: Address) => void;
  onNew: () => void;
}

// saved addresses picker
export const SavedAddresses = ({
  addresses,
  selected,
  onSelect,
  onNew,
}: SavedAddressesProps) => {
  if (addresses.length === 0) return null;

  const isNew = selected === "new";

  return (
    <div className="border-b border-gray-100 pb-5">
      {/* Title */}
      <div className="mb-3 flex items-center gap-2">
        <FaBookmark className="text-sm text-primary-500" />
        <span className="font-semibold text-gray-800">Saved Addresses</span>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-600">
          Select a saved address or enter a new one below
        </p>

        {/* Saved */}
        {addresses.map((address) => (
          <AddressOption
            key={address._id}
            address={address}
            active={selected === address._id}
            onSelect={() => onSelect(address)}
          />
        ))}

        {/* New address */}
        <button
          type="button"
          onClick={onNew}
          className={`w-full rounded-xl border-2 border-dashed p-4 text-left transition-all duration-200 ${
            isNew
              ? "border-primary-500 bg-primary-50"
              : "border-gray-300 hover:border-primary-300 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                isNew
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              <FaPlus />
            </div>
            <div>
              <p
                className={`font-semibold ${
                  isNew ? "text-primary-700" : "text-gray-700"
                }`}
              >
                Use a different address
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                Enter a new shipping address manually
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
