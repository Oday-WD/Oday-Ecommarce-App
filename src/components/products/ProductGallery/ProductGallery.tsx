"use client";

import Image from "next/image";
import "react-image-gallery/styles/image-gallery.css";
import ImageGallery from "react-image-gallery";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  const items = images.map((src) => ({ original: src, thumbnail: src }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
      <ImageGallery
        items={items}
        additionalClass="product-gallery"
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        showBullets={false}
        showThumbnails={items.length > 1}
        thumbnailPosition="bottom"
        // main image
        renderItem={(item) => (
          <div className="relative aspect-square w-full">
            <Image
              src={item.original}
              alt={title}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-contain"
            />
          </div>
        )}
        // thumbnail
        renderThumbInner={(item) => (
          <div className="relative h-16 w-full">
            <Image
              src={item.thumbnail ?? item.original}
              alt={title}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
        )}
      />
    </div>
  );
};