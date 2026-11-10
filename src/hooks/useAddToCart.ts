"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addToCartAction } from "@/actions/cart.actions";

interface AddToCartOptions {
  redirectTo?: string;
}

export function useAddToCart() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const addToCart = (
    productId: string,
    quantity = 1,
    { redirectTo }: AddToCartOptions = {},
  ) =>
    startTransition(async () => {
      const result = await addToCartAction(productId, quantity);

      if (!result.ok) {
        toast.error(result.message);
        if (result.unauthorized) router.push("/login");
        return;
      }

      toast.success(result.message);
      if (redirectTo) router.push(redirectTo);
    });

  return { addToCart, pending };
}