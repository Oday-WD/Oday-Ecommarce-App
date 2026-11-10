"use client";

import { useTransition } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa6";
import { removeAddressAction } from "@/actions/address.actions";
import { notify } from "@/lib/notify";

interface DeleteAddressButtonProps {
  id: string;
  name: string;
}

// removes the address right away
export const DeleteAddressButton = ({ id, name }: DeleteAddressButtonProps) => {
  const [pending, startTransition] = useTransition();

  const handleDelete = () =>
    startTransition(async () => {
      notify(await removeAddressAction(id));
    });

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={pending}
      title="Delete address"
      aria-label={`Delete address ${name}`}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600 disabled:opacity-50"
    >
      {pending ? (
        <FaSpinner className="animate-spin text-sm" />
      ) : (
        <FaTrash className="text-sm" />
      )}
    </button>
  );
};