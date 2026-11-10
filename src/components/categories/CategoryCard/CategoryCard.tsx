import type { Category } from "@/interfaces/category.interface";
import { CategoryCardCompact } from "./CategoryCardCompact";
import { CategoryCardDetailed } from "./CategoryCardDetailed";

interface CategoryCardProps {
  category: Category;
  variant?: "compact" | "detailed";
}

// compact on the home page, detailed on the categories page
export const CategoryCard = ({
  category,
  variant = "compact",
}: CategoryCardProps) =>
  variant === "compact" ? (
    <CategoryCardCompact category={category} />
  ) : (
    <CategoryCardDetailed category={category} />
  );
