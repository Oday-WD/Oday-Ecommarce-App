import type { IconType } from "react-icons";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const triggerClass =
  "flex! h-auto! flex-none! items-center gap-2 rounded-none! border-0! border-b-2! border-transparent! bg-transparent! px-6 py-4 text-base! font-medium whitespace-nowrap text-gray-600! shadow-none! transition-all duration-200 after:hidden! hover:bg-gray-50! hover:text-primary-600! aria-selected:border-primary-600! aria-selected:bg-primary-50/50! aria-selected:text-primary-600! aria-selected:shadow-none!";

export interface TabItem {
  value: string;
  label: string;
  icon: IconType;
}

// scrollable row of tab buttons
export const ProductTabsList = ({ tabs }: { tabs: TabItem[] }) => (
  <div className="border-b border-gray-200">
    <TabsList className="scrollbar-hide flex! h-auto! w-full! justify-start! overflow-x-auto! rounded-none! bg-transparent! p-0!">
      {tabs.map(({ value, label, icon: Icon }) => (
        <TabsTrigger key={value} value={value} className={triggerClass}>
          <Icon className="text-sm" />
          {label}
        </TabsTrigger>
      ))}
    </TabsList>
  </div>
);