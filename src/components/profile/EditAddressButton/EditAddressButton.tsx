"use client";

import { useState } from "react";
import { FaFloppyDisk, FaPen } from "react-icons/fa6";
import { updateAddressAction } from "@/actions/address.actions";
import { AddressForm } from "@/components/profile/AddressForm/AddressForm";
import { FormDialog } from "@/components/shared/FormDialog/FormDialog";
import { DialogTrigger } from "@/components/ui/dialog";
import type { Address } from "@/interfaces/address.interface";

export const EditAddressButton = ({ address }: { address: Address }) => {
  const [open, setOpen] = useState(false);
  const { _id, name, city, phone, details } = address;

  return (
    <FormDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <DialogTrigger
          title="Edit address"
          aria-label={`Edit address ${name}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-primary-100 hover:text-primary-600"
        >
          <FaPen className="text-sm" />
        </DialogTrigger>
      }
      title="Edit Address"
      description="Update your delivery address details."
    >
      <AddressForm
        defaultValues={{ name, city, phone, details }}
        submitLabel="Save Changes"
        submitIcon={<FaFloppyDisk />}
        action={(values) => updateAddressAction(_id, values)}
        onSuccess={() => setOpen(false)}
      />
    </FormDialog>
  );
};