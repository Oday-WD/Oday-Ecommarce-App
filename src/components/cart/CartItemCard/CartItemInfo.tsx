import Link from "next/link";

interface CartItemInfoProps {
  href: string;
  title: string;
  category?: string;
  sku: string;
  price: number;
}

// title, category, sku and unit price
export const CartItemInfo = ({
  href,
  title,
  category,
  sku,
  price,
}: CartItemInfoProps) => (
  <>
    <div className="mb-3">
      <Link href={href} className="group/title">
        <h3 className="text-base leading-relaxed font-semibold text-gray-900 transition-colors group-hover/title:text-primary-600 sm:text-lg">
          {title}
        </h3>
      </Link>
      <div className="mt-2 flex items-center gap-2">
        {category && (
          <>
            <span className="inline-block rounded-full bg-linear-to-r from-primary-50 to-emerald-50 px-2.5 py-1 text-xs font-medium text-primary-700">
              {category}
            </span>
            <span className="text-xs text-gray-400">•</span>
          </>
        )}
        <span className="text-xs text-gray-500">SKU: {sku}</span>
      </div>
    </div>

    <div className="mb-4">
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-bold text-primary-600">{price} EGP</span>
        <span className="text-xs text-gray-400">per unit</span>
      </div>
    </div>
  </>
);
