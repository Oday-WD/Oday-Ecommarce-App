"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { addAddressAction } from "@/actions/address.actions";
import { AddressForm } from "@/components/profile/AddressForm/AddressForm";
import { FormDialog } from "@/components/shared/FormDialog/FormDialog";
import { DialogTrigger } from "@/components/ui/dialog";

const base =
  "inline-flex items-center gap-2 rounded-xl bg-primary-600 font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700";

// header: small button, empty: bigger call to action
const triggers = {
  header: { className: `${base} px-5 py-2.5`, iconClass: "text-sm", label: "Add Address" },
  empty: { className: `${base} px-6 py-3`, iconClass: "", label: "Add Your First Address" },
};

export const AddAddressButton = ({
  variant,
}: {
  variant: keyof typeof triggers;
}) => {
  const [open, setOpen] = useState(false);
  const trigger = triggers[variant];

  return (
    <FormDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <DialogTrigger className={trigger.className}>
          <FaPlus className={trigger.iconClass} />
          {trigger.label}
        </DialogTrigger>
      }
      title="Add New Address"
      description="Save a delivery address to make checkout faster."
    >
      {/* Mounts with the dialog, so it starts empty each time */}
      <AddressForm
        defaultValues={{ name: "", city: "", phone: "", details: "" }}
        submitLabel="Save Address"
        submitIcon={<FaPlus />}
        action={addAddressAction}
        onSuccess={() => setOpen(false)}
      />
    </FormDialog>
  );
};