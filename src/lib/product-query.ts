import type { ProductSearchParams } from "@/interfaces/product.interface";

// builds "?category[in]=...&price[gte]=..." (empty when there are no filters)
export function buildProductsQuery(params: ProductSearchParams = {}): string {
  const {
    keyword,
    categories = [],
    subcategory,
    brands = [],
    minPrice,
    maxPrice,
    sort,
    page,
    limit,
  } = params;

  const query = new URLSearchParams();

  if (keyword) query.set("keyword", keyword);
  categories.forEach((id) => query.append("category[in]", id));
  if (subcategory) query.set("subcategory", subcategory);
  brands.forEach((id) => query.append("brand[in]", id));
  if (minPrice !== undefined) query.set("price[gte]", String(minPrice));
  if (maxPrice !== undefined) query.set("price[lte]", String(maxPrice));
  if (sort) query.set("sort", sort);
  if (page) query.set("page", String(page));
  if (limit) query.set("limit", String(limit));

  const queryString = query.toString();
  return queryString ? `?${queryString}` : "";
}
