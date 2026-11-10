import { FOOTER_CATEGORIES_LIMIT } from "@/lib/navigation";
import { getCategories } from "@/services/category.service";
import { buildColumns } from "./footer-data";
import { FooterBottom } from "./FooterBottom";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";

export const Footer = async () => {
  // keep footer alive if the API is down (just no category links)
  const categories = await getCategories()
    .then((res) => res.data.slice(0, FOOTER_CATEGORIES_LIMIT))
    .catch(() => []);

  const columns = buildColumns(categories);

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <FooterBrand />

          {/* Links */}
          {columns.map(({ title, links }) => (
            <FooterColumn key={title} title={title} links={links} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <FooterBottom />
    </footer>
  );
};
