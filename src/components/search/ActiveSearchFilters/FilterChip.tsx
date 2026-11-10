import { FaXmark } from "react-icons/fa6";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

// grey pill with a remove button
export const FilterChip = ({ label, onRemove }: FilterChipProps) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
    {label}
    <button
      type="button"
      aria-label={`Remove ${label}`}
      onClick={onRemove}
      className="hover:text-red-500"
    >
      <FaXmark />
    </button>
  </span>
);
