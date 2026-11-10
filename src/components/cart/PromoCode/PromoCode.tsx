"use client";

import { useState, useTransition, type FormEvent } from "react";
import { FaSpinner, FaTag } from "react-icons/fa6";
import { toast } from "sonner";
import { applyCouponAction } from "@/actions/cart.actions";
import { Input } from "@/components/ui/input";

export const PromoCode = () => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(async () => {
      const result = await applyCouponAction(code);

      if (!result.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      setCode("");
      setOpen(false);
    });
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 py-3 text-gray-600 transition-all hover:border-primary-400 hover:bg-primary-50/50 hover:text-primary-600"
      >
        <FaTag />
        <span className="text-sm font-medium">Apply Promo Code</span>
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={code}
        onChange={(event) => setCode(event.target.value)}
        placeholder="Promo code"
        aria-label="Promo code"
        autoFocus
        className="h-11! rounded-xl! border-gray-200! px-4! text-sm! focus-visible:border-primary-500! focus-visible:ring-2! focus-visible:ring-primary-500/20!"
      />
      <button
        type="submit"
        disabled={pending || !code.trim()}
        className="flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending && <FaSpinner className="animate-spin" />}
        Apply
      </button>
    </form>
  );
};