export interface CartProduct {
  _id: string;
  id?: string;
  title: string;
  imageCover: string;
  quantity?: number;
  price?: number;
  priceAfterDiscount?: number;
  category?: { _id?: string; name: string };
}

export interface CartItem {
  _id: string;
  count: number;
  price?: number;
  product: CartProduct | string;
}

export interface Cart {
  _id: string;
  products: CartItem[];
  totalCartPrice: number;
  totalAfterDiscount?: number;
}

export interface CartResponse {
  status?: string;
  message?: string;
  numOfCartItems?: number;
  cartId?: string | null;
  data?: Cart;
}

export interface PopulatedCartItem {
  product: CartProduct;
  count: number;
  price: number;
}
