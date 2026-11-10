import { CategoriesSection } from "@/components/home/CategoriesSection/CategoriesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts/FeaturedProducts";
import { MainSlide } from "@/components/home/MainSlide/MainSlide";
import { Features } from "@/components/home/Features/Features";
import { Newsletter } from "@/components/home/Newsletter/Newsletter";
import { PromoBanners } from "@/components/home/PromoBanners/PromoBanners";

export default function Home() {
  return (
    <>
      {/* Main slider */}
      <MainSlide />
      {/* Features cards*/}
      <Features />
      {/* Category section */}
      <CategoriesSection />
      {/* Promo banners */}
      <PromoBanners />
      {/* Products section */}
      <FeaturedProducts />
      {/* News Letter */}
      <Newsletter />
    </>
  );
}
