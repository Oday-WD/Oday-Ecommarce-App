import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const arrowClass =
  "flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-primary-100 hover:text-primary-600 disabled:opacity-40";

// prev / next buttons controlled by Swiper
export const SliderArrows = () => (
  <div className="flex space-x-2">
    <button type="button" className={`products-slider-prev ${arrowClass}`}>
      <FaChevronLeft />
      <span className="sr-only">Previous</span>
    </button>
    <button type="button" className={`products-slider-next ${arrowClass}`}>
      <FaChevronRight />
      <span className="sr-only">Next</span>
    </button>
  </div>
);
