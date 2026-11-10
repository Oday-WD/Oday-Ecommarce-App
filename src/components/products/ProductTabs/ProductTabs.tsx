import { FaBox, FaStar, FaTruck } from "react-icons/fa6";
import { ProductDetailsTab } from "@/components/products/ProductDetailsTab/ProductDetailsTab";
import { ProductReviewsTab } from "@/components/products/ProductReviewsTab/ProductReviewsTab";
import { ShippingReturns } from "@/components/products/ShippingReturns/ShippingReturns";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import type { ProductDetails } from "@/interfaces/product.interface";
import { ProductTabsList, type TabItem } from "./ProductTabsList";

interface ProductTabsProps {
  product: ProductDetails;
  currentUserId: string | null;
}

export const ProductTabs = ({ product, currentUserId }: ProductTabsProps) => {
  const reviews = product.reviews ?? [];

  const tabs: TabItem[] = [
    { value: "details", label: "Product Details", icon: FaBox },
    { value: "reviews", label: `Reviews (${reviews.length})`, icon: FaStar },
    { value: "shipping", label: "Shipping & Returns", icon: FaTruck },
  ];

  return (
    <section id="product-details-tabs" className="py-8">
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="details"
          className="gap-0 overflow-hidden rounded-lg bg-white shadow-sm"
        >
          <ProductTabsList tabs={tabs} />

          {/* Details */}
          <TabsContent value="details" className="p-6">
            <ProductDetailsTab product={product} />
          </TabsContent>

          {/* Reviews */}
          <TabsContent value="reviews" className="p-6">
            <ProductReviewsTab
              productId={product._id}
              reviews={reviews}
              average={product.ratingsAverage}
              currentUserId={currentUserId}
            />
          </TabsContent>

          {/* Shipping */}
          <TabsContent value="shipping" className="p-6">
            <ShippingReturns />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
