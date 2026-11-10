import type { ComponentProps } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type PrimaryCheckboxProps = Omit<ComponentProps<typeof Checkbox>, "className">;

// checkbox with brand green when checked
export const PrimaryCheckbox = (props: PrimaryCheckboxProps) => (
  <Checkbox
    className="data-checked:border-primary-600! data-checked:bg-primary-600!"
    {...props}
  />
);