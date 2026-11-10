import { ProductCard } from "@/components/products/ProductCard/ProductCard";
import { SectionTitle } from "@/components/shared/SectionTitle/SectionTitle";
import { getProducts } from "@/services/product.service";

export const FeaturedProducts = async () => {
  const { data: products } = await getProducts();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionTitle
          title="Featured"
          highlight="Products"
          className="my-8"
          headingClass="text-3xl"
        />

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};