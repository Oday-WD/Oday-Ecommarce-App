"use client";

import { motion } from "motion/react";
import { FaPlus, FaSpinner } from "react-icons/fa6";
import { useAddToCart } from "@/hooks/useAddToCart";

// round "+" button that adds one item to the cart
export const AddToCartButton = ({ productId }: { productId: string }) => {
  const { addToCart, pending } = useAddToCart();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type="button"
      aria-label="Add to cart"
      onClick={() => addToCart(productId)}
      disabled={pending}
      className="h-10 w-10 rounded-full flex items-center justify-center transition bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-70"
    >
      {pending ? <FaSpinner className="animate-spin" /> : <FaPlus />}
    </motion.button>
  );
};
