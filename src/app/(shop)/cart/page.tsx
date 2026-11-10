import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import { CartHeader } from "@/components/cart/CartHeader/CartHeader";
import { CartItemCard } from "@/components/cart/CartItemCard/CartItemCard";
import { CartSummary } from "@/components/cart/CartSummary/CartSummary";
import { ClearCartButton } from "@/components/cart/ClearCartButton/ClearCartButton";
import { EmptyCart } from "@/components/cart/EmptyCart/EmptyCart";
import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import { Loader } from "@/components/shared/Loader/Loader";
import { getApiToken } from "@/lib/auth-session";
import { getCartTotals } from "@/lib/cart";
import { fetchCart } from "@/lib/cart-session";

async function CartContent() {
  const token = await getApiToken();
  if (!token) redirect("/login");

  const result = await fetchCart(token);

  if (!result) {
    return (
      <EmptyState
        icon={<FaCartShopping />}
        title="Couldn't load your cart"
        description="Please try again in a moment."
      />
    );
  }

  const { items, subtotal, discount } = getCartTotals(result.data);
  if (items.length === 0) return <EmptyCart />;

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <CartHeader itemCount={items.length} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemCard key={item.product._id} {...item} />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                <span>←</span> Continue Shopping
              </Link>
              <ClearCartButton />
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              subtotal={subtotal}
              itemCount={items.length}
              discount={discount}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<Loader text="Loading your cart..." />}>
      <CartContent />
    </Suspense>
  );
}
