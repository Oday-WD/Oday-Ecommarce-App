import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/freshcart-logo.svg";
import { getSession } from "@/lib/auth-session";
import { getCartCount } from "@/lib/cart-session";
import { NAV_CATEGORIES_LIMIT } from "@/lib/navigation";
import { getCategories } from "@/services/category.service";
import { AccountMenu } from "./AccountMenu";
import { CartLink } from "./CartLink";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { SearchForm } from "./SearchForm";
import { SignInLink } from "./SignInLink";
import { SupportLink } from "./SupportLink";
import { WishlistLink } from "./WishlistLink";

export const Navbar = async () => {
  // data
  const [session, categories, cartCount] = await Promise.all([
    getSession(),
    getCategories()
      .then((res) => res.data.slice(0, NAV_CATEGORIES_LIMIT))
      .catch(() => []),
    getCartCount(),
  ]);

  const user = session
    ? { name: session.user.name, email: session.user.email }
    : null;

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="FreshCart"
              priority
              className="h-6 w-auto lg:h-8"
            />
          </Link>

          {/* Search */}
          <SearchForm variant="desktop" />

          {/* Links */}
          <NavLinks categories={categories} />

          {/* Actions */}
          <div className="flex items-center gap-1 lg:gap-2">
            <SupportLink />
            <WishlistLink />
            <CartLink count={cartCount} />
            {user ? <AccountMenu user={user} /> : <SignInLink />}
            <MobileMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  );
};