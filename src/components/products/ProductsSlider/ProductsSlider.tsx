"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProductCard } from "@/components/products/ProductCard/ProductCard";
import { SectionTitle } from "@/components/shared/SectionTitle/SectionTitle";
import type { Product } from "@/interfaces/product.interface";
import { SliderArrows } from "./SliderArrows";

interface ProductsSliderProps {
  title: string;
  highlight: string;
  products: Product[];
}

export const ProductsSlider = ({
  title,
  highlight,
  products,
}: ProductsSliderProps) => (
  <section id="similar-products" className="py-10">
    <div className="container mx-auto px-4">
      {/* Title and arrows */}
      <div className="mb-6 flex items-center justify-between">
        <SectionTitle
          title={title}
          highlight={highlight}
          headingClass="text-2xl"
        />
        <SliderArrows />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          prevEl: ".products-slider-prev",
          nextEl: ".products-slider-next",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="py-3!"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="h-auto!">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
