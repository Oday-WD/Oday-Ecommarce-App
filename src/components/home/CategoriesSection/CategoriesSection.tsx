import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { CategoryCard } from "@/components/categories/CategoryCard/CategoryCard";
import { SectionTitle } from "@/components/shared/SectionTitle/SectionTitle";
import { getCategories } from "@/services/category.service";

export const CategoriesSection = async () => {
  const { data: categories } = await getCategories();

  return (
    <section id="categories" className="py-10">
      <div className="container mx-auto px-4">
        {/* Title and link */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
          <SectionTitle
            title="Shop By"
            highlight="Category"
            className="my-8"
            headingClass="text-2xl md:text-3xl"
          />
          <Link
            href="/categories"
            className="text-primary-600 self-end sm:self-auto hover:text-primary-700 font-medium flex items-center cursor-pointer"
          >
            View All Categories
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
};