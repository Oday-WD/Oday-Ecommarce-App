const common =
  "shadow-none! placeholder:text-gray-700/50! aria-invalid:border-red-500!";

// label and input styles per page
export const inputVariants = {
  // login: thick border, large padding
  login: {
    label: "text-sm! font-semibold! text-gray-700!",
    input: `h-auto! rounded-xl! border-2! border-gray-200! px-4! py-3! text-base! md:text-base! focus-visible:border-primary-500! focus-visible:ring-2! focus-visible:ring-primary-100! ${common}`,
  },
  // register: same as the demo's .form-control
  register: {
    label: "text-base! font-normal!",
    input: `h-auto! rounded-md! border! border-gray-400/40! px-3! py-2! text-base! md:text-base! focus-visible:border-primary-600! focus-visible:ring-0! ${common}`,
  },
  // profile and settings pages
  settings: {
    label: "text-sm! font-medium! text-gray-700!",
    input: `h-auto! rounded-xl! border! border-gray-200! px-4! py-3! text-base! md:text-base! focus-visible:border-primary-500! focus-visible:ring-2! focus-visible:ring-primary-500/20! ${common}`,
  },
} as const;

export type InputVariant = keyof typeof inputVariants;