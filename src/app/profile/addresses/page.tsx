import { Suspense } from "react";
import { redirect } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { AddressCard } from "@/components/profile/AddressCard/AddressCard";
import { AddressesHeader } from "@/components/profile/AddressesHeader/AddressesHeader";
import { NoAddresses } from "@/components/profile/NoAddresses/NoAddresses";
import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import { Loader } from "@/components/shared/Loader/Loader";
import { getApiToken } from "@/lib/auth-session";
import { getAddresses } from "@/services/address.service";

async function AddressesContent() {
  const token = await getApiToken();
  if (!token) redirect("/login");

  const result = await getAddresses(token).catch(() => null);

  if (!result) {
    return (
      <EmptyState
        icon={<FaLocationDot />}
        title="Couldn't load your addresses"
        description="Please try again in a moment."
      />
    );
  }

  const addresses = result.data;

  return (
    <div>
      <AddressesHeader />

      {/* List or empty state */}
      {addresses.length > 0 ? (
        <div className="space-y-4">
          {addresses.map((address) => (
            <AddressCard key={address._id} address={address} />
          ))}
        </div>
      ) : (
        <NoAddresses />
      )}
    </div>
  );
}

export default function AddressesPage() {
  return (
    <Suspense fallback={<Loader text="Loading addresses..." />}>
      <AddressesContent />
    </Suspense>
  );
}