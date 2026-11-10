import { FaArrowRight } from "react-icons/fa6";

interface HoverHintProps {
  label: string;
  className?: string;
}

// small "view more" hint shown when the card is hovered
export const HoverHint = ({ label, className = "" }: HoverHintProps) => (
  <div
    className={`flex justify-center opacity-0 transition-opacity group-hover:opacity-100 ${className}`}
  >
    <span className="flex items-center gap-1 text-xs">
      {label}
      <FaArrowRight className="text-[10px]" />
    </span>
  </div>
);