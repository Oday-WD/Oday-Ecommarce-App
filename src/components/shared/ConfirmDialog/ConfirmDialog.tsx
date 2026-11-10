"use client";

import type { ReactNode } from "react";
import { FaRegTrashCan, FaSpinner } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: ReactNode;
  confirmLabel: string;
  pending?: boolean;
  onConfirm: () => void;
}

// "are you sure?" dialog for destructive actions
export const ConfirmDialog = ({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  pending = false,
  onConfirm,
}: ConfirmDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent
      showCloseButton={false}
      className="gap-0! rounded-2xl! p-0! sm:max-w-sm!"
    >
      {/* Message */}
      <div className="p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <FaRegTrashCan className="text-3xl text-red-500" />
        </div>
        <DialogTitle className="mb-2 text-xl font-bold text-gray-900">
          {title}
        </DialogTitle>
        <DialogDescription className="text-sm leading-relaxed text-gray-500">
          {description}
        </DialogDescription>
      </div>

      {/* Buttons */}
      <div className="flex flex-row-reverse gap-3 px-6 pb-6">
        <button
          type="button"
          onClick={onConfirm}
          disabled={pending}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition-all hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending && <FaSpinner className="animate-spin" />}
          {confirmLabel}
        </button>
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          disabled={pending}
          className="flex-1 rounded-xl bg-gray-100 px-6 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-200 disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </DialogContent>
  </Dialog>
);
