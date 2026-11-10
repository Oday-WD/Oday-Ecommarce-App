import { RegisterForm } from "@/components/auth/RegisterForm/RegisterForm";
import { RegisterHero } from "@/components/auth/RegisterHero/RegisterHero";

export default function RegisterPage() {
  return (
    <main className="py-10">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 p-4 lg:grid-cols-2">
        <RegisterHero />
        <div className="rounded-2xl bg-white px-6 py-10 shadow-lg">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}