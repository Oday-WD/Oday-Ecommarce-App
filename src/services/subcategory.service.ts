"use cache";

import { cacheLife } from "next/cache";
import { fetchPublic } from "@/lib/public-fetch";
import type { SubcategoryDetailsResponse } from "@/types/response.type";

export async function getSubcategoryById(
  id: string,
): Promise<SubcategoryDetailsResponse> {
  cacheLife("hours");
  return fetchPublic(`subcategories/${id}`, `subcategory ${id}`);
}