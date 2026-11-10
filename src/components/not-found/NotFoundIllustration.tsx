import { FaCartShopping } from "react-icons/fa6";

// cart card with a "404" badge and a sad face
export const NotFoundIllustration = () => (
  <div className="mb-10 flex justify-center">
    <div className="relative">
      <div className="absolute inset-0 h-52 w-64 rounded-[32px] bg-primary-100/50 blur-2xl sm:h-60 sm:w-72" />
      <div className="relative h-52 w-64 sm:h-60 sm:w-72">
        {/* Cart */}
        <div className="absolute inset-x-0 top-4 mx-auto flex h-40 w-52 items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/60 sm:h-44 sm:w-60">
          <div className="absolute inset-0 bg-linear-to-br from-primary-50/80 via-transparent to-primary-100/40" />
          <FaCartShopping className="relative text-6xl text-primary-400/80 sm:text-7xl" />
        </div>

        {/* 404 badge */}
        <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-white shadow-lg" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/40 sm:h-20 sm:w-20">
              <span className="text-xl font-black tracking-tight text-white sm:text-2xl">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Sad face */}
        <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
          <div className="h-2.5 w-2.5 rounded-full bg-primary-400" />
          <div className="h-4 w-8 rounded-b-full border-b-[3px] border-primary-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-primary-400" />
        </div>
      </div>
    </div>
  </div>
);
