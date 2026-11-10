import type { Product } from "@/interfaces/product.interface";

export interface WishlistResponse {
  status: string;
  count: number;
  data: Product[];
}

export interface WishlistMutationResponse {
  status: string;
  message: string;
  data: string[];
}