import type { ReactNode } from "react";

interface AuthSplitProps {
  hero: ReactNode;
  children: ReactNode;
  id?: string;
}

// two columns: hero on the left (desktop only), form on the right
export const AuthSplit = ({ hero, children, id }: AuthSplitProps) => (
  <main className="container mx-auto px-4 py-16" id={id}>
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
      {hero}
      <div className="w-full">{children}</div>
    </div>
  </main>
);
