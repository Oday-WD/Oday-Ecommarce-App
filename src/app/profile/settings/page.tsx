import { Suspense } from "react";
import { redirect } from "next/navigation";
import { FaLock, FaUser } from "react-icons/fa6";
import { ChangePasswordForm } from "@/components/profile/ChangePasswordForm/ChangePasswordForm";
import { ProfileForm } from "@/components/profile/ProfileForm/ProfileForm";
import { AccountInfo } from "@/components/profile/SettingsSection/AccountInfo";
import { SettingsCard } from "@/components/profile/SettingsSection/SettingsCard";
import { SettingsHeader } from "@/components/profile/SettingsSection/SettingsHeader";
import { Loader } from "@/components/shared/Loader/Loader";
import { getSession, getTokenPayload } from "@/lib/auth-session";

async function SettingsContent() {
  const [session, payload] = await Promise.all([
    getSession(),
    getTokenPayload(),
  ]);

  if (!session) redirect("/login");

  const { name, email, role, phone } = session.user;

  return (
    <div className="space-y-6">
      {/* Page title */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
        <p className="mt-1 text-sm text-gray-500">
          Update your profile information and change your password
        </p>
      </div>

      {/* Profile */}
      <SettingsCard>
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <SettingsHeader
            tone="primary"
            icon={FaUser}
            title="Profile Information"
            subtitle="Update your personal details"
          />
          <ProfileForm defaultValues={{ name, email, phone: phone ?? "" }} />
        </div>
        <AccountInfo userId={payload?.id ?? "—"} role={role ?? "user"} />
      </SettingsCard>

      {/* Password */}
      <SettingsCard>
        <div className="p-6 sm:p-8">
          <SettingsHeader
            tone="amber"
            icon={FaLock}
            title="Change Password"
            subtitle="Update your account password"
          />
          <ChangePasswordForm />
        </div>
      </SettingsCard>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense fallback={<Loader text="Loading settings..." />}>
      <SettingsContent />
    </Suspense>
  );
}
