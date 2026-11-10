import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface PasswordToggleProps {
  visible: boolean;
  onToggle: () => void;
}

// eye button that shows or hides the password
export const PasswordToggle = ({ visible, onToggle }: PasswordToggleProps) => (
  <button
    type="button"
    aria-label={visible ? "Hide password" : "Show password"}
    onClick={onToggle}
    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-gray-600"
  >
    {visible ? <FaEyeSlash /> : <FaEye />}
  </button>
);
