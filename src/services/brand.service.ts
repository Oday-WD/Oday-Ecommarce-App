"use cache";

import { cacheLife } from "next/cache";
import { fetchPublic } from "@/lib/public-fetch";
import type {
  BrandDetailsResponse,
  BrandResponse,
} from "@/types/response.type";

export async function getBrands(): Promise<BrandResponse> {
  cacheLife("hours");
  return fetchPublic("brands", "brands");
}

export async function getBrandById(id: string): Promise<BrandDetailsResponse> {
  cacheLife("hours");
  return fetchPublic(`brands/${id}`, `brand ${id}`);
}