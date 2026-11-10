export function calcDiscount(
  price: number,
  priceAfterDiscount?: number,
): number {
  if (!priceAfterDiscount || price <= 0) return 0;
  return Math.round(((price - priceAfterDiscount) / price) * 100);
}

// price after discount when there is one
export function getUnitPrice(
  price: number,
  priceAfterDiscount?: number,
): number {
  return calcDiscount(price, priceAfterDiscount) > 0
    ? (priceAfterDiscount ?? price)
    : price;
}