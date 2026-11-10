import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  text: string;
  children: ReactNode;
}

// white card with brand logo and heading
export const AuthCard = ({ title, text, children }: AuthCardProps) => (
  <div className="rounded-2xl bg-white p-8 shadow-xl lg:p-12">
    <div className="mb-8 text-center">
      <div className="mb-4 flex items-center justify-center">
        <span className="text-3xl font-bold text-primary-600">
          Fresh<span className="text-gray-800">Cart</span>
        </span>
      </div>
      <h1 className="mb-2 text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600">{text}</p>
    </div>
    {children}
  </div>
);
