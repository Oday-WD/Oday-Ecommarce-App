import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import { SubcategoryCard } from "@/components/categories/SubcategoryCard/SubcategoryCard";
import type { Category } from "@/interfaces/category.interface";
import type { Subcategory } from "@/interfaces/subcategory.interface";

interface SubcategoriesSectionProps {
  category: Category;
  subcategories: Subcategory[];
}

// subcategories grid, or a link to all the category products
export const SubcategoriesSection = ({
  category,
  subcategories,
}: SubcategoriesSectionProps) => {
  if (subcategories.length === 0) {
    return (
      <EmptyState
        title="No Subcategories Yet"
        description={`Browse all ${category.name} products instead.`}
        action={{
          label: "View Products",
          href: `/products?category=${category._id}`,
        }}
      />
    );
  }

  return (
    <>
      <h2 className="mb-6 text-lg font-bold text-gray-900">
        {subcategories.length}{" "}
        {subcategories.length === 1 ? "Subcategory" : "Subcategories"} in{" "}
        {category.name}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {subcategories.map((subcategory) => (
          <SubcategoryCard key={subcategory._id} subcategory={subcategory} />
        ))}
      </div>
    </>
  );
};