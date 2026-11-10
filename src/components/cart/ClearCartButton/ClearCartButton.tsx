"use client";

import { useState, useTransition } from "react";
import { FaTrash } from "react-icons/fa6";
import { notify } from "@/lib/notify";
import { clearCartAction } from "@/actions/cart.actions";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog/ConfirmDialog";

export const ClearCartButton = () => {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const clear = () =>
    startTransition(async () => {
      notify(await clearCartAction());
      setOpen(false);
    });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-red-500 disabled:opacity-50"
      >
        <FaTrash className="text-xs transition-transform group-hover:scale-110" />
        <span>Clear all items</span>
      </button>

      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Clear Cart?"
        description="This will remove all items from your cart."
        confirmLabel="Clear Cart"
        pending={pending}
        onConfirm={clear}
      />
    </>
  );
};
