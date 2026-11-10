import { FaCity, FaLocationDot, FaPhone } from "react-icons/fa6";
import { DeleteAddressButton } from "@/components/profile/DeleteAddressButton/DeleteAddressButton";
import { EditAddressButton } from "@/components/profile/EditAddressButton/EditAddressButton";
import type { Address } from "@/interfaces/address.interface";

export const AddressCard = ({ address }: { address: Address }) => {
  const { _id, name, details, city, phone } = address;

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-primary-100 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 items-start gap-4">
          {/* Icon */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-primary-100">
            <FaLocationDot className="text-lg text-primary-600" />
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 font-bold text-gray-900">{name}</h3>
            <p className="mb-3 line-clamp-2 text-sm text-gray-600">{details}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <FaPhone className="text-xs" />
                {phone}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCity className="text-xs" />
                {city}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <EditAddressButton address={address} />
          <DeleteAddressButton id={_id} name={name} />
        </div>
      </div>
    </div>
  );
};