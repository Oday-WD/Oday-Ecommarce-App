"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { FaRegStar, FaSpinner, FaStar } from "react-icons/fa6";
import { notify } from "@/lib/notify";
import type { ActionResult } from "@/interfaces/auth.interface";
import { reviewSchema, type ReviewFormValues } from "@/schemas/review.schema";

interface ReviewFormProps {
  defaultValues: ReviewFormValues;
  submitLabel: string;
  action: (values: ReviewFormValues) => Promise<ActionResult>;
  onSuccess: () => void;
}

export const ReviewForm = ({
  defaultValues,
  submitLabel,
  action,
  onSuccess,
}: ReviewFormProps) => {
  const { control, handleSubmit, formState } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    mode: "onTouched",
    defaultValues,
  });

  const onSubmit = async (values: ReviewFormValues) => {
    if (notify(await action(values))) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Controller
        control={control}
        name="rating"
        render={({ field, fieldState }) => (
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">
              Your rating
            </p>
            <div className="flex gap-1 text-2xl text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  onClick={() => field.onChange(star)}
                >
                  {star <= field.value ? <FaStar /> : <FaRegStar />}
                </button>
              ))}
            </div>
            {fieldState.error && (
              <p className="mt-1 text-sm text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="review"
        render={({ field, fieldState }) => (
          <div>
            <label
              htmlFor="review"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Your review
            </label>
            <textarea
              id="review"
              rows={4}
              placeholder="Share your experience with this product..."
              aria-invalid={fieldState.invalid}
              {...field}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 aria-invalid:border-red-500"
            />
            {fieldState.error && (
              <p className="mt-1 text-sm text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <button
        type="submit"
        disabled={formState.isSubmitting}
        aria-busy={formState.isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {formState.isSubmitting && <FaSpinner className="animate-spin" />}
        {submitLabel}
      </button>
    </form>
  );
};
