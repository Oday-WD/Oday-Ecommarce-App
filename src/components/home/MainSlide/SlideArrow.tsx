import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// custom prev / next arrow (class names are Swiper navigation hooks)
export const SlideArrow = ({ direction }: { direction: "prev" | "next" }) => {
  const isPrev = direction === "prev";
  const Icon = isPrev ? FaChevronLeft : FaChevronRight;

  return (
    <div
      className={`absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:text-green-600 md:flex ${
        isPrev ? "custom-prev left-4" : "custom-next right-4"
      }`}
    >
      <Icon className="text-lg" />
    </div>
  );
};