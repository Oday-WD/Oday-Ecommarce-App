"use client";

import { useState, type FormEvent } from "react";
import { FaArrowRight } from "react-icons/fa6";

// email form (visual only, no API behind it)
export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <form className="pt-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-2xl border-2 border-gray-200 bg-white py-4 pr-5 pl-5 text-base text-gray-800 shadow-sm transition-all placeholder-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="group flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-500/40"
        >
          <span>Subscribe</span>
          <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      <p className="mt-3 pl-1 text-xs text-gray-400">
        ✨ Unsubscribe anytime. No spam, ever.
      </p>
    </form>
  );
};
