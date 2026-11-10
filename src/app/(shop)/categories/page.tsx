import { FaLayerGroup } from "react-icons/fa6";
import { CategoryCard } from "@/components/categories/CategoryCard/CategoryCard";
import { PageHeader } from "@/components/shared/PageHeader/PageHeader";
import { getCategories } from "@/services/category.service";

export default async function CategoriesPage() {
  const { data: categories } = await getCategories();

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="All Categories"
        description="Browse our wide range of product categories"
        icon={<FaLayerGroup className="text-3xl" />}
        breadcrumb={[{ label: "Categories" }]}
      />

      {/* Categories */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              variant="detailed"
            />
          ))}
        </div>
      </div>
    </main>
  );
}