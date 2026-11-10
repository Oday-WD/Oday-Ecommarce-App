import type { AddressesResponse } from "@/interfaces/address.interface";
import { routeFetch } from "@/lib/route-fetch";
import type { AddressFormValues } from "@/schemas/address.schema";

export const getAddresses = (token: string) =>
  routeFetch<AddressesResponse>("addresses", { token });

export const addAddress = (token: string, payload: AddressFormValues) =>
  routeFetch<AddressesResponse>("addresses", {
    method: "POST",
    token,
    body: payload,
  });

export const removeAddress = (token: string, id: string) =>
  routeFetch<AddressesResponse>(`addresses/${id}`, {
    method: "DELETE",
    token,
  });
