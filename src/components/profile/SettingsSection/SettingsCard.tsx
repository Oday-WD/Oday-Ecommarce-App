import type { ReactNode } from "react";

// white rounded card
export const SettingsCard = ({ children }: { children: ReactNode }) => (
  <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
    {children}
  </div>
);