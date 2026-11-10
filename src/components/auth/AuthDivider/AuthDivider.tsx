interface AuthDividerProps {
  label: string;
  variant: "login" | "register";
}

// "or" line between social buttons and the form
export const AuthDivider = ({ label, variant }: AuthDividerProps) =>
  variant === "login" ? (
    <div className="relative my-6 flex justify-center text-sm">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <span className="relative bg-white px-4 font-medium text-gray-500">
        {label}
      </span>
    </div>
  ) : (
    <div
      className="relative my-4 flex h-0.5 w-full items-center bg-gray-300/30"
      aria-hidden="true"
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
        {label}
      </span>
    </div>
  );
