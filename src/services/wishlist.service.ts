import type {
  WishlistMutationResponse,
  WishlistResponse,
} from "@/interfaces/wishlist.interface";
import { routeFetch } from "@/lib/route-fetch";

export const getWishlist = (token: string) =>
  routeFetch<WishlistResponse>("wishlist", { token });

export const addToWishlist = (token: string, productId: string) =>
  routeFetch<WishlistMutationResponse>("wishlist", {
    token,
    method: "POST",
    body: { productId },
  });

export const removeFromWishlist = (token: string, productId: string) =>
  routeFetch<WishlistMutationResponse>(`wishlist/${productId}`, {
    token,
    method: "DELETE",
  });