"use client";

import { useState, type FormEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

// big search input on the results page, updates the url keyword
export const SearchBar = ({ defaultValue }: { defaultValue: string }) => {
  const update = useUpdateSearchParams();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const keyword = query.trim();

    update((params) => {
      if (keyword) params.set("q", keyword);
      else params.delete("q");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="relative">
        <FaMagnifyingGlass className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for products..."
          aria-label="Search for products"
          className="h-12! rounded-xl! border-gray-200! pr-4! pl-12! text-lg! focus-visible:border-primary-500! focus-visible:ring-primary-500/20!"
        />
      </div>
    </form>
  );
};
