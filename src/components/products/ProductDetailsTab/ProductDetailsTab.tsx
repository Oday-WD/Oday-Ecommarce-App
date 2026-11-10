import type { Product } from "@/interfaces/product.interface";
import { KeyFeatures } from "./KeyFeatures";
import { ProductDescription } from "./ProductDescription";
import { ProductSpecs } from "./ProductSpecs";

export const ProductDetailsTab = ({ product }: { product: Product }) => (
  <div className="space-y-6">
    {/* Description */}
    <ProductDescription description={product.description} />

    {/* Specs and features */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ProductSpecs product={product} />
      <KeyFeatures />
    </div>
  </div>
);
