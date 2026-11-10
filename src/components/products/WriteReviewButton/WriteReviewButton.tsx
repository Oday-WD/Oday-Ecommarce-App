"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPen } from "react-icons/fa6";
import { addReviewAction } from "@/actions/review.actions";
import { ReviewForm } from "@/components/products/ReviewForm/ReviewForm";
import { FormDialog } from "@/components/shared/FormDialog/FormDialog";
import { DialogTrigger } from "@/components/ui/dialog";

const buttonClass =
  "inline-flex items-center gap-2 rounded-lg border-2 border-primary-600 px-5 py-2.5 font-medium text-primary-600 transition hover:bg-primary-50";

interface WriteReviewButtonProps {
  productId: string;
  signedIn: boolean;
}

export const WriteReviewButton = ({
  productId,
  signedIn,
}: WriteReviewButtonProps) => {
  const [open, setOpen] = useState(false);

  // guests are sent to sign in
  if (!signedIn) {
    return (
      <Link href="/login" className={buttonClass}>
        <FaPen className="text-sm" />
        Sign in to write a review
      </Link>
    );
  }

  return (
    <FormDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <DialogTrigger className={buttonClass}>
          <FaPen className="text-sm" />
          Write a Review
        </DialogTrigger>
      }
      title="Write a Review"
      description="Tell others what you think about this product."
    >
      <ReviewForm
        defaultValues={{ rating: 0, review: "" }}
        submitLabel="Submit Review"
        action={(values) => addReviewAction(productId, values)}
        onSuccess={() => setOpen(false)}
      />
    </FormDialog>
  );
};