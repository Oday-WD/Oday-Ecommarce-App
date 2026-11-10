import { getApiToken } from "@/lib/auth-session";
import { getWishlist } from "@/services/wishlist.service";

export async function getWishlistIds(): Promise<string[]> {
  const token = await getApiToken();
  if (!token) return [];

  try {
    const result = await getWishlist(token);
    return result.data.map((product) => product._id);
  } catch {
    return [];
  }
}