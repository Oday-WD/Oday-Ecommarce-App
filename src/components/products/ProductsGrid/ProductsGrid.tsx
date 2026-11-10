import { FaBoxOpen } from "react-icons/fa6";
import { ProductCard } from "@/components/products/ProductCard/ProductCard";
import { EmptyState } from "@/components/shared/EmptyState/EmptyState";
import type { Product } from "@/interfaces/product.interface";

interface ProductsGridProps {
  products: Product[];
  filtered?: boolean;
}

export const ProductsGrid = ({
  products,
  filtered = false,
}: ProductsGridProps) => (
  <>
    {/* Count */}
    <div className="mb-6 text-sm text-gray-500">
      Showing {products.length} product{products.length !== 1 ? "s" : ""}
    </div>

    {/* Grid or empty state */}
    {products.length > 0 ? (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    ) : (
      <EmptyState
        icon={<FaBoxOpen />}
        title="No Products Found"
        description={
          filtered
            ? "No products match your current filters."
            : "Products will appear here once available."
        }
        action={
          filtered
            ? { label: "View All Products", href: "/products" }
            : undefined
        }
      />
    )}
  </>
);