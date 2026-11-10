export interface DescriptionRow {
  label?: string;
  value: string;
}

export function parseDescription(description: string): DescriptionRow[] {
  return description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split("\t");
      return rest.length
        ? { label: label.trim(), value: rest.join(" ").trim() }
        : { value: label.trim() };
    });
}
