import type { Metadata } from "next";
import { Exo } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { FeaturesBar } from "@/components/layout/FeaturesBar/FeaturesBar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { TopBar } from "@/components/layout/TopBar/TopBar";
import { Toaster } from "@/components/ui/sonner";
import { WishlistSync } from "@/components/wishlist/WishlistSync/WishlistSync";
import { cn } from "@/lib/utils";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "FreshCart - Fresh groceries delivered to your door",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", exo.variable)}
    >
      <body className="min-h-full flex flex-col font-medium">
        {/* Top bar (reads the session, so it streams in) */}
        <Suspense
          fallback={
            <div className="hidden h-10 border-b border-gray-100 lg:block" />
          }
        >
          <TopBar />
        </Suspense>

        {/* Navbar */}
        <Suspense
          fallback={
            <header className="sticky top-0 z-40 h-16 bg-white shadow-sm lg:h-[72px]" />
          }
        >
          <Navbar />
        </Suspense>

        {/* Loads the saved wishlist ids for the hearts */}
        <Suspense fallback={null}>
          <WishlistSync />
        </Suspense>

        {/* Page */}
        {children}

        <FeaturesBar />
        <Footer />
        <Toaster theme="light" richColors position="top-center" />
      </body>
    </html>
  );
}
