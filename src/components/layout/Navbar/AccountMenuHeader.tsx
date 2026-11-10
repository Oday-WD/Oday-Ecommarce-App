import { FaRegCircleUser } from "react-icons/fa6";
import type { SessionUser } from "@/interfaces/auth.interface";

// user name and email at the top of the menu
export const AccountMenuHeader = ({ user }: { user: SessionUser }) => (
  <div className="border-b border-gray-100 p-4">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100">
        <FaRegCircleUser className="text-xl text-primary-600" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-gray-800">
          {user.name}
        </p>
        <p className="truncate text-xs text-gray-400">{user.email}</p>
      </div>
    </div>
  </div>
);
