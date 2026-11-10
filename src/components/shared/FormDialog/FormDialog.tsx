"use client";

import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}

// dialog shell: trigger + title + description + content
export const FormDialog = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
}: FormDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    {trigger}

    <DialogContent className="rounded-3xl! p-6! sm:max-w-md! sm:p-8!">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-900">
          {title}
        </DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
);
