interface RatingBarProps {
  star: number;
  percent: number;
}

// one row of the stars distribution
export const RatingBar = ({ star, percent }: RatingBarProps) => (
  <div className="mb-2 flex items-center gap-3">
    <span className="w-12 text-sm whitespace-nowrap text-gray-600">
      {star} star
    </span>
    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
      <div
        className="h-full rounded-full bg-yellow-400 transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
    <span className="w-10 text-sm text-gray-500">{percent}%</span>
  </div>
);
