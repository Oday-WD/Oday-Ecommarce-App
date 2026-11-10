import { FaCartShopping } from "react-icons/fa6";
import { NavIconLink } from "./NavIconLink";

// cart icon with items count
export const CartLink = ({ count }: { count: number }) => (
  <NavIconLink
    href="/cart"
    label="Cart"
    icon={FaCartShopping}
    count={count}
  />
);