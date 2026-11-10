"use server";

import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/interfaces/auth.interface";
import { withToken } from "@/lib/run-action";
import {
  addressSchema,
  type AddressFormValues,
} from "@/schemas/address.schema";
import { addAddress, removeAddress } from "@/services/address.service";

// refreshes the addresses page after each change
const run = (task: (token: string) => Promise<string>) =>
  withToken(task, () => revalidatePath("/profile/addresses"));

// validates the form values, or returns the first error message
function validate(values: AddressFormValues) {
  const parsed = addressSchema.safeParse(values);

  return parsed.success
    ? { ok: true as const, data: parsed.data }
    : {
        ok: false as const,
        message: parsed.error.issues[0]?.message ?? "Invalid address data",
      };
}

export async function addAddressAction(
  values: AddressFormValues,
): Promise<ActionResult> {
  const checked = validate(values);
  if (!checked.ok) return checked;

  return run(async (token) => {
    const data = await addAddress(token, checked.data);
    return data.message ?? "Address added successfully";
  });
}

export async function removeAddressAction(id: string): Promise<ActionResult> {
  return run(async (token) => {
    const data = await removeAddress(token, id);
    return data.message ?? "Address removed successfully";
  });
}

// the API has no update endpoint: add the new address, then remove the old one
export async function updateAddressAction(
  id: string,
  values: AddressFormValues,
): Promise<ActionResult> {
  const checked = validate(values);
  if (!checked.ok) return checked;

  return run(async (token) => {
    await addAddress(token, checked.data);

    try {
      await removeAddress(token, id);
    } catch {
      return "Address saved, but the old copy could not be removed. Please delete it manually.";
    }

    return "Address updated successfully";
  });
}