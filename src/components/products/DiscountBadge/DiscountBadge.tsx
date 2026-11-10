interface DiscountBadgeProps {
  percent: number;
  className?: string;
}

// red "-20%" tag
export const DiscountBadge = ({
  percent,
  className = "",
}: DiscountBadgeProps) => (
  <span
    className={`rounded bg-red-500 px-2 py-1 text-xs text-white ${className}`}
  >
    -{percent}%
  </span>
);