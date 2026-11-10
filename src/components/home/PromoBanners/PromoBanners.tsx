import { PromoBanner } from "./PromoBanner";
import { banners } from "./banners";

export const PromoBanners = () => (
  <section className="py-10">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {banners.map((banner, index) => (
          <PromoBanner key={banner.title} banner={banner} index={index} />
        ))}
      </div>
    </div>
  </section>
);