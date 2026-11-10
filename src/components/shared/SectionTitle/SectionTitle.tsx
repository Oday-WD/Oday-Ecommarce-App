interface SectionTitleProps {
  title: string;
  highlight: string;
  className?: string;
  headingClass?: string;
}

// green bar + heading with highlighted word
export const SectionTitle = ({
  title,
  highlight,
  className = "",
  headingClass = "",
}: SectionTitleProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="h-8 w-1.5 rounded-full bg-linear-to-b from-emerald-500 to-emerald-700" />
    <h2 className={`font-bold text-gray-800 ${headingClass}`}>
      {title} <span className="text-emerald-600">{highlight}</span>
    </h2>
  </div>
);