interface AccountInfoProps {
  userId: string;
  role: string;
}

// read-only account facts
export const AccountInfo = ({ userId, role }: AccountInfoProps) => (
  <div className="bg-gray-50 p-6 sm:p-8">
    <h3 className="mb-4 font-bold text-gray-900">Account Information</h3>
    <div className="space-y-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="text-gray-500">User ID</span>
        <span className="font-mono text-gray-700">{userId}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-500">Role</span>
        <span className="rounded-lg bg-primary-100 px-3 py-1 font-medium text-primary-700 capitalize">
          {role}
        </span>
      </div>
    </div>
  </div>
);