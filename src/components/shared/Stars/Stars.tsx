import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

interface StarsProps {
  rating: number;
  className?: string;
}

export const Stars = ({ rating, className = "text-yellow-400" }: StarsProps) => {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className={`flex ${className}`}>
      {Array.from({ length: full }, (_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalf && <FaRegStarHalfStroke />}
      {Array.from({ length: empty }, (_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};