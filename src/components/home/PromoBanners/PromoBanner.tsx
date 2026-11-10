import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FadeIn } from "@/components/shared/FadeIn/FadeIn";
import type { Banner } from "./banners";

interface PromoBannerProps {
  banner: Banner;
  index: number;
}

// gradient promo card with discount code
export const PromoBanner = ({ banner, index }: PromoBannerProps) => (
  <FadeIn
    index={index}
    className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${banner.gradient} p-8 text-white`}
  >
    {/* Decoration circles */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

    <div className="relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
        <span>{banner.emoji}</span>
        <span>{banner.badge}</span>
      </div>

      {/* Text */}
      <h3 className="text-2xl md:text-3xl font-bold mb-2">{banner.title}</h3>
      <p className="text-white/80 mb-4">{banner.description}</p>

      {/* Discount and code */}
      <div className="flex items-center gap-4 mb-6">
        <div className="text-3xl font-bold">{banner.discount}</div>
        <div className="text-sm text-white/70">
          Use code: <span className="font-bold text-white">{banner.code}</span>
        </div>
      </div>

      {/* Button */}
      <Link
        href={banner.button.href}
        className={`inline-flex items-center gap-2 bg-white ${banner.buttonColor} px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors`}
      >
        {banner.button.label}
        <FaArrowRight />
      </Link>
    </div>
  </FadeIn>
);
