import { FaCheck, FaEnvelope, FaKey, FaLock } from "react-icons/fa6";

const steps = [
  { id: "email", icon: FaEnvelope },
  { id: "code", icon: FaKey },
  { id: "reset", icon: FaLock },
];

// circle color: done, current or upcoming
const circleClass = (done: boolean, active: boolean) =>
  done
    ? "bg-primary-600 text-white"
    : active
      ? "bg-primary-600 text-white ring-4 ring-primary-100"
      : "bg-gray-100 text-gray-400";

// three steps progress bar
export const StepIndicator = ({ current }: { current: number }) => (
  <div className="mb-8 flex items-center justify-center">
    {steps.map(({ id, icon: Icon }, index) => {
      const done = index < current;
      const active = index === current;

      return (
        <div key={id} className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${circleClass(done, active)}`}
          >
            {done ? <FaCheck /> : <Icon className="text-xs" />}
          </div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div
              className={`mx-2 h-0.5 w-16 transition-all duration-300 ${
                done ? "bg-primary-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      );
    })}
  </div>
);