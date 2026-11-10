"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import { clearFilterParams, toggleParamValue } from "@/lib/search-params";
import { CheckboxGroup } from "./CheckboxGroup";
import { PriceRange } from "./PriceRange";

interface FiltersPanelProps {
  categories: Category[];
  brands: Brand[];
}

type FilterKey = "category" | "brand";

export const FiltersPanel = ({ categories, brands }: FiltersPanelProps) => {
  const searchParams = useSearchParams();
  const update = useUpdateSearchParams();

  const min = searchParams.get("min") ?? "";
  const max = searchParams.get("max") ?? "";

  // url updates
  const toggle = (key: FilterKey, id: string) =>
    update((params) => toggleParamValue(params, key, id));

  const clear = (key: FilterKey) =>
    update((params) => {
      params.delete(key);
    });

  return (
    <div className="space-y-6">
      {/* Categories */}
      <CheckboxGroup
        title="Categories"
        items={categories}
        selected={searchParams.getAll("category")}
        onToggle={(id) => toggle("category", id)}
        onClear={() => clear("category")}
      />

      <Separator className="bg-gray-100!" />

      {/* Price (key resets the inputs when the url changes from outside) */}
      <PriceRange key={`${min}-${max}`} min={min} max={max} />

      <Separator className="bg-gray-100!" />

      {/* Brands */}
      <CheckboxGroup
        title="Brands"
        items={brands}
        selected={searchParams.getAll("brand")}
        onToggle={(id) => toggle("brand", id)}
        onClear={() => clear("brand")}
      />

      <Separator className="bg-gray-100!" />

      {/* Clear all */}
      <Button
        type="button"
        variant="outline"
        onClick={() => update(clearFilterParams)}
        className="h-auto! w-full! rounded-lg! border-gray-200! py-2.5! text-sm! font-medium text-gray-600! hover:border-gray-300! hover:bg-gray-50!"
      >
        Clear All Filters
      </Button>
    </div>
  );
};
