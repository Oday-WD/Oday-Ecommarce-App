import { FaFacebook, FaGoogle } from "react-icons/fa6";

interface SocialButtonsProps {
  variant: "row" | "stack";
}

const providers = [
  { id: "google", name: "Google", icon: FaGoogle },
  { id: "facebook", name: "Facebook", icon: FaFacebook },
] as const;

// styles per layout: row (register) and stack (login)
const styles = {
  row: {
    wrapper: "flex gap-2",
    button:
      "flex grow items-center justify-center rounded-lg border border-gray-300 bg-transparent px-4 py-2 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-100",
    icon: { google: "me-2 text-red-600", facebook: "me-2 text-blue-600" },
    label: "",
  },
  stack: {
    wrapper: "space-y-3",
    button:
      "flex w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-200 px-4 py-3 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50",
    icon: { google: "text-lg text-red-500", facebook: "text-lg text-blue-600" },
    label: "font-medium text-gray-700",
  },
} as const;

// visual only, no provider is connected
export const SocialButtons = ({ variant }: SocialButtonsProps) => {
  const style = styles[variant];

  return (
    <div className={style.wrapper}>
      {providers.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={`Continue with ${name}`}
          className={style.button}
        >
          <Icon className={style.icon[id]} />
          <span className={style.label}>
            {variant === "row" ? name : `Continue with ${name}`}
          </span>
        </button>
      ))}
    </div>
  );
};