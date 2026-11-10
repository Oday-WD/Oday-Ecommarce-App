import { WishlistRow } from "@/components/wishlist/WishlistRow/WishlistRow";
import type { Product } from "@/interfaces/product.interface";

// column titles (desktop) and one row per saved product
export const WishlistTable = ({ products }: { products: Product[] }) => (
  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
    <div className="hidden grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50 px-6 py-4 text-sm font-medium text-gray-500 md:grid">
      <div className="col-span-6">Product</div>
      <div className="col-span-2 text-center">Price</div>
      <div className="col-span-2 text-center">Status</div>
      <div className="col-span-2 text-center">Actions</div>
    </div>

    <div className="divide-y divide-gray-100">
      {products.map((product) => (
        <WishlistRow key={product._id} product={product} />
      ))}
    </div>
  </div>
);
