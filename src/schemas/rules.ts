import { z } from "zod";

// rules shared by the auth, profile, address and checkout forms
export const egyptPhoneRegex = /^01[0125][0-9]{8}$/;

export const emailRule = z.email("Enter a valid email address");

export const phoneRule = z
  .string()
  .regex(egyptPhoneRegex, "Enter a valid Egyptian phone number");

export const nameRule = z
  .string()
  .trim()
  .min(3, "Name must be at least 3 characters")
  .max(30, "Name must be at most 30 characters");

export const passwordRule = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/\d/, "Password must contain a number")
  .regex(/[^A-Za-z0-9]/, "Password must contain a symbol");