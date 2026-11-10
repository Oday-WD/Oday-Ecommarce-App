export interface HeroLink {
  label: string;
  href: string;
}

export interface HeroSlideData {
  title: string;
  subtitle: string;
  primary: HeroLink;
  secondary: HeroLink;
}

export const slides: HeroSlideData[] = [
  {
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order",
    primary: { label: "Shop Now", href: "/products" },
    secondary: { label: "View Deals", href: "/deals" },
  },
  {
    title: "Premium Quality Guaranteed",
    subtitle: "Fresh from farm to your table",
    primary: { label: "Shop Now", href: "/products" },
    secondary: { label: "Learn More", href: "/about" },
  },
  {
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
    primary: { label: "Order Now", href: "/products" },
    secondary: { label: "Delivery Info", href: "/delivery" },
  },
];
