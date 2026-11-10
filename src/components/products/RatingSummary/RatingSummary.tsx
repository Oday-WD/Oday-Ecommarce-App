import { Stars } from "@/components/shared/Stars/Stars";
import type { Review } from "@/interfaces/product.interface";
import { RatingBar } from "./RatingBar";

interface RatingSummaryProps {
  average: number;
  reviews: Review[];
}

export const RatingSummary = ({ average, reviews }: RatingSummaryProps) => {
  const total = reviews.length;

  // percent of reviews per star (5 → 1)
  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter(
      (review) => Math.round(review.rating) === star,
    ).length;

    return { star, percent: total ? Math.round((count / total) * 100) : 0 };
  });

  return (
    <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
      {/* Average */}
      <div className="text-center">
        <div className="mb-2 text-5xl font-bold text-gray-900">{average}</div>
        <Stars rating={average} className="justify-center text-yellow-400" />
        <p className="mt-2 text-sm text-gray-500">
          Based on {total} review{total !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Distribution */}
      <div className="w-full flex-1">
        {distribution.map(({ star, percent }) => (
          <RatingBar key={star} star={star} percent={percent} />
        ))}
      </div>
    </div>
  );
};
