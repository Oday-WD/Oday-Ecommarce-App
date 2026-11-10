"use client";

import { useState, useTransition } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";
import {
  deleteReviewAction,
  updateReviewAction,
} from "@/actions/review.actions";
import { ReviewForm } from "@/components/products/ReviewForm/ReviewForm";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog/ConfirmDialog";
import { FormDialog } from "@/components/shared/FormDialog/FormDialog";
import { DialogTrigger } from "@/components/ui/dialog";
import type { Review } from "@/interfaces/product.interface";
import { notify } from "@/lib/notify";

// edit and delete buttons for the review owner
export const ReviewActions = ({ review }: { review: Review }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const remove = () =>
    startTransition(async () => {
      notify(await deleteReviewAction(review._id, review.product));
      setDeleteOpen(false);
    });

  return (
    <div className="flex items-center gap-1">
      {/* Edit */}
      <FormDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        trigger={
          <DialogTrigger
            title="Edit review"
            aria-label="Edit review"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-primary-100 hover:text-primary-600"
          >
            <FaPen className="text-xs" />
          </DialogTrigger>
        }
        title="Edit Review"
        description="Update your rating or comment."
      >
        <ReviewForm
          defaultValues={{ rating: review.rating, review: review.review }}
          submitLabel="Save Changes"
          action={(values) =>
            updateReviewAction(review._id, review.product, values)
          }
          onSuccess={() => setEditOpen(false)}
        />
      </FormDialog>

      {/* Delete */}
      <button
        type="button"
        title="Delete review"
        aria-label="Delete review"
        onClick={() => setDeleteOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-red-100 hover:text-red-600"
      >
        <FaTrash className="text-xs" />
      </button>

      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Delete Review?"
        description="This will permanently remove your review."
        confirmLabel="Delete"
        pending={pending}
        onConfirm={remove}
      />
    </div>
  );
};