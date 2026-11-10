"use cache";

import { cacheLife, cacheTag } from "next/cache";
import type { ProductSearchParams } from "@/interfaces/product.interface";
import { buildProductsQuery } from "@/lib/product-query";
import { fetchPublic } from "@/lib/public-fetch";
import type {
  ProductDetailsResponse,
  ProductResponse,
} from "@/types/response.type";

export async function getProducts(): Promise<ProductResponse> {
  cacheLife("hours");
  return fetchPublic("products", "products");
}

export async function getProductById(
  id: string,
): Promise<ProductDetailsResponse> {
  cacheLife("hours");
  cacheTag(`product-${id}`);
  return fetchPublic(`products/${id}`, `product ${id}`);
}

export async function searchProducts(
  params: ProductSearchParams = {},
): Promise<ProductResponse> {
  cacheLife("hours");
  return fetchPublic(`products${buildProductsQuery(params)}`, "products");
}