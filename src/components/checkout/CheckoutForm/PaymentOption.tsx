import type { IconType } from "react-icons";
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaCheck } from "react-icons/fa6";

export interface PaymentMethod {
  value: "cash" | "card";
  title: string;
  text: string;
  icon: IconType;
  active: string;
  iconActive: string;
}

interface PaymentOptionProps {
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
}

// one payment choice
export const PaymentOption = ({
  method,
  selected,
  onSelect,
}: PaymentOptionProps) => {
  const { value, title, text, icon: Icon, active, iconActive } = method;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`group flex w-full items-center gap-4 rounded-xl border-2 p-5 transition-all ${
        selected
          ? `border-primary-500 bg-linear-to-r shadow-sm ${active}`
          : "border-gray-200 hover:border-primary-200 hover:bg-gray-50"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl text-xl transition-all ${
          selected
            ? `bg-linear-to-br text-white shadow-lg shadow-primary-500/30 ${iconActive}`
            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
        }`}
      >
        <Icon />
      </div>

      {/* Text */}
      <div className="flex-1 text-left">
        <h3
          className={`font-bold ${
            selected ? "text-primary-700" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p className="mt-0.5 text-sm text-gray-500">{text}</p>
        {value === "card" && (
          <div className="mt-2 flex items-center gap-2 text-2xl">
            <FaCcVisa className="text-blue-700" />
            <FaCcMastercard className="text-orange-500" />
            <FaCcAmex className="text-sky-500" />
          </div>
        )}
      </div>

      {/* Check mark */}
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
          selected ? "bg-primary-600 text-white" : "border-2 border-gray-200"
        }`}
      >
        {selected && <FaCheck className="text-xs" />}
      </div>
    </button>
  );
};
