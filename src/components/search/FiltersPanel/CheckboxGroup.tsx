import { PrimaryCheckbox } from "@/components/shared/PrimaryCheckbox/PrimaryCheckbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface CheckboxGroupProps {
  title: string;
  items: { _id: string; name: string }[];
  selected: string[];
  onToggle: (id: string) => void;
  onClear: () => void;
}

// titled list of checkboxes with a clear button
export const CheckboxGroup = ({
  title,
  items,
  selected,
  onToggle,
  onClear,
}: CheckboxGroupProps) => (
  <div>
    {/* Title */}
    <div className="mb-4 flex items-center justify-between">
      <h3 className="font-bold text-gray-900">{title}</h3>
      {selected.length > 0 && (
        <Button
          type="button"
          variant="link"
          size="xs"
          onClick={onClear}
          className="h-auto! p-0! text-xs text-primary-600!"
        >
          Clear
        </Button>
      )}
    </div>

    {/* Items */}
    <div className="max-h-52 space-y-2 overflow-y-auto">
      {items.map(({ _id, name }) => (
        <Label
          key={_id}
          className="group flex cursor-pointer items-center gap-3 font-normal"
        >
          <PrimaryCheckbox
            checked={selected.includes(_id)}
            onCheckedChange={() => onToggle(_id)}
          />
          <span className="text-sm text-gray-600 transition-colors group-hover:text-gray-900">
            {name}
          </span>
        </Label>
      ))}
    </div>
  </div>
);
