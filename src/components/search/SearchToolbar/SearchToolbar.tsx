import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import { MobileFilters } from "./MobileFilters";
import { SortSelect } from "./SortSelect";
import { ViewToggle } from "./ViewToggle";

interface SearchToolbarProps {
  categories: Category[];
  brands: Brand[];
  sort: string;
  view: "grid" | "list";
}

export const SearchToolbar = ({
  categories,
  brands,
  sort,
  view,
}: SearchToolbarProps) => (
  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
    {/* Filters and view */}
    <div className="flex items-center gap-4">
      <MobileFilters categories={categories} brands={brands} />
      <ViewToggle view={view} />
    </div>

    {/* Sort */}
    <SortSelect sort={sort} />
  </div>
);