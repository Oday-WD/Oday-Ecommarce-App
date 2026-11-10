import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { PRICE_PRESETS } from "@/lib/search";

const inputClass =
  "h-9! rounded-lg! border-gray-200! px-3! text-sm! focus-visible:border-primary-500! focus-visible:ring-primary-500/20!";
const labelClass = "mb-1 block text-xs font-normal text-gray-500";

// min/max inputs and quick presets
export const PriceRange = ({ min, max }: { min: string; max: string }) => {
  const update = useUpdateSearchParams();
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const apply = (nextMin: string, nextMax: string) =>
    update((params) => {
      if (nextMin) params.set("min", nextMin);
      else params.delete("min");
      if (nextMax) params.set("max", nextMax);
      else params.delete("max");
    });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    apply(minValue, maxValue);
  };

  return (
    <div>
      <h3 className="mb-4 font-bold text-gray-900">Price Range</h3>

      {/* Inputs */}
      <form onSubmit={handleSubmit} className="mb-3 grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="min-price" className={labelClass}>
            Min (EGP)
          </Label>
          <Input
            id="min-price"
            type="number"
            min={0}
            placeholder="0"
            value={minValue}
            onChange={(event) => setMinValue(event.target.value)}
            onBlur={() => apply(minValue, maxValue)}
            className={inputClass}
          />
        </div>
        <div>
          <Label htmlFor="max-price" className={labelClass}>
            Max (EGP)
          </Label>
          <Input
            id="max-price"
            type="number"
            min={0}
            placeholder="No limit"
            value={maxValue}
            onChange={(event) => setMaxValue(event.target.value)}
            onBlur={() => apply(minValue, maxValue)}
            className={inputClass}
          />
        </div>
        <button type="submit" className="sr-only">
          Apply price
        </button>
      </form>

      {/* Presets */}
      <div className="flex flex-wrap gap-2">
        {PRICE_PRESETS.map((preset) => {
          const active = max === String(preset.max) && !min;

          return (
            <Button
              key={preset.label}
              type="button"
              size="sm"
              onClick={() => {
                setMinValue("");
                setMaxValue(String(preset.max));
                apply("", String(preset.max));
              }}
              className={`h-auto! rounded-full! px-3! py-1.5! text-xs! font-medium ${
                active
                  ? "bg-primary-600! text-white! hover:bg-primary-700!"
                  : "bg-gray-100! text-gray-600! hover:bg-gray-200!"
              }`}
            >
              {preset.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
