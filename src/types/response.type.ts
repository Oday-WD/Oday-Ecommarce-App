import type {
  ApiResponse,
  SingleApiResponse,
} from "@/interfaces/api.interface";
import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import type { Product, ProductDetails } from "@/interfaces/product.interface";
import type { Subcategory } from "@/interfaces/subcategory.interface";

export type ProductResponse = ApiResponse<Product>;
export type ProductDetailsResponse = SingleApiResponse<ProductDetails>;
export type CategoryResponse = ApiResponse<Category>;
export type CategoryDetailsResponse = SingleApiResponse<Category>;
export type BrandResponse = ApiResponse<Brand>;
export type BrandDetailsResponse = SingleApiResponse<Brand>;
export type SubcategoryResponse = ApiResponse<Subcategory>;
export type SubcategoryDetailsResponse = SingleApiResponse<Subcategory>;
