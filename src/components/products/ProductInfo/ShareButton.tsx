"use client";

import { FaShareNodes } from "react-icons/fa6";
import { toast } from "sonner";

// share via system sheet or copy link
export const ShareButton = ({ title }: { title: string }) => {
  const share = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
      }
    } catch {
    }
  };

  return (
    <button
      type="button"
      aria-label="Share product"
      onClick={share}
      className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition"
    >
      <FaShareNodes />
    </button>
  );
};