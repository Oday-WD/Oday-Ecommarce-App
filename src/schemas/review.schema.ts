import { z } from "zod";

export const reviewSchema = z.object({
  rating: z.number().min(1, "Select a rating").max(5),
  review: z
    .string()
    .trim()
    .min(2, "Write at least 2 characters")
    .max(500, "Review must be at most 500 characters"),
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;