import type { Product } from "@/interfaces/product.interface";

// category, brand and sales facts
export const ProductSpecs = ({ product }: { product: Product }) => {
  const { category, subcategory, brand, sold } = product;

  const info = [
    { label: "Category", value: category.name },
    ...(subcategory[0]
      ? [{ label: "Subcategory", value: subcategory[0].name }]
      : []),
    { label: "Brand", value: brand.name },
    { label: "Items Sold", value: `${sold}+ sold` },
  ];

  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <h4 className="mb-3 font-medium text-gray-900">Product Information</h4>
      <ul className="space-y-2">
        {info.map(({ label, value }) => (
          <li key={label} className="flex justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-gray-900">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
