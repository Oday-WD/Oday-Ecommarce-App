import type { ReactNode } from "react";
import { CardHeader } from "@/components/shared/CardHeader/CardHeader";

interface FormSectionProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
}

// form card with gradient header
export const FormSection = ({
  icon,
  title,
  subtitle,
  children,
}: FormSectionProps) => (
  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
    <CardHeader icon={icon} title={title} subtitle={subtitle} />
    {children}
  </div>
);
