import { AuthSplit } from "@/components/auth/AuthSplit/AuthSplit";
import { LoginForm } from "@/components/auth/LoginForm/LoginForm";
import { LoginHero } from "@/components/auth/LoginHero/LoginHero";

export default function LoginPage() {
  return (
    <AuthSplit hero={<LoginHero />}>
      <LoginForm />
    </AuthSplit>
  );
}