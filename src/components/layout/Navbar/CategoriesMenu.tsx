"use client";

import { FaChevronDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Category } from "@/interfaces/category.interface";
import { NavMenuItem } from "./NavMenuItem";

// categories dropdown, opens on hover
export const CategoriesMenu = ({ categories }: { categories: Category[] }) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      openOnHover
      delay={100}
      className="group flex items-center gap-1.5 py-2 font-medium text-gray-700 outline-none transition-colors hover:text-primary-600"
    >
      Categories
      <FaChevronDown className="text-[10px] transition-transform group-aria-expanded:rotate-180" />
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="start"
      sideOffset={4}
      className="min-w-[200px] rounded-xl! p-0!"
    >
      <DropdownMenuGroup className="py-2">
        <NavMenuItem href="/categories">All Categories</NavMenuItem>
        {categories.map(({ _id, name }) => (
          <NavMenuItem key={_id} href={`/products?category=${_id}`}>
            {name}
          </NavMenuItem>
        ))}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);
