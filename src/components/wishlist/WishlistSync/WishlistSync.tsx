import { getWishlistIds } from "@/lib/wishlist-session";
import { WishlistHydrator } from "./WishlistHydrator";

export const WishlistSync = async () => {
  const ids = await getWishlistIds();
  return <WishlistHydrator ids={ids} />;
};