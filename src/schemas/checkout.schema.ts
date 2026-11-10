import { z } from "zod";

import { phoneRule } from "./rules";

export const checkoutSchema = z.object({
  city: z.string().trim().min(2, "City is required"),
  details: z.string().trim().min(5, "Enter the full street address"),
  phone: phoneRule,
  paymentMethod: z.enum(["cash", "card"]),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;