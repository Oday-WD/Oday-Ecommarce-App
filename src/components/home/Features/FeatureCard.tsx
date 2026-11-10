import { FadeIn } from "@/components/shared/FadeIn/FadeIn";
import type { Feature } from "./featuresData";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

// icon + title card
export const FeatureCard = ({
  feature: { icon: Icon, title, description, color },
  index,
}: FeatureCardProps) => (
  <FadeIn
    index={index}
    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div
      className={`${color} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}
    >
      <Icon className="text-xl" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </FadeIn>
);