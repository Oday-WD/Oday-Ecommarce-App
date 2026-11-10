"use client";

import { useState } from "react";
import { Stars } from "@/components/shared/Stars/Stars";
import { WishlistButton } from "@/components/wishlist/WishlistButton/WishlistButton";
import { useAddToCart } from "@/hooks/useAddToCart";
import type { Product } from "@/interfaces/product.interface";
import { getUnitPrice } from "@/lib/price";
import { ProductActions } from "./ProductActions";
import { ProductBadges } from "./ProductBadges";
import { ProductGuarantees } from "./ProductGuarantees";
import { ProductPrice } from "./ProductPrice";
import { QuantitySelector } from "./QuantitySelector";
import { ShareButton } from "./ShareButton";
import { StockBadge } from "./StockBadge";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const {
    title,
    description,
    price,
    priceAfterDiscount,
    quantity: stock,
    ratingsAverage,
    ratingsQuantity,
    category,
    brand,
  } = product;

  const [quantity, setQuantity] = useState(1);
  const { addToCart, pending } = useAddToCart();

  const unitPrice = getUnitPrice(price, priceAfterDiscount);
  const inStock = stock > 0;

  // keep quantity between 1 and stock
  const updateQuantity = (value: number) => {
    if (Number.isNaN(value)) return;
    setQuantity(Math.min(Math.max(value, 1), Math.max(stock, 1)));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Category and brand */}
      <ProductBadges category={category} brand={brand} />

      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
        {title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-4">
        <Stars rating={ratingsAverage} />
        <span className="text-sm text-gray-600">
          {ratingsAverage} ({ratingsQuantity} reviews)
        </span>
      </div>

      {/* Price and stock */}
      <ProductPrice price={price} priceAfterDiscount={priceAfterDiscount} />
      <StockBadge inStock={inStock} />

      {/* Description */}
      <div className="border-t border-gray-100 pt-5 mb-6">
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Quantity */}
      <QuantitySelector
        value={quantity}
        stock={stock}
        onChange={updateQuantity}
      />

      {/* Total */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Price:</span>
          <span className="text-2xl font-bold text-primary-600">
            {(unitPrice * quantity).toFixed(2)} EGP
          </span>
        </div>
      </div>

      {/* Cart actions */}
      <ProductActions
        disabled={!inStock || pending}
        onAdd={() => addToCart(product._id, quantity)}
        onBuy={() =>
          addToCart(product._id, quantity, { redirectTo: "/checkout" })
        }
      />

      {/* Wishlist and share */}
      <div className="flex gap-3 mb-6">
        <WishlistButton productId={product._id} variant="full" />
        <ShareButton title={title} />
      </div>

      {/* Guarantees */}
      <ProductGuarantees />
    </div>
  );
};