import { AuthSplit } from "@/components/auth/AuthSplit/AuthSplit";
import { ForgotPasswordFlow } from "@/components/auth/ForgotPassword/ForgotPasswordFlow";
import { ForgotPasswordHero } from "@/components/auth/ForgotPassword/ForgotPasswordHero";

export default function ForgotPasswordPage() {
  return (
    <AuthSplit hero={<ForgotPasswordHero />} id="forgot-password-section">
      <ForgotPasswordFlow />
    </AuthSplit>
  );
}