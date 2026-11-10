import { FaMinus, FaPlus } from "react-icons/fa6";

interface CartQuantityProps {
  count: number;
  maxReached: boolean;
  pending: boolean;
  onChange: (next: number) => void;
}

// quantity stepper
export const CartQuantity = ({
  count,
  maxReached,
  pending,
  onChange,
}: CartQuantityProps) => (
  <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1">
    <button
      type="button"
      aria-label="Decrease quantity"
      disabled={count <= 1 || pending}
      onClick={() => onChange(count - 1)}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
    >
      <FaMinus className="text-xs" />
    </button>
    <span className="w-12 text-center font-bold text-gray-900">{count}</span>
    <button
      type="button"
      aria-label="Increase quantity"
      disabled={maxReached || pending}
      onClick={() => onChange(count + 1)}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white shadow-sm shadow-primary-600/30 transition-all hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <FaPlus className="text-xs" />
    </button>
  </div>
);
