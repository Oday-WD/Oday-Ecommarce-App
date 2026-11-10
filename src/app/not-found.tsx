import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

import { NotFoundBackground } from "@/components/not-found/NotFoundBackground";
import { NotFoundIllustration } from "@/components/not-found/NotFoundIllustration";
import { PopularDestinations } from "@/components/not-found/PopularDestinations";
import { GoBackButton } from "@/components/shared/GoBackButton/GoBackButton";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fafbfc] px-4 py-16">
      <NotFoundBackground />

      <div className="relative z-10 w-full max-w-xl">
        <NotFoundIllustration />

        {/* Message */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Oops! Nothing Here
          </h1>
          <p className="mx-auto max-w-md text-lg leading-relaxed text-gray-500">
            Looks like this page went out of stock! Don&apos;t worry,
            there&apos;s plenty more fresh content to explore.
          </p>
        </div>

        {/* Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 sm:w-auto"
          >
            <FaHouse className="transition-transform duration-300 group-hover:scale-110" />
            Go to Homepage
          </Link>
          <GoBackButton />
        </div>

        <PopularDestinations />
      </div>
    </main>
  );
}