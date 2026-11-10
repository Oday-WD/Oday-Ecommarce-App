import { Suspense } from "react";
import { ProductGallery } from "@/components/products/ProductGallery/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo/ProductInfo";
import { ProductTabs } from "@/components/products/ProductTabs/ProductTabs";
import { RelatedProducts } from "@/components/products/RelatedProducts/RelatedProducts";
import { Breadcrumb } from "@/components/shared/Breadcrumb/Breadcrumb";
import { Loader } from "@/components/shared/Loader/Loader";
import { getSession } from "@/lib/auth-session";
import { getProductById } from "@/services/product.service";
import { getProductReviews } from "@/services/review.service";

interface ProductDetailsContentProps {
  params: PageProps<"/products/[productId]">["params"];
}

async function ProductDetailsContent({ params }: ProductDetailsContentProps) {
  const { productId } = await params;

  const [{ data: product }, session, reviews] = await Promise.all([
    getProductById(productId),
    getSession(),
    getProductReviews(productId),
  ]);

  const details = {
    ...product,
    reviews: reviews ?? product.reviews ?? [],
  };

  const subcategory = product.subcategory[0];
  const images = product.images.length ? product.images : [product.imageCover];

  return (
    <>
      <Breadcrumb
        items={[
          {
            label: product.category.name,
            href: `/categories/${product.category._id}`,
          },
          ...(subcategory
            ? [
                {
                  label: subcategory.name,
                  href: `/products?subcategory=${subcategory._id}`,
                },
              ]
            : []),
          { label: product.title },
        ]}
      />

      <section id="product-detail" className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div id="product-images" className="lg:w-1/4">
              <ProductGallery images={images} title={product.title} />
            </div>
            <div id="product-info" className="lg:w-3/4">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      <ProductTabs
        product={details}
        currentUserId={session?.user.id ?? null}
      />

      <Suspense fallback={null}>
        <RelatedProducts
          categoryId={product.category._id}
          currentProductId={product._id}
        />
      </Suspense>
    </>
  );
}

export default function ProductPage({ params }: ProductDetailsContentProps) {
  return (
    <Suspense fallback={<Loader text="Loading product..." />}>
      <ProductDetailsContent params={params} />
    </Suspense>
  );
}