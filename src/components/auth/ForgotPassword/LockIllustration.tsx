import { FaEnvelope, FaLock, FaShieldHalved } from "react-icons/fa6";

// decorative lock card with floating icons
export const LockIllustration = () => (
  <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-primary-50 via-green-50 to-emerald-50 shadow-lg">
    {/* Background circles */}
    <div className="absolute top-8 left-8 h-24 w-24 rounded-full bg-primary-100/50" />
    <div className="absolute right-10 bottom-12 h-32 w-32 rounded-full bg-green-100/50" />
    <div className="absolute top-20 right-20 h-16 w-16 rounded-full bg-emerald-100/50" />

    <div className="relative z-10 flex flex-col items-center gap-6">
      {/* Lock */}
      <div className="flex h-28 w-28 rotate-3 items-center justify-center rounded-3xl bg-white shadow-xl transition-transform duration-300 hover:rotate-0">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-100">
          <FaLock className="text-4xl text-primary-600" />
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-4 -left-16 flex h-14 w-14 -rotate-12 items-center justify-center rounded-xl bg-white shadow-lg">
        <FaEnvelope className="text-xl text-primary-500" />
      </div>
      <div className="absolute top-8 -right-16 flex h-14 w-14 rotate-12 items-center justify-center rounded-xl bg-white shadow-lg">
        <FaShieldHalved className="text-xl text-green-500" />
      </div>

      {/* Loading dots */}
      <div className="flex gap-3">
        <div className="h-3 w-3 animate-pulse rounded-full bg-primary-400" />
        <div className="h-3 w-3 animate-pulse rounded-full bg-primary-500 [animation-delay:150ms]" />
        <div className="h-3 w-3 animate-pulse rounded-full bg-primary-600 [animation-delay:300ms]" />
      </div>
    </div>
  </div>
);
