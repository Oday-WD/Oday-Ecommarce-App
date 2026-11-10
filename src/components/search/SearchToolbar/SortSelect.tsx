"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { DEFAULT_SORT, SORT_OPTIONS } from "@/lib/search";

// sort dropdown, stored in the url
export const SortSelect = ({ sort }: { sort: string }) => {
  const update = useUpdateSearchParams();

  const changeSort = (value: string | null) => {
    if (!value) return;

    update((params) => {
      if (value === DEFAULT_SORT) params.delete("sort");
      else params.set("sort", value);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="sort" className="text-sm font-normal text-gray-500">
        Sort by:
      </Label>
      <Select items={SORT_OPTIONS} value={sort} onValueChange={changeSort}>
        <SelectTrigger
          id="sort"
          className="h-10! w-52! rounded-lg! border-gray-200! bg-white! text-sm! focus-visible:border-primary-500! focus-visible:ring-primary-500/20!"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
