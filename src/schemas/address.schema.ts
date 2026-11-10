import { z } from "zod";

import { phoneRule } from "./rules";

export const addressSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Address name must be at least 2 characters")
    .max(30, "Address name must be at most 30 characters"),
  details: z.string().trim().min(5, "Enter the full address details"),
  phone: phoneRule,
  city: z.string().trim().min(2, "City is required"),
});

export type AddressFormValues = z.infer<typeof addressSchema>;