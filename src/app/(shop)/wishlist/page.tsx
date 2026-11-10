import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaHeart } from "react-icons/fa6";
import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import { Loader } from "@/components/shared/Loader/Loader";
import { EmptyWishlist } from "@/components/wishlist/EmptyWishlist/EmptyWishlist";
import { WishlistHeader } from "@/components/wishlist/WishlistHeader/WishlistHeader";
import { WishlistTable } from "@/components/wishlist/WishlistTable/WishlistTable";
import { getApiToken } from "@/lib/auth-session";
import { getWishlist } from "@/services/wishlist.service";

async function WishlistContent() {
  const token = await getApiToken();
  if (!token) redirect("/login");

  const result = await getWishlist(token).catch(() => null);

  if (!result) {
    return (
      <EmptyState
        icon={<FaHeart />}
        title="Couldn't load your wishlist"
        description="Please try again in a moment."
      />
    );
  }

  const products = result.data;
  if (products.length === 0) return <EmptyWishlist />;

  return (
    <main className="min-h-screen bg-gray-50/50">
      <WishlistHeader count={products.length} />

      <div className="container mx-auto px-4 py-8">
        <WishlistTable products={products} />

        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/products"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-primary-600"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function WishlistPage() {
  return (
    <Suspense fallback={<Loader text="Loading your wishlist..." />}>
      <WishlistContent />
    </Suspense>
  );
}