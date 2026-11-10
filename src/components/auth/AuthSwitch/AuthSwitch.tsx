import Link from "next/link";

interface AuthSwitchProps {
  text: string;
  linkLabel: string;
  href: string;
}

// link row under the form (sign in / create account)
export const AuthSwitch = ({ text, linkLabel, href }: AuthSwitchProps) => (
  <div className="mt-8 border-t border-gray-100 pt-6 text-center">
    <p className="text-gray-600">
      {text}
      <Link
        href={href}
        className="ms-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
      >
        {linkLabel}
      </Link>
    </p>
  </div>
);