"use client";

import { FaSliders } from "react-icons/fa6";
import { FiltersPanel } from "@/components/search/FiltersPanel/FiltersPanel";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";

// filters drawer (mobile only)
export const MobileFilters = ({
  categories,
  brands,
}: {
  categories: Category[];
  brands: Brand[];
}) => (
  <Sheet>
    <SheetTrigger
      render={
        <Button
          variant="outline"
          className="h-10! gap-2 px-4! text-sm font-medium text-gray-700 lg:hidden"
        />
      }
    >
      <FaSliders />
      Filters
    </SheetTrigger>
    <SheetContent side="left" className="w-80! max-w-[85vw]! overflow-y-auto">
      <SheetHeader>
        <SheetTitle>Filters</SheetTitle>
      </SheetHeader>
      <div className="p-4">
        <FiltersPanel categories={categories} brands={brands} />
      </div>
    </SheetContent>
  </Sheet>
);
