"use client";

import type { FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { toast } from "sonner";

const fieldClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none";

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "order", label: "Order Support" },
  { value: "shipping", label: "Shipping Question" },
  { value: "returns", label: "Returns & Refunds" },
  { value: "product", label: "Product Information" },
  { value: "feedback", label: "Feedback & Suggestions" },
  { value: "other", label: "Other" },
];

export const ContactForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thanks! We'll get back to you soon.");
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className={`${fieldClass} bg-white`}
        >
          <option value="">Select a subject</option>
          {subjects.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 font-semibold text-white shadow-sm shadow-primary-600/20 transition-colors hover:bg-primary-700 md:w-auto"
      >
        <FaPaperPlane />
        Send Message
      </button>
    </form>
  );
};
