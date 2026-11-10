import { Stars } from "@/components/shared/Stars/Stars";

interface ProductRatingProps {
  average: number;
  count: number;
  className?: string;
}

// stars with average and reviews count
export const ProductRating = ({
  average,
  count,
  className = "",
}: ProductRatingProps) => (
  <div className={`flex ${className}`}>
    <Stars rating={average} className="mr-2 text-yellow-400" />
    <span className="text-xs text-gray-500">
      {average} ({count})
    </span>
  </div>
);
