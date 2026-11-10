"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface UpdateOptions {
  resetPage?: boolean;
}

export function useUpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    update: (params: URLSearchParams) => void,
    { resetPage = true }: UpdateOptions = {},
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    update(params);
    if (resetPage) params.delete("page");

    const next = params.toString();
    if (next === searchParams.toString()) return;

    router.push(next ? `${pathname}?${next}` : pathname, { scroll: false });
  };
}
