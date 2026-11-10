import Link from "next/link";

const destinations = [
  { label: "All Products", href: "/products", primary: true },
  { label: "Categories", href: "/categories" },
  { label: "Today's Deals", href: "/deals" },
  { label: "Contact Us", href: "/contact" },
];

// quick links card
export const PopularDestinations = () => (
  <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
    <p className="mb-4 text-center text-sm font-medium tracking-wider text-gray-400 uppercase">
      Popular Destinations
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      {destinations.map(({ label, href, primary }) => (
        <Link
          key={href}
          href={href}
          className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
            primary
              ? "bg-primary-50 text-primary-700 hover:bg-primary-100"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);
