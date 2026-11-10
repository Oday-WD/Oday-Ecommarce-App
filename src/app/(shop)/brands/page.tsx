import { FaTags } from "react-icons/fa6";
import { BrandCard } from "@/components/brands/BrandCard/BrandCard";
import { PageHeader } from "@/components/shared/PageHeader/PageHeader";
import { getBrands } from "@/services/brand.service";

export default async function BrandsPage() {
  const { data: brands } = await getBrands();

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="Top Brands"
        description="Shop from your favorite brands"
        icon={<FaTags className="text-3xl" />}
        breadcrumb={[{ label: "Brands" }]}
        variant="violet"
      />

      {/* Brands */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </div>
    </main>
  );
}