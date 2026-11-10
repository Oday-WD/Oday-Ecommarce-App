import { FaTrash } from "react-icons/fa6";
import { CartQuantity } from "./CartQuantity";

interface CartItemControlsProps {
  count: number;
  total: number;
  maxReached: boolean;
  pending: boolean;
  onChange: (next: number) => void;
  onRemove: () => void;
}

// quantity, line total and remove button
export const CartItemControls = ({
  count,
  total,
  maxReached,
  pending,
  onChange,
  onRemove,
}: CartItemControlsProps) => (
  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
    <CartQuantity
      count={count}
      maxReached={maxReached}
      pending={pending}
      onChange={onChange}
    />

    <div className="flex items-center gap-4">
      <div className="text-right">
        <p className="mb-0.5 text-xs text-gray-400">Total</p>
        <p className="text-xl font-bold text-gray-900">
          {total} <span className="text-sm font-medium text-gray-400">EGP</span>
        </p>
      </div>
      <button
        type="button"
        title="Remove item"
        aria-label="Remove from cart"
        disabled={pending}
        onClick={onRemove}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-500 transition-all duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white disabled:opacity-40"
      >
        <FaTrash className="text-sm" />
      </button>
    </div>
  </div>
);
