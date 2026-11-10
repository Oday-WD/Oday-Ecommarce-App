import type { IconType } from "react-icons";

const tones = {
  primary: { box: "bg-primary-100", icon: "text-primary-600" },
  amber: { box: "bg-amber-100", icon: "text-amber-600" },
} as const;

interface SettingsHeaderProps {
  icon: IconType;
  title: string;
  subtitle: string;
  tone: keyof typeof tones;
}

// icon box with title and subtitle above a form
export const SettingsHeader = ({
  icon: Icon,
  title,
  subtitle,
  tone,
}: SettingsHeaderProps) => {
  const style = tones[tone];

  return (
    <div className="mb-6 flex items-center gap-4">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.box}`}
      >
        <Icon className={`text-2xl ${style.icon}`} />
      </div>
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
