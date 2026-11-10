"use client";

import Link from "next/link";
import { motion } from "motion/react";
import homeSlider from "@/assets/images/home-slider.png";
import type { HeroSlideData } from "./slides";

const primaryBtn =
  "inline-block px-6 py-2 rounded-lg font-semibold bg-white border-2 border-white/50 text-green-500 hover:scale-105 transition-transform";
const secondaryBtn =
  "inline-block px-6 py-2 rounded-lg font-semibold bg-transparent border-2 border-white/50 text-white ml-2 hover:scale-105 transition-transform";

// fade-up props when animated, nothing otherwise
const reveal = (animate: boolean, y: number, duration: number, delay = 0) =>
  animate
    ? {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration, delay },
      }
    : {};

interface HeroSlideProps {
  slide: HeroSlideData;
  animate: boolean;
}

export const HeroSlide = ({ slide, animate }: HeroSlideProps) => (
  <div
    className="flex h-100 items-center justify-center"
    style={{
      backgroundImage: `url(${homeSlider.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="h-full w-full bg-linear-to-r from-green-500/90 to-green-400/50 p-4 py-20 text-white">
      <div className="container h-full content-center">
        <motion.h2
          {...reveal(animate, 20, 0.6)}
          className="mb-4 max-w-96 text-3xl font-bold text-white"
        >
          {slide.title}
        </motion.h2>
        <motion.p {...reveal(animate, 20, 0.6, 0.1)}>{slide.subtitle}</motion.p>
        <motion.div {...reveal(animate, 30, 0.8, 0.2)} className="mt-4">
          <Link href={slide.primary.href} className={primaryBtn}>
            {slide.primary.label}
          </Link>
          <Link href={slide.secondary.href} className={secondaryBtn}>
            {slide.secondary.label}
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
);
