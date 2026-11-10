import { ProductsSlider } from "@/components/products/ProductsSlider/ProductsSlider";
import { searchProducts } from "@/services/product.service";

interface RelatedProductsProps {
  categoryId: string;
  currentProductId: string;
}

// same-category products, current one excluded
export const RelatedProducts = async ({
  categoryId,
  currentProductId,
}: RelatedProductsProps) => {
  const { data } = await searchProducts({ categories: [categoryId] });

  const products = data
    .filter((product) => product._id !== currentProductId)
    .slice(0, 10);

  if (products.length === 0) return null;

  return (
    <ProductsSlider title="You May Also" highlight="Like" products={products} />
  );
};
