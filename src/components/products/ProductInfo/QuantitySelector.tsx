import { FaMinus, FaPlus } from "react-icons/fa6";

interface QuantitySelectorProps {
  value: number;
  stock: number;
  onChange: (value: number) => void;
}

// quantity stepper
export const QuantitySelector = ({
  value,
  stock,
  onChange,
}: QuantitySelectorProps) => (
  <div className="mb-6">
    <label
      htmlFor="quantity"
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      Quantity
    </label>
    <div className="flex items-center gap-4">
      <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => onChange(value - 1)}
          disabled={value <= 1}
          className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
        >
          <FaMinus />
        </button>
        <input
          id="quantity"
          type="number"
          min={1}
          max={stock}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
        />
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onChange(value + 1)}
          disabled={value >= stock}
          className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
        >
          <FaPlus />
        </button>
      </div>
      <span className="text-sm text-gray-500">{stock} available</span>
    </div>
  </div>
);
