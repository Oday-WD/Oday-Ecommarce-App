import { FaCheck, FaCity, FaLocationDot, FaPhone } from "react-icons/fa6";
import type { Address } from "@/interfaces/address.interface";

interface AddressOptionProps {
  address: Address;
  active: boolean;
  onSelect: () => void;
}

// one saved address
export const AddressOption = ({
  address,
  active,
  onSelect,
}: AddressOptionProps) => (
  <button
    type="button"
    onClick={onSelect}
    className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-200 ${
      active
        ? "border-primary-500 bg-primary-50 ring-2 ring-primary-500/20"
        : "border-gray-200 hover:border-primary-200 hover:bg-gray-50"
    }`}
  >
    <div className="flex items-start gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
          active ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {active ? <FaCheck /> : <FaLocationDot />}
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`font-semibold ${
            active ? "text-primary-700" : "text-gray-900"
          }`}
        >
          {address.name}
        </p>
        <p className="mt-0.5 line-clamp-1 text-sm text-gray-600">
          {address.details}
        </p>
        <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FaPhone className="text-[10px]" />
            {address.phone}
          </span>
          <span className="flex items-center gap-1">
            <FaCity className="text-[10px]" />
            {address.city}
          </span>
        </div>
      </div>
    </div>
  </button>
);
