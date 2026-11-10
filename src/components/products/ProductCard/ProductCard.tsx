"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PriceTag } from "@/components/products/PriceTag/PriceTag";
import { ProductRating } from "@/components/products/ProductRating/ProductRating";
import type { Product } from "@/interfaces/product.interface";
import { AddToCartButton } from "./AddToCartButton";
import { ProductCardMedia } from "./ProductCardMedia";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const {
    _id,
    id,
    title,
    price,
    priceAfterDiscount,
    category,
    ratingsAverage,
    ratingsQuantity,
  } = product;

  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden"
    >
      {/* Image and quick actions */}
      <ProductCardMedia product={product} />

      <div className="p-4">
        {/* Category and title */}
        <div className="text-xs text-gray-500 mb-1">{category.name}</div>
        <h3 className="font-medium mb-1 cursor-pointer" title={title}>
          <Link className="line-clamp-2" href={`/products/${id}`}>
            {title}
          </Link>
        </h3>

        {/* Rating */}
        <ProductRating
          average={ratingsAverage}
          count={ratingsQuantity}
          className="mb-2"
        />

        {/* Price and add to cart */}
        <div className="flex items-center justify-between">
          <div>
            <PriceTag price={price} priceAfterDiscount={priceAfterDiscount} />
          </div>
          <AddToCartButton productId={_id} />
        </div>
      </div>
    </motion.div>
  );
};
