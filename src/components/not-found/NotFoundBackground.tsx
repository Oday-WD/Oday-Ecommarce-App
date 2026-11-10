import { FaAppleWhole, FaCarrot, FaLemon, FaSeedling } from "react-icons/fa6";

// positions and float animation of each decoration
const floating = [
  {
    icon: FaAppleWhole,
    className:
      "top-[10%] left-[5%] text-4xl text-primary-200 animate-[float_6s_ease-in-out_infinite]",
  },
  {
    icon: FaCarrot,
    className:
      "top-[20%] right-[10%] text-3xl text-primary-200 animate-[float_8s_ease-in-out_infinite_1s]",
  },
  {
    icon: FaLemon,
    className:
      "bottom-[25%] left-[8%] text-3xl text-primary-200 animate-[float_7s_ease-in-out_infinite_0.5s]",
  },
  {
    icon: FaSeedling,
    className:
      "bottom-[15%] right-[15%] text-4xl text-primary-200 animate-[float_9s_ease-in-out_infinite_2s]",
  },
  {
    icon: FaAppleWhole,
    className:
      "top-[50%] left-[15%] text-2xl text-primary-100 animate-[float_5s_ease-in-out_infinite_1.5s]",
  },
  {
    icon: FaCarrot,
    className:
      "top-[40%] right-[5%] text-2xl text-primary-100 animate-[float_6s_ease-in-out_infinite_0.8s]",
  },
];

// floating fruit icons and soft glows behind the page
export const NotFoundBackground = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    {floating.map(({ icon: Icon, className }, index) => (
      <div key={index} className={`absolute ${className}`}>
        <Icon />
      </div>
    ))}
    <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-linear-to-bl from-primary-100/40 to-transparent blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-linear-to-tr from-primary-100/30 to-transparent blur-3xl" />
  </div>
);
