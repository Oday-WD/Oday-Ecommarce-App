const levels = [
  { label: "Weak", bar: "bg-red-500" },
  { label: "Fair", bar: "bg-orange-500" },
  { label: "Good", bar: "bg-yellow-500" },
  { label: "Strong", bar: "bg-primary-600" },
] as const;

// score 0-4: length, mixed case, digit, symbol
export function getPasswordStrength(password: string) {
  if (!password) return { ...levels[0], percent: 0 };

  const score = [
    password.length >= 8,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  return { ...levels[Math.max(score - 1, 0)], percent: score * 25 };
}
