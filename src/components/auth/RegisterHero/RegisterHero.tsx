import { RegisterPerks } from "./RegisterPerks";
import { RegisterTestimonial } from "./RegisterTestimonial";

// welcome text, perks and a testimonial beside the form
export const RegisterHero = () => (
  <div>
    <h1 className="text-4xl font-bold">
      Welcome to <span className="text-primary-600">FreshCart</span>
    </h1>
    <p className="mt-2 mb-4 text-xl">
      Join thousands of happy customers who enjoy fresh groceries delivered
      right to their doorstep.
    </p>

    <RegisterPerks />
    <RegisterTestimonial />
  </div>
);
