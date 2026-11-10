"use client";

import {
  FaBoxOpen,
  FaGear,
  FaRegAddressBook,
  FaRegCircleUser,
  FaRegHeart,
  FaRegUser,
  FaRightFromBracket,
} from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSignOut } from "@/hooks/useSignOut";
import type { SessionUser } from "@/interfaces/auth.interface";
import { AccountMenuHeader } from "./AccountMenuHeader";
import { NavMenuItem } from "./NavMenuItem";

const items = [
  { label: "My Profile", href: "/profile", icon: FaRegUser },
  { label: "My Orders", href: "/orders", icon: FaBoxOpen },
  { label: "My Wishlist", href: "/wishlist", icon: FaRegHeart },
  { label: "Addresses", href: "/profile/addresses", icon: FaRegAddressBook },
  { label: "Settings", href: "/profile/settings", icon: FaGear },
];

export const AccountMenu = ({ user }: { user: SessionUser }) => {
  const { signOut } = useSignOut();

  return (
    <div className="hidden lg:block">
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger
          title="Account"
          aria-label="Account"
          className="group rounded-full p-2.5 outline-none transition-colors hover:bg-gray-100 aria-expanded:bg-gray-100"
        >
          <FaRegCircleUser className="text-xl text-gray-500 transition-colors group-hover:text-primary-600" />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="w-64 rounded-2xl! p-0!"
        >
          <AccountMenuHeader user={user} />

          {/* Pages */}
          <DropdownMenuGroup className="py-2">
            {items.map(({ label, href, icon: Icon }) => (
              <NavMenuItem key={href} href={href}>
                <Icon className="w-4 text-gray-400" />
                {label}
              </NavMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="m-0!" />

          {/* Sign out */}
          <DropdownMenuGroup className="py-2">
            <DropdownMenuItem
              variant="destructive"
              onClick={signOut}
              className="gap-3! px-4! py-2.5! text-sm"
            >
              <FaRightFromBracket className="w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};