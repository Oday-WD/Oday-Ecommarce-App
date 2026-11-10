"use client";

import { useSearchParams } from "next/navigation";
import { FaFilter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import { clearFilterParams } from "@/lib/search-params";
import { buildChips } from "./buildChips";
import { FilterChip } from "./FilterChip";

interface ActiveSearchFiltersProps {
  categories: Category[];
  brands: Brand[];
}

export const ActiveSearchFilters = ({
  categories,
  brands,
}: ActiveSearchFiltersProps) => {
  const searchParams = useSearchParams();
  const update = useUpdateSearchParams();

  const chips = buildChips(searchParams, categories, brands);
  if (chips.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-1 text-sm text-gray-500">
        <FaFilter className="text-xs" />
        Active:
      </span>

      {/* Chips */}
      {chips.map(({ key, label, remove }) => (
        <FilterChip key={key} label={label} onRemove={() => update(remove)} />
      ))}

      {/* Clear all */}
      <Button
        type="button"
        variant="link"
        size="xs"
        onClick={() => update(clearFilterParams)}
        className="ml-2 h-auto! p-0! text-xs text-gray-500! underline hover:text-gray-700!"
      >
        Clear all
      </Button>
    </div>
  );
};
