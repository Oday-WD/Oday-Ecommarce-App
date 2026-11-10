import { getPasswordStrength } from "@/lib/password-strength";

// strength bar with label
export const PasswordStrength = ({ password }: { password: string }) => {
  const { percent, label, bar } = getPasswordStrength(password);

  return (
    <div className="flex items-center gap-2">
      <div
        className="h-1 grow overflow-hidden rounded-md bg-gray-200"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Password strength: ${label}`}
      >
        <div
          className={`h-full transition-all duration-300 ease-out ${bar}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="min-w-[50px] text-sm font-medium">{label}</span>
    </div>
  );
};