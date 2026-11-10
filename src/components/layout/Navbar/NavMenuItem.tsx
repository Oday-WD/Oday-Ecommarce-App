import type { ReactNode } from "react";
import Link from "next/link";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

// dropdown row that links to a page
export const NavMenuItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <DropdownMenuItem
    render={<Link href={href} />}
    className="gap-3! px-4! py-2.5! text-sm text-gray-600 focus:bg-primary-50! focus:text-primary-600! data-highlighted:bg-primary-50! data-highlighted:text-primary-600!"
  >
    {children}
  </DropdownMenuItem>
);