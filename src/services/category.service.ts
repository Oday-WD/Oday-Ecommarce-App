"use cache";

import { cacheLife } from "next/cache";
import { fetchPublic } from "@/lib/public-fetch";
import type {
  CategoryDetailsResponse,
  CategoryResponse,
  SubcategoryResponse,
} from "@/types/response.type";

export async function getCategories(): Promise<CategoryResponse> {
  cacheLife("hours");
  return fetchPublic("categories", "categories");
}

export async function getCategoryById(
  id: string,
): Promise<CategoryDetailsResponse> {
  cacheLife("hours");
  return fetchPublic(`categories/${id}`, `category ${id}`);
}

export async function getSubcategoriesByCategoryId(
  categoryId: string,
): Promise<SubcategoryResponse> {
  cacheLife("hours");
  return fetchPublic(
    `categories/${categoryId}/subcategories`,
    `subcategories of category ${categoryId}`,
  );
}