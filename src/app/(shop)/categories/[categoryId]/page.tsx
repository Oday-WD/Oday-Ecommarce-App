import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import { SubcategoryCard } from "@/components/categories/SubcategoryCard/SubcategoryCard";
import { PageHeader } from "@/components/shared/PageHeader/PageHeader";
import {
  getCategoryById,
  getSubcategoriesByCategoryId,
} from "@/services/category.service";
import { Loader } from "@/components/shared/Loader/Loader";

interface CategoryDetailsContentProps {
  params: PageProps<"/categories/[categoryId]">["params"];
}

async function CategoryDetailsContent({ params }: CategoryDetailsContentProps) {
  const { categoryId } = await params;

  const [{ data: category }, { data }] = await Promise.all([
    getCategoryById(categoryId),
    getSubcategoriesByCategoryId(categoryId),
  ]);

  const subcategories = data.filter(
    (subcategory) => subcategory.category === categoryId,
  );

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        title={category.name}
        description="Choose a subcategory to browse products"
        icon={
          <Image
            src={category.image}
            alt={category.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl object-contain"
          />
        }
        breadcrumb={[
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />

      <div className="container mx-auto px-4 py-10">
        <Link
          href="/categories"
          className="mb-6 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-primary-600"
        >
          <FaArrowLeft />
          <span>Back to Categories</span>
        </Link>

        {subcategories.length > 0 ? (
          <>
            <h2 className="mb-6 text-lg font-bold text-gray-900">
              {subcategories.length}{" "}
              {subcategories.length === 1 ? "Subcategory" : "Subcategories"} in{" "}
              {category.name}
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {subcategories.map((subcategory) => (
                <SubcategoryCard
                  key={subcategory._id}
                  subcategory={subcategory}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            title="No Subcategories Yet"
            description={`Browse all ${category.name} products instead.`}
            action={{
              label: "View Products",
              href: `/products?category=${category._id}`,
            }}
          />
        )}
      </div>
    </main>
  );
}

export default function CategoryDetailsPage({
  params,
}: CategoryDetailsContentProps) {
  return (
    <Suspense fallback={<Loader text="Loading category..." />}>
      <CategoryDetailsContent params={params} />
    </Suspense>
  );
}
