import { parseDescription } from "@/lib/description";

// product description lines (label: value when tab-separated)
export const ProductDescription = ({
  description,
}: {
  description: string;
}) => (
  <div>
    <h3 className="mb-3 text-lg font-semibold text-gray-900">
      About this Product
    </h3>
    <ul className="space-y-1 text-gray-600">
      {parseDescription(description).map(({ label, value }, index) => (
        <li key={`${label ?? "line"}-${index}`} className="leading-relaxed">
          {label && (
            <span className="font-medium text-gray-900">{label}: </span>
          )}
          {value}
        </li>
      ))}
    </ul>
  </div>
);
