import { FaUser } from "react-icons/fa6";

import { ProfileSidebar } from "@/components/profile/ProfileSidebar/ProfileSidebar";
import { PageHeader } from "@/components/shared/PageHeader/PageHeader";

export default function ProfileLayout({ children }: LayoutProps<"/profile">) {
  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <PageHeader
        compact
        title="My Account"
        description="Manage your addresses and account settings"
        icon={<FaUser className="text-3xl" />}
        breadcrumb={[{ label: "My Account" }]}
      />

      {/* Sidebar and content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <aside className="w-full shrink-0 lg:w-72">
            <ProfileSidebar />
          </aside>
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </main>
  );
}