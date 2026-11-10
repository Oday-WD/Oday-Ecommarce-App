import { Suspense } from "react";
import { FaTags } from "react-icons/fa6";
import { ProductsGrid } from "@/components/products/ProductsGrid/ProductsGrid";
import { ActiveFilters } from "@/components/shared/ActiveFilters/ActiveFilters";
import { Loader } from "@/components/shared/Loader/Loader";
import { LogoIcon } from "@/components/shared/LogoIcon/LogoIcon";
import { PageHeader } from "@/components/shared/PageHeader/PageHeader";
import { getBrandById } from "@/services/brand.service";
import { searchProducts } from "@/services/product.service";
interface BrandDetailsContentProps {
  params: PageProps<"/brands/[brandId]">["params"];
}

async function BrandDetailsContent({ params }: BrandDetailsContentProps) {
  const { brandId } = await params;

  const [{ data: brand }, { data: products }] = await Promise.all([
    getBrandById(brandId),
    searchProducts({ brands: [brandId] }),
  ]);

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        compact
        variant="violet"
        title={brand.name}
        description={`Shop ${brand.name} products`}
        icon={<LogoIcon src={brand.image} alt={brand.name} />}
        breadcrumb={[
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <ActiveFilters
          filters={[
            {
              label: brand.name,
              icon: <FaTags className="text-xs" />,
              className: "bg-violet-100 text-violet-700 hover:bg-violet-200",
            },
          ]}
        />
        <ProductsGrid products={products} filtered />
      </div>
    </main>
  );
}

export default function BrandDetailsPage({ params }: BrandDetailsContentProps) {
  return (
    <Suspense fallback={<Loader text="Loading brand..." />}>
      <BrandDetailsContent params={params} />
    </Suspense>
  );
}
