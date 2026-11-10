import type { ApiResponse } from "@/interfaces/api.interface";
import type { Review } from "@/interfaces/product.interface";
import { BASE_URL } from "@/lib/constants";
import { routeFetch } from "@/lib/route-fetch";
import type { ReviewFormValues } from "@/schemas/review.schema";

export async function getProductReviews(
  productId: string,
): Promise<Review[] | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/v1/products/${productId}/reviews?limit=100`,
      { cache: "no-store" },
    );

    if (!response.ok) return null;

    const data: ApiResponse<Review> = await response.json();
    return data.data ?? [];
  } catch {
    return null;
  }
}

export const createReview = (
  token: string,
  productId: string,
  payload: ReviewFormValues,
) =>
  routeFetch<unknown>(`products/${productId}/reviews`, {
    token,
    method: "POST",
    body: payload,
  });

export const updateReview = (
  token: string,
  reviewId: string,
  payload: ReviewFormValues,
) =>
  routeFetch<unknown>(`reviews/${reviewId}`, {
    token,
    method: "PUT",
    body: payload,
  });

export const deleteReview = (token: string, reviewId: string) =>
  routeFetch<unknown>(`reviews/${reviewId}`, { token, method: "DELETE" });
