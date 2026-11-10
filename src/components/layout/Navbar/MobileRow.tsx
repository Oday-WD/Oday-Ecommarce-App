import Link from "next/link";
import type { IconType } from "react-icons";
import { SheetClose } from "@/components/ui/sheet";

const tones = {
  red: { box: "bg-red-50", icon: "text-red-500" },
  primary: { box: "bg-primary-50", icon: "text-primary-600" },
  gray: { box: "bg-gray-100", icon: "text-gray-500" },
} as const;

interface MobileRowProps {
  href: string;
  icon: IconType;
  label: string;
  tone: keyof typeof tones;
}

// menu row with round icon, closes the sheet on click
export const MobileRow = ({
  href,
  icon: Icon,
  label,
  tone,
}: MobileRowProps) => {
  const style = tones[tone];

  return (
    <SheetClose
      render={
        <Link
          href={href}
          className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-primary-50"
        />
      }
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full ${style.box}`}
      >
        <Icon className={style.icon} />
      </div>
      <span className="font-medium text-gray-700">{label}</span>
    </SheetClose>
  );
};
