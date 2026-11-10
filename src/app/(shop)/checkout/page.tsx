import { Suspense } from "react";
import { redirect } from "next/navigation";
import { CheckoutForm } from "@/components/checkout/CheckoutForm/CheckoutForm";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader/CheckoutHeader";
import { Loader } from "@/components/shared/Loader/Loader";
import { getApiToken, getSession } from "@/lib/auth-session";
import { getCartTotals } from "@/lib/cart";
import { fetchCart } from "@/lib/cart-session";
import { getAddresses } from "@/services/address.service";

async function CheckoutContent() {
  const token = await getApiToken();
  if (!token) redirect("/login");

  const [cart, addresses, session] = await Promise.all([
    fetchCart(token),
    getAddresses(token)
      .then((res) => res.data)
      .catch(() => []),
    getSession(),
  ]);

  const { items, subtotal, discount, total } = getCartTotals(cart?.data);
  if (items.length === 0) redirect("/cart");

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        <CheckoutHeader />

        <CheckoutForm
          addresses={addresses}
          defaultPhone={session?.user.phone ?? ""}
          items={items}
          subtotal={subtotal}
          discount={discount}
          total={total}
        />
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<Loader text="Preparing checkout..." />}>
      <CheckoutContent />
    </Suspense>
  );
}
