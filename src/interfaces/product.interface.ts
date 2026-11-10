import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import type { Subcategory } from "@/interfaces/subcategory.interface";

export type ProductCategory = Pick<Category, "_id" | "name" | "slug" | "image">;
export type ProductBrand = Pick<Brand, "_id" | "name" | "slug" | "image">;
export type ProductSubcategory = Pick<
  Subcategory,
  "_id" | "name" | "slug" | "category"
>;

export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images: string[];
  availableColors?: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  category: ProductCategory;
  brand: ProductBrand;
  subcategory: ProductSubcategory[];
  createdAt: string;
  updatedAt: string;
}

export interface ReviewUser {
  _id: string;
  name: string;
}

export interface Review {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: ReviewUser;
  createdAt: string;
  updatedAt: string;
}

export interface ProductSearchParams {
  keyword?: string;
  categories?: string[];
  subcategory?: string;
  brands?: string[];
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
}

export interface ProductDetails extends Product {
  reviews: Review[];
}

