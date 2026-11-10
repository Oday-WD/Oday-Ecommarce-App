import type { ReactNode } from "react";

interface CardHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

// green gradient card header
export const CardHeader = ({ icon, title, subtitle }: CardHeaderProps) => (
  <div className="bg-linear-to-r from-primary-600 to-primary-700 px-6 py-4">
    <h2 className="flex items-center gap-2 text-lg font-bold text-white">
      {icon}
      {title}
    </h2>
    {subtitle && <p className="mt-1 text-sm text-primary-100">{subtitle}</p>}
  </div>
);