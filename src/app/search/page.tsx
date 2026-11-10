import { Suspense } from "react";
import { FiltersPanel } from "@/components/search/FiltersPanel/FiltersPanel";
import { SearchHeader } from "@/components/search/SearchHeader/SearchHeader";
import { SearchResults } from "@/components/search/SearchResults/SearchResults";
import { Loader } from "@/components/shared/Loader/Loader";
import { parseSearchParams } from "@/lib/search-params";
import { DEFAULT_SORT, SEARCH_PAGE_SIZE } from "@/lib/search";
import { getBrands } from "@/services/brand.service";
import { getCategories } from "@/services/category.service";
import { searchProducts } from "@/services/product.service";

interface SearchContentProps {
  searchParams: PageProps<"/search">["searchParams"];
}

async function SearchContent({ searchParams }: SearchContentProps) {
  const {
    keyword,
    categoryIds,
    brandIds,
    minPrice,
    maxPrice,
    sort,
    page,
    view,
  } = parseSearchParams(await searchParams);

  // data
  const [productsRes, categoriesRes, brandsRes] = await Promise.all([
    searchProducts({
      keyword,
      categories: categoryIds,
      brands: brandIds,
      minPrice,
      maxPrice,
      sort: sort === DEFAULT_SORT ? undefined : sort,
      page,
      limit: SEARCH_PAGE_SIZE,
    }),
    getCategories(),
    getBrands(),
  ]);

  return (
    <main className="min-h-screen bg-gray-50/50">
      <SearchHeader keyword={keyword} total={productsRes.results} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters (desktop) */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6">
              <FiltersPanel
                categories={categoriesRes.data}
                brands={brandsRes.data}
              />
            </div>
          </aside>

          {/* Results */}
          <SearchResults
            products={productsRes.data}
            categories={categoriesRes.data}
            brands={brandsRes.data}
            sort={sort}
            view={view}
            currentPage={productsRes.metadata?.currentPage ?? page}
            totalPages={productsRes.metadata?.numberOfPages ?? 1}
          />
        </div>
      </div>
    </main>
  );
}

export default function SearchPage({ searchParams }: SearchContentProps) {
  return (
    <Suspense fallback={<Loader text="Loading results..." />}>
      <SearchContent searchParams={searchParams} />
    </Suspense>
  );
}