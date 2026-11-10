import { FaSpinner } from "react-icons/fa6";

interface LoaderProps {
  text?: string;
  className?: string;
}

// centered spinner, with an optional message
export const Loader = ({ text, className = "py-20" }: LoaderProps) => (
  <div
    role="status"
    aria-live="polite"
    className={`flex items-center justify-center ${className}`}
  >
    <div className="text-center">
      <FaSpinner className="mx-auto mb-4 animate-spin text-4xl text-primary-600" />
      {text ? (
        <p className="text-gray-500">{text}</p>
      ) : (
        <span className="sr-only">Loading</span>
      )}
    </div>
  </div>
);