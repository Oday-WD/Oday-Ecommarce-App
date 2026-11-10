import { Suspense } from "react";
import { ProductsGrid } from "@/components/products/ProductsGrid/ProductsGrid";
import {
  getActiveFilters,
  getProductsHeader,
} from "@/components/products/ProductsPage/productsHeader";
import { ActiveFilters } from "@/components/shared/ActiveFilters/ActiveFilters";
import { Loader } from "@/components/shared/Loader/Loader";
import { PageHeader } from "@/components/shared/PageHeader/PageHeader";
import { firstParam } from "@/lib/search-params";
import { getBrandById } from "@/services/brand.service";
import { getCategoryById } from "@/services/category.service";
import { searchProducts } from "@/services/product.service";
import { getSubcategoryById } from "@/services/subcategory.service";

interface ProductsContentProps {
  searchParams: PageProps<"/products">["searchParams"];
}

// a missing filter name should not break the page
const safe = <T,>(promise: Promise<T>) => promise.catch(() => null);

async function ProductsContent({ searchParams }: ProductsContentProps) {
  const params = await searchParams;
  const categoryId = firstParam(params.category);
  const subcategoryId = firstParam(params.subcategory);
  const brandId = firstParam(params.brand);

  // products and the names of the active filters
  const [productsRes, categoryRes, subcategoryRes, brandRes] =
    await Promise.all([
      searchProducts({
        categories: categoryId ? [categoryId] : [],
        subcategory: subcategoryId,
        brands: brandId ? [brandId] : [],
      }),
      categoryId ? safe(getCategoryById(categoryId)) : null,
      subcategoryId ? safe(getSubcategoryById(subcategoryId)) : null,
      brandId ? safe(getBrandById(brandId)) : null,
    ]);

  const filters = {
    category: categoryRes?.data,
    subcategory: subcategoryRes?.data,
    brand: brandRes?.data,
  };

  const header = getProductsHeader(filters);

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader compact {...header} />

      <div className="container mx-auto px-4 py-8">
        <ActiveFilters filters={getActiveFilters(filters)} />
        <ProductsGrid
          products={productsRes.data}
          filtered={Boolean(categoryId || subcategoryId || brandId)}
        />
      </div>
    </main>
  );
}

export default function ProductsPage({ searchParams }: ProductsContentProps) {
  return (
    <Suspense fallback={<Loader text="Loading products..." />}>
      <ProductsContent searchParams={searchParams} />
    </Suspense>
  );
}