import { RatingSummary } from "@/components/products/RatingSummary/RatingSummary";
import { WriteReviewButton } from "@/components/products/WriteReviewButton/WriteReviewButton";
import type { Review } from "@/interfaces/product.interface";
import { ReviewItem } from "./ReviewItem";

interface ProductReviewsTabProps {
  productId: string;
  reviews: Review[];
  average: number;
  currentUserId: string | null;
}

export const ProductReviewsTab = ({
  productId,
  reviews,
  average,
  currentUserId,
}: ProductReviewsTabProps) => {
  // newest first, so a new review shows at the top
  const sorted = [...reviews].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div className="space-y-6">
      {/* Summary */}
      {reviews.length > 0 && (
        <RatingSummary average={average} reviews={reviews} />
      )}

      <div className="border-t border-gray-200 pt-6">
        {/* List */}
        {sorted.length > 0 ? (
          <ul className="max-h-96 space-y-4 overflow-y-auto pr-2">
            {sorted.map((review) => (
              <ReviewItem
                key={review._id}
                review={review}
                isOwner={currentUserId === review.user._id}
              />
            ))}
          </ul>
        ) : (
          <p className="py-6 text-center text-gray-500">
            No reviews yet for this product.
          </p>
        )}

        {/* Write a review */}
        <div className="mt-6 text-center">
          <WriteReviewButton
            productId={productId}
            signedIn={currentUserId !== null}
          />
        </div>
      </div>
    </div>
  );
};