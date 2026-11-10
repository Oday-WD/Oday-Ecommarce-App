import { FaMagnifyingGlass } from "react-icons/fa6";
import { ProductCard } from "@/components/products/ProductCard/ProductCard";
import { ProductListItem } from "@/components/products/ProductListItem/ProductListItem";
import { ActiveSearchFilters } from "@/components/search/ActiveSearchFilters/ActiveSearchFilters";
import { Pagination } from "@/components/search/Pagination/Pagination";
import { SearchToolbar } from "@/components/search/SearchToolbar/SearchToolbar";
import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import type { Product } from "@/interfaces/product.interface";

type View = "grid" | "list";

// products as a grid or as rows
const ProductsView = ({
  products,
  view,
}: {
  products: Product[];
  view: View;
}) =>
  view === "list" ? (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductListItem key={product._id} product={product} />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );

interface SearchResultsProps {
  products: Product[];
  categories: Category[];
  brands: Brand[];
  sort: string;
  view: View;
  currentPage: number;
  totalPages: number;
}

// toolbar, active filters, products and pagination
export const SearchResults = ({
  products,
  categories,
  brands,
  sort,
  view,
  currentPage,
  totalPages,
}: SearchResultsProps) => (
  <div className="min-w-0 flex-1">
    <SearchToolbar
      categories={categories}
      brands={brands}
      sort={sort}
      view={view}
    />
    <ActiveSearchFilters categories={categories} brands={brands} />

    {products.length > 0 ? (
      <ProductsView products={products} view={view} />
    ) : (
      <EmptyState
        icon={<FaMagnifyingGlass />}
        title="No Products Found"
        description="Try adjusting your search or filters to find what you're looking for."
        action={{ label: "Clear Filters", href: "/search" }}
      />
    )}

    <Pagination currentPage={currentPage} totalPages={totalPages} />
  </div>
);
