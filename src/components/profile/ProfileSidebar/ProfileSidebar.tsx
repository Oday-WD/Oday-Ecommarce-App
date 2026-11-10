"use client";

import { usePathname } from "next/navigation";
import { FaGear, FaLocationDot } from "react-icons/fa6";
import { SidebarLink } from "./SidebarLink";

const links = [
  { label: "My Addresses", href: "/profile/addresses", icon: FaLocationDot },
  { label: "Settings", href: "/profile/settings", icon: FaGear },
];

export const ProfileSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 p-4">
        <h2 className="font-bold text-gray-900">My Account</h2>
      </div>

      <ul className="p-2">
        {links.map((link) => (
          <SidebarLink
            key={link.href}
            {...link}
            active={pathname.startsWith(link.href)}
          />
        ))}
      </ul>
    </nav>
  );
};