export interface Banner {
  emoji: string;
  badge: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  button: { label: string; href: string };
  gradient: string;
  buttonColor: string;
}

export const banners: Banner[] = [
  {
    emoji: "🔥",
    badge: "Deal of the Day",
    title: "Fresh Organic Fruits",
    description: "Get up to 40% off on selected organic fruits",
    discount: "40% OFF",
    code: "ORGANIC40",
    button: { label: "Shop Now", href: "/products" },
    gradient: "from-emerald-500 to-emerald-700",
    buttonColor: "text-emerald-600",
  },
  {
    emoji: "✨",
    badge: "New Arrivals",
    title: "Exotic Vegetables",
    description: "Discover our latest collection of premium vegetables",
    discount: "25% OFF",
    code: "FRESH25",
    button: { label: "Explore Now", href: "/products?sort=newest" },
    gradient: "from-orange-400 to-rose-500",
    buttonColor: "text-orange-500",
  },
];
