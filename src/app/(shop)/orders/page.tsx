import { Suspense } from "react";
import { redirect } from "next/navigation";
import { FaBoxOpen } from "react-icons/fa6";
import { NoOrders } from "@/components/orders/NoOrders/NoOrders";
import { OrderCard } from "@/components/orders/OrderCard/OrderCard";
import { OrdersHeader } from "@/components/orders/OrdersHeader/OrdersHeader";
import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import { Loader } from "@/components/shared/Loader/Loader";
import { getApiToken, getSession } from "@/lib/auth-session";
import { getUserOrders } from "@/services/order.service";

async function OrdersContent() {
  const [session, token] = await Promise.all([getSession(), getApiToken()]);
  if (!session || !token) redirect("/login");

  const result = await getUserOrders(token, session.user.id).catch(() => null);

  if (!result) {
    return (
      <EmptyState
        icon={<FaBoxOpen />}
        title="Couldn't load your orders"
        description="Please try again in a moment."
      />
    );
  }

  if (result.length === 0) return <NoOrders />;

  // newest first
  const orders = [...result].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <OrdersHeader count={orders.length} />

      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </main>
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<Loader text="Loading your orders..." />}>
      <OrdersContent />
    </Suspense>
  );
}
