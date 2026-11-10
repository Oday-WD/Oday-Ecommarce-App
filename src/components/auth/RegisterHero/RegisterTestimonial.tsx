import { Stars } from "@/components/shared/Stars/Stars";

// customer quote card
export const RegisterTestimonial = () => (
  <div className="rounded-md bg-white p-4 shadow-sm">
    <div className="mb-4 flex items-center gap-4">
      <div className="flex size-12 items-center justify-center rounded-full bg-primary-200 font-semibold text-primary-700">
        SJ
      </div>
      <div>
        <h3>Sarah Johnson</h3>
        <Stars rating={5} className="text-yellow-300" />
      </div>
    </div>
    <blockquote>
      <p className="text-gray-600 italic">
        &quot;FreshCart has transformed my shopping experience. The quality of
        the products is outstanding, and the delivery is always on time. Highly
        recommend!&quot;
      </p>
    </blockquote>
  </div>
);
