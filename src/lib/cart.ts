import type {
  Cart,
  CartItem,
  PopulatedCartItem,
} from "@/interfaces/cart.interface";

export const getProductId = (item: CartItem) =>
  typeof item.product === "string" ? item.product : item.product._id;

export function getPopulatedItems(cart?: Cart): PopulatedCartItem[] {
  return (cart?.products ?? []).flatMap((item) => {
    if (typeof item.product === "string") return [];

    const { product } = item;

    return [
      {
        product,
        count: item.count,
        price: item.price ?? product.priceAfterDiscount ?? product.price ?? 0,
      },
    ];
  });
}

export const calcSubtotal = (items: PopulatedCartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.count, 0);

export function getCartTotals(cart?: Cart) {
  const items = getPopulatedItems(cart);
  const subtotal = calcSubtotal(items);
  const totalCartPrice = cart?.totalCartPrice ?? subtotal;
  const afterDiscount = cart?.totalAfterDiscount;
  const discount =
    afterDiscount !== undefined && afterDiscount < totalCartPrice
      ? totalCartPrice - afterDiscount
      : 0;

  return { items, subtotal, discount, total: subtotal - discount };
}
