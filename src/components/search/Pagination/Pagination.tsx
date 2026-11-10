"use client";

import type { MouseEvent } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { getPageWindow } from "@/lib/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const disabledClass = "pointer-events-none opacity-50";

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const update = useUpdateSearchParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  // real href, so "open in new tab" works
  const hrefFor = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) params.delete("page");
    else params.set("page", String(page));

    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  // client-side navigation (ctrl / cmd / shift click behave normally)
  const goTo = (page: number) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    if (page < 1 || page > totalPages || page === currentPage) return;

    update(
      (params) => {
        if (page === 1) params.delete("page");
        else params.set("page", String(page));
      },
      { resetPage: false },
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { start, end, pages } = getPageWindow(currentPage, totalPages);
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <PaginationRoot className="mt-10">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href={hrefFor(Math.max(1, currentPage - 1))}
            onClick={goTo(currentPage - 1)}
            aria-disabled={prevDisabled}
            className={prevDisabled ? disabledClass : undefined}
          />
        </PaginationItem>

        {start > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Pages */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={hrefFor(page)}
              isActive={page === currentPage}
              onClick={goTo(page)}
              className="aria-[current=page]:border-primary-600! aria-[current=page]:bg-primary-600! aria-[current=page]:text-white!"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {end < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href={hrefFor(Math.min(totalPages, currentPage + 1))}
            onClick={goTo(currentPage + 1)}
            aria-disabled={nextDisabled}
            className={nextDisabled ? disabledClass : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
};