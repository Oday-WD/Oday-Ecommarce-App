import { DEFAULT_SORT, FILTER_KEYS, SORT_OPTIONS } from "@/lib/search";

type Param = string | string[] | undefined;

/* ---------- Read ---------- */

export const firstParam = (value: Param) =>
  Array.isArray(value) ? value[0] : value;

export const allParams = (value: Param) =>
  value === undefined ? [] : Array.isArray(value) ? value : [value];

const numberParam = (value: Param) => {
  const raw = firstParam(value);
  const parsed = Number(raw);
  return raw && Number.isFinite(parsed) && parsed >= 0 ? parsed : undefined;
};

// turns the page searchParams into typed search filters
export function parseSearchParams(params: Record<string, Param>) {
  const requestedSort = firstParam(params.sort) ?? DEFAULT_SORT;

  return {
    keyword: firstParam(params.q)?.trim() || undefined,
    categoryIds: allParams(params.category),
    brandIds: allParams(params.brand),
    minPrice: numberParam(params.min),
    maxPrice: numberParam(params.max),
    page: Math.max(1, Math.floor(Number(firstParam(params.page))) || 1),
    view:
      firstParam(params.view) === "list" ? ("list" as const) : ("grid" as const),
    sort: SORT_OPTIONS.some((option) => option.value === requestedSort)
      ? requestedSort
      : DEFAULT_SORT,
  };
}

/* ---------- Update ---------- */

// replace all values of a key
export const setParamValues = (
  params: URLSearchParams,
  key: string,
  values: string[],
) => {
  params.delete(key);
  values.forEach((value) => params.append(key, value));
};

// add the value if missing, remove it if present
export const toggleParamValue = (
  params: URLSearchParams,
  key: string,
  id: string,
) => {
  const current = params.getAll(key);
  setParamValues(
    params,
    key,
    current.includes(id)
      ? current.filter((value) => value !== id)
      : [...current, id],
  );
};

export const removeParamValue = (
  params: URLSearchParams,
  key: string,
  id: string,
) =>
  setParamValues(
    params,
    key,
    params.getAll(key).filter((value) => value !== id),
  );

// remove every filter param
export const clearFilterParams = (params: URLSearchParams) =>
  FILTER_KEYS.forEach((key) => params.delete(key));