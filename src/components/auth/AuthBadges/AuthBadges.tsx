import type { IconType } from "react-icons";

export interface AuthBadge {
  icon: IconType;
  label: string;
}

// small trust badges under the hero text
export const AuthBadges = ({ badges }: { badges: AuthBadge[] }) => (
  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
    {badges.map(({ icon: Icon, label }) => (
      <div key={label} className="flex items-center">
        <Icon className="mr-2 text-primary-600" />
        {label}
      </div>
    ))}
  </div>
);
