// in stock / out of stock pill
export const StockBadge = ({ inStock }: { inStock: boolean }) => (
  <div className="flex items-center gap-2 mb-6">
    <span
      className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full ${
        inStock ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${inStock ? "bg-green-500" : "bg-red-500"}`}
      />
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  </div>
);
