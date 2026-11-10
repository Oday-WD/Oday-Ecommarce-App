"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HeroSlide } from "./HeroSlide";
import { SlideArrow } from "./SlideArrow";
import { slides } from "./slides";

export const MainSlide = () => (
  <div className="relative">
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={0}
      loop
      pagination={{ clickable: true }}
      navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.title}>
          {/* Only the first slide animates on load */}
          <HeroSlide slide={slide} animate={index === 0} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Arrows */}
    <SlideArrow direction="prev" />
    <SlideArrow direction="next" />
  </div>
);
