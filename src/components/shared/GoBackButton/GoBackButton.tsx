"use client";

import { FaArrowLeft } from "react-icons/fa6";

export const GoBackButton = () => {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-lg sm:w-auto"
    >
      <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
      Go Back
    </button>
  );
};