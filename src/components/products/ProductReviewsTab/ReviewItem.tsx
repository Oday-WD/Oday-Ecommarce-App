import { ReviewActions } from "@/components/products/ReviewActions/ReviewActions";
import { Stars } from "@/components/shared/Stars/Stars";
import type { Review } from "@/interfaces/product.interface";

interface ReviewItemProps {
  review: Review;
  isOwner: boolean;
}

// one review, with edit/delete for its owner
export const ReviewItem = ({ review, isOwner }: ReviewItemProps) => (
  <li className="rounded-lg bg-gray-50 p-4">
    <div className="mb-2 flex items-center justify-between gap-3">
      <span className="font-medium text-gray-900">{review.user.name}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">
          {new Date(review.createdAt).toLocaleDateString("en-GB")}
        </span>
        {isOwner && <ReviewActions review={review} />}
      </div>
    </div>
    <Stars rating={review.rating} className="mb-2 text-sm text-yellow-400" />
    <p className="text-sm leading-relaxed text-gray-600">{review.review}</p>
  </li>
);