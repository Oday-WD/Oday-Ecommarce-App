"use client";

import { FaGripVertical, FaList } from "react-icons/fa6";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

const views = [
  { value: "grid", label: "Grid view", icon: FaGripVertical },
  { value: "list", label: "List view", icon: FaList },
];

// grid / list switch, stored in the url
export const ViewToggle = ({ view }: { view: "grid" | "list" }) => {
  const update = useUpdateSearchParams();

  const changeView = (value: string[]) => {
    const next = value[0];
    // clicking the active button returns an empty array, so ignore it
    if (next !== "grid" && next !== "list") return;

    update(
      (params) => {
        if (next === "grid") params.delete("view");
        else params.set("view", next);
      },
      { resetPage: false },
    );
  };

  return (
    <ToggleGroup
      variant="outline"
      value={[view]}
      onValueChange={changeView}
      aria-label="Product view"
    >
      {views.map(({ value, label, icon: Icon }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          aria-label={label}
          className="aria-pressed:bg-primary-600! aria-pressed:text-white!"
        >
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
