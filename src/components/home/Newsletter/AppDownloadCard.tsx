import { FaApple, FaGooglePlay } from "react-icons/fa6";

const stores = [
  { icon: FaApple, hint: "Download on", name: "App Store" },
  { icon: FaGooglePlay, hint: "Get it on", name: "Google Play" },
];

// dark mobile app promo card
export const AppDownloadCard = () => (
  <div className="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8">
    <div className="flex h-full flex-col justify-center">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-900 to-gray-800 p-8 text-white">
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-teal-500/20 blur-2xl" />

        <div className="relative space-y-5">
          <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-400">
            📱 MOBILE APP
          </div>
          <h3 className="text-2xl leading-tight font-bold">
            Shop Faster on Our App
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Get app-exclusive deals &amp; 15% off your first order.
          </p>

          {/* Store buttons */}
          <div className="flex flex-col gap-3 pt-2">
            {stores.map(({ icon: Icon, hint, name }) => (
              <a
                key={name}
                href="#"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/15"
              >
                <Icon className="text-xl" />
                <div className="text-left">
                  <div className="text-[10px] tracking-wide text-gray-400 uppercase">
                    {hint}
                  </div>
                  <div className="-mt-0.5 text-sm font-semibold">{name}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 pt-2 text-sm">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-400">4.9 • 100K+ downloads</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
