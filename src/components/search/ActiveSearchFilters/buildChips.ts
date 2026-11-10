import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import { removeParamValue } from "@/lib/search-params";

export interface Chip {
  key: string;
  label: string;
  remove: (params: URLSearchParams) => void;
}

type Source = Pick<URLSearchParams, "get" | "getAll">;

// one chip per selected id, named from the list
const idChips = (
  source: Source,
  param: string,
  items: { _id: string; name: string }[],
): Chip[] =>
  source.getAll(param).flatMap((id) => {
    const name = items.find((item) => item._id === id)?.name;

    return name
      ? [
          {
            key: `${param}-${id}`,
            label: name,
            remove: (params) => removeParamValue(params, param, id),
          },
        ]
      : [];
  });

const priceLabel = (min: string | null, max: string | null) =>
  min && max
    ? `${min} - ${max} EGP`
    : min
      ? `From ${min} EGP`
      : `Up to ${max} EGP`;

// active filters from the url, as removable chips
export function buildChips(
  source: Source,
  categories: Category[],
  brands: Brand[],
): Chip[] {
  const chips: Chip[] = [];

  // Keyword
  const keyword = source.get("q");
  if (keyword) {
    chips.push({
      key: "q",
      label: `"${keyword}"`,
      remove: (params) => params.delete("q"),
    });
  }

  // Categories and brands
  chips.push(...idChips(source, "category", categories));
  chips.push(...idChips(source, "brand", brands));

  // Price
  const min = source.get("min");
  const max = source.get("max");
  if (min || max) {
    chips.push({
      key: "price",
      label: priceLabel(min, max),
      remove: (params) => {
        params.delete("min");
        params.delete("max");
      },
    });
  }

  return chips;
}
