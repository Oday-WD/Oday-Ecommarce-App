import type { ReactNode } from "react";
import { FaBoxOpen, FaFolderOpen, FaLayerGroup, FaTags } from "react-icons/fa6";
import type { ActiveFilter } from "@/components/shared/ActiveFilters/ActiveFilters";
import type { BreadcrumbItem } from "@/components/shared/Breadcrumb/Breadcrumb";
import { LogoIcon } from "@/components/shared/LogoIcon/LogoIcon";
import type { Brand } from "@/interfaces/brand.interface";
import type { Category } from "@/interfaces/category.interface";
import type { Subcategory } from "@/interfaces/subcategory.interface";

interface Filters {
  category?: Category;
  subcategory?: Subcategory;
  brand?: Brand;
}

interface HeaderInfo {
  title: string;
  description: string;
  icon: ReactNode;
  breadcrumb: BreadcrumbItem[];
}

// header for the strongest filter: subcategory, then category, then brand
export function getProductsHeader({
  category,
  subcategory,
  brand,
}: Filters): HeaderInfo {
  if (subcategory) {
    return {
      title: subcategory.name,
      description: `Browse ${subcategory.name} products`,
      icon: <FaFolderOpen className="text-3xl" />,
      breadcrumb: [
        { label: "Categories", href: "/categories" },
        ...(category
          ? [{ label: category.name, href: `/categories/${category._id}` }]
          : []),
        { label: subcategory.name },
      ],
    };
  }

  if (category) {
    return {
      title: category.name,
      description: `Browse products in ${category.name}`,
      icon: <LogoIcon src={category.image} alt={category.name} />,
      breadcrumb: [
        { label: "Categories", href: "/categories" },
        { label: category.name },
      ],
    };
  }

  if (brand) {
    return {
      title: brand.name,
      description: `Shop ${brand.name} products`,
      icon: <LogoIcon src={brand.image} alt={brand.name} />,
      breadcrumb: [{ label: "Brands", href: "/brands" }, { label: brand.name }],
    };
  }

  return {
    title: "All Products",
    description: "Explore our complete product collection",
    icon: <FaBoxOpen className="text-3xl" />,
    breadcrumb: [{ label: "All Products" }],
  };
}

// one colored chip per active filter
export function getActiveFilters({
  category,
  subcategory,
  brand,
}: Filters): ActiveFilter[] {
  const filters: ActiveFilter[] = [];

  if (category) {
    filters.push({
      label: category.name,
      icon: <FaLayerGroup className="text-xs" />,
      className: "bg-primary-100 text-primary-700 hover:bg-primary-200",
    });
  }
  if (subcategory) {
    filters.push({
      label: subcategory.name,
      icon: <FaFolderOpen className="text-xs" />,
      className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
    });
  }
  if (brand) {
    filters.push({
      label: brand.name,
      icon: <FaTags className="text-xs" />,
      className: "bg-violet-100 text-violet-700 hover:bg-violet-200",
    });
  }

  return filters;
}
