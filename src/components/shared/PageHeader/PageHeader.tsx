import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/components/shared/Breadcrumb/Breadcrumb";
import { HeaderBreadcrumb } from "./HeaderBreadcrumb";

const gradients = {
  primary: "from-primary-600 via-primary-500 to-primary-400",
  violet: "from-violet-600 via-violet-500 to-purple-400",
};

interface PageHeaderProps {
  title: string;
  description: string;
  icon: ReactNode;
  breadcrumb: BreadcrumbItem[];
  variant?: keyof typeof gradients;
  compact?: boolean;
}

// gradient banner with breadcrumb, icon and title
export const PageHeader = ({
  title,
  description,
  icon,
  breadcrumb,
  variant = "primary",
  compact = false,
}: PageHeaderProps) => (
  <div className={`bg-linear-to-br ${gradients[variant]} text-white`}>
    <div
      className={`container mx-auto px-4 ${compact ? "py-10 sm:py-14" : "py-12 sm:py-16"}`}
    >
      <HeaderBreadcrumb items={breadcrumb} />

      <div className="flex items-center gap-5">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-xl ring-1 ring-white/30 backdrop-blur-sm">
          {icon}
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-1 text-white/80">{description}</p>
        </div>
      </div>
    </div>
  </div>
);