"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaCartShopping, FaRegHeart } from "react-icons/fa6";
import logo from "@/assets/images/freshcart-logo.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSignOut } from "@/hooks/useSignOut";
import type { SessionUser } from "@/interfaces/auth.interface";
import { MobileNavLinks } from "./MobileNavLinks";
import { MobileRow } from "./MobileRow";
import { MobileSupportLink } from "./MobileSupportLink";
import { MobileUserSection } from "./MobileUserSection";
import { SearchForm } from "./SearchForm";

export const MobileMenu = ({ user }: { user: SessionUser | null }) => {
  const [open, setOpen] = useState(false);
  const { signOut, pending } = useSignOut();

  const handleSignOut = async () => {
    setOpen(false);
    await signOut();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Burger button */}
      <SheetTrigger
        aria-label="Open menu"
        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700 lg:hidden"
      >
        <FaBars />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-80! max-w-[85vw]! gap-0 overflow-y-auto p-0"
      >
        {/* Logo */}
        <SheetHeader className="border-b border-gray-100 bg-gray-50/50 p-4">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Image src={logo} alt="FreshCart" className="h-8 w-auto" />
        </SheetHeader>

        {/* Search */}
        <SearchForm variant="mobile" onSearch={() => setOpen(false)} />

        {/* Pages */}
        <MobileNavLinks />
        <div className="mx-4 border-t border-gray-100" />

        {/* Wishlist and cart */}
        <div className="space-y-1 p-4">
          <MobileRow
            href="/wishlist"
            icon={FaRegHeart}
            label="Wishlist"
            tone="red"
          />
          <MobileRow
            href="/cart"
            icon={FaCartShopping}
            label="Cart"
            tone="primary"
          />
        </div>
        <div className="mx-4 border-t border-gray-100" />

        {/* Account */}
        <MobileUserSection
          user={user}
          pending={pending}
          onSignOut={handleSignOut}
        />

        {/* Support */}
        <MobileSupportLink />
      </SheetContent>
    </Sheet>
  );
};
