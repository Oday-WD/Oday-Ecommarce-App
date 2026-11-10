import { FaBox, FaShieldHalved, FaSpinner } from "react-icons/fa6";

interface SubmitOrderButtonProps {
  method: "cash" | "card";
  submitting: boolean;
}

// place order (cash) or proceed to payment (card)
export const SubmitOrderButton = ({
  method,
  submitting,
}: SubmitOrderButtonProps) => {
  const Icon = method === "cash" ? FaBox : FaShieldHalved;

  return (
    <button
      type="submit"
      disabled={submitting}
      aria-busy={submitting}
      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary-600 to-primary-700 py-4 font-bold text-white shadow-lg shadow-primary-600/20 transition-all hover:from-primary-700 hover:to-primary-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {submitting ? <FaSpinner className="animate-spin" /> : <Icon />}
      {method === "cash" ? "Place Order" : "Proceed to Payment"}
    </button>
  );
};
