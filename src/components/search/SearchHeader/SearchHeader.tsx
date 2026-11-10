import Link from "next/link";
import { SearchBar } from "@/components/search/SearchBar/SearchBar";

interface SearchHeaderProps {
  keyword?: string;
  total: number;
}

// breadcrumb, search input and results count
export const SearchHeader = ({ keyword, total }: SearchHeaderProps) => (
  <div className="border-b border-gray-100 bg-white">
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="transition-colors hover:text-primary-600">
          Home
        </Link>
        <span className="text-gray-300">/</span>
        <span className="font-medium text-gray-900">Search Results</span>
      </nav>

      {/* key resets the input when the keyword changes from outside */}
      <SearchBar key={keyword ?? ""} defaultValue={keyword ?? ""} />

      {/* Results count */}
      {keyword && (
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Search Results for &quot;{keyword}&quot;
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            We found {total} product{total !== 1 ? "s" : ""} for you
          </p>
        </div>
      )}
    </div>
  </div>
);
