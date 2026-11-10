export const SEARCH_PAGE_SIZE = 12;

export const DEFAULT_SORT = "relevance";

export const SORT_OPTIONS: { value: string; label: string }[] = [
  { value: DEFAULT_SORT, label: "Relevance" },
  { value: "price", label: "Price: Low to High" },
  { value: "-price", label: "Price: High to Low" },
  { value: "-ratingsAverage", label: "Rating: High to Low" },
  { value: "title", label: "Name: A to Z" },
  { value: "-title", label: "Name: Z to A" },
];

export const PRICE_PRESETS = [
  { label: "Under 500", max: 500 },
  { label: "Under 1K", max: 1000 },
  { label: "Under 5K", max: 5000 },
  { label: "Under 10K", max: 10000 },
] as const;

export const FILTER_KEYS = ["q", "category", "brand", "min", "max"] as const;