"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { notify } from "@/lib/notify";
import {
  removeCartItemAction,
  updateCartItemAction,
} from "@/actions/cart.actions";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog/ConfirmDialog";
import type { PopulatedCartItem } from "@/interfaces/cart.interface";
import { CartItemControls } from "./CartItemControls";
import { CartItemImage } from "./CartItemImage";
import { CartItemInfo } from "./CartItemInfo";

export const CartItemCard = ({ product, count, price }: PopulatedCartItem) => {
  const [pending, startTransition] = useTransition();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const href = `/products/${product._id}`;
  const stock = product.quantity;
  const inStock = stock === undefined || stock > 0;
  const maxReached = stock !== undefined && count >= stock;
  const sku = product._id.slice(-6).toUpperCase();

  // update quantity
  const changeCount = (next: number) =>
    startTransition(async () => {
      const result = await updateCartItemAction(product._id, next);
      if (!result.ok) toast.error(result.message);
    });

  // remove item
  const remove = () =>
    startTransition(async () => {
      notify(await removeCartItemAction(product._id));
      setConfirmOpen(false);
    });

  return (
    <div
      className={`relative rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md ${
        pending ? "opacity-60" : ""
      }`}
    >
      <div className="p-4 sm:p-5">
        <div className="flex gap-4 sm:gap-6">
          <CartItemImage
            href={href}
            src={product.imageCover}
            title={product.title}
            inStock={inStock}
          />

          <div className="flex min-w-0 flex-1 flex-col">
            <CartItemInfo
              href={href}
              title={product.title}
              category={product.category?.name}
              sku={sku}
              price={price}
            />
            <CartItemControls
              count={count}
              total={price * count}
              maxReached={maxReached}
              pending={pending}
              onChange={changeCount}
              onRemove={() => setConfirmOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Remove confirmation */}
      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Remove Item?"
        description={
          <>
            Remove{" "}
            <span className="font-semibold text-gray-700">{product.title}</span>{" "}
            from your cart?
          </>
        }
        confirmLabel="Remove"
        pending={pending}
        onConfirm={remove}
      />
    </div>
  );
};
