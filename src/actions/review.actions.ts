"use server";

import { revalidatePath, updateTag } from "next/cache";
import type { ActionResult } from "@/interfaces/auth.interface";
import { withToken } from "@/lib/run-action";
import { reviewSchema, type ReviewFormValues } from "@/schemas/review.schema";
import {
  createReview,
  deleteReview,
  updateReview,
} from "@/services/review.service";

// clears the product page cache so the change shows right away
async function run(
  productId: string,
  task: (token: string) => Promise<string>,
): Promise<ActionResult> {
  if (!productId) return { ok: false, message: "Product not found" };

  return withToken(task, () => {
    updateTag(`product-${productId}`);
    revalidatePath("/products/[productId]", "page");
  });
}

// validates the form values, or returns the first error message
function validate(values: ReviewFormValues) {
  const parsed = reviewSchema.safeParse(values);

  return parsed.success
    ? { ok: true as const, data: parsed.data }
    : {
        ok: false as const,
        message: parsed.error.issues[0]?.message ?? "Invalid review",
      };
}

export async function addReviewAction(
  productId: string,
  values: ReviewFormValues,
): Promise<ActionResult> {
  const checked = validate(values);
  if (!checked.ok) return checked;

  return run(productId, async (token) => {
    await createReview(token, productId, checked.data);
    return "Thanks for your review!";
  });
}

export async function updateReviewAction(
  reviewId: string,
  productId: string,
  values: ReviewFormValues,
): Promise<ActionResult> {
  const checked = validate(values);
  if (!checked.ok) return checked;

  return run(productId, async (token) => {
    await updateReview(token, reviewId, checked.data);
    return "Review updated";
  });
}

export async function deleteReviewAction(
  reviewId: string,
  productId: string,
): Promise<ActionResult> {
  return run(productId, async (token) => {
    await deleteReview(token, reviewId);
    return "Review deleted";
  });
}