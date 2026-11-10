import type { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa6";

interface InfoPanelProps {
  icon: IconType;
  title: string;
  items: string[];
  background: string;
  iconBox: string;
  check: string;
}

// colored card with a checklist
export const InfoPanel = ({
  icon: Icon,
  title,
  items,
  background,
  iconBox,
  check,
}: InfoPanelProps) => (
  <div className={`rounded-lg bg-linear-to-br p-6 ${background}`}>
    <div className="mb-4 flex items-center gap-3">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${iconBox}`}
      >
        <Icon className="text-xl" />
      </div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
    </div>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
          <FaCheck className={`mt-0.5 shrink-0 ${check}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
