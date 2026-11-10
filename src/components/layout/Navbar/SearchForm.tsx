"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchFormProps {
  variant: "desktop" | "mobile";
  onSearch?: () => void;
}

// styles per layout
const styles = {
  desktop: {
    form: "hidden max-w-2xl flex-1 lg:flex",
    input:
      "h-11! rounded-full! border-gray-200! bg-gray-50/50! px-5! pr-12! text-sm! focus-visible:border-primary-500! focus-visible:bg-white! focus-visible:ring-primary-500/20!",
    button:
      "absolute top-1 right-1 h-9! w-9! rounded-full! bg-primary-600! text-white! hover:bg-primary-700!",
    placeholder: "Search for products, brands and more...",
  },
  mobile: {
    form: "border-b border-gray-100 p-4",
    input:
      "h-11! rounded-xl! border-gray-200! bg-gray-50! px-4! pr-12! text-sm! focus-visible:border-primary-500! focus-visible:bg-white! focus-visible:ring-primary-500/20!",
    button:
      "absolute top-1.5 right-1.5 h-8! w-8! rounded-lg! bg-primary-600! text-white! hover:bg-primary-700!",
    placeholder: "Search products...",
  },
} as const;

// navbar search, sends the user to the results page
export const SearchForm = ({ variant, onSearch }: SearchFormProps) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const style = styles[variant];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const keyword = query.trim();
    if (!keyword) return;

    router.push(`/search?q=${encodeURIComponent(keyword)}`);
    onSearch?.();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className="relative w-full">
        <Input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={style.placeholder}
          aria-label="Search products"
          className={style.input}
        />
        <Button
          type="submit"
          size="icon"
          aria-label="Search"
          className={style.button}
        >
          <FaMagnifyingGlass className="text-sm" />
        </Button>
      </div>
    </form>
  );
};