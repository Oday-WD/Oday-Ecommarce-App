// up to 5 page numbers around the current page
export function getPageWindow(current: number, total: number) {
  const start = Math.max(1, Math.min(current - 2, total - 4));
  const end = Math.min(total, start + 4);

  return {
    start,
    end,
    pages: Array.from({ length: end - start + 1 }, (_, i) => start + i),
  };
}