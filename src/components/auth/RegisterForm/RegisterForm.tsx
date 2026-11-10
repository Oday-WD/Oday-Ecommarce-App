"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa6";
import { toast } from "sonner";
import { AuthDivider } from "@/components/auth/AuthDivider/AuthDivider";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton/AuthSubmitButton";
import { SocialButtons } from "@/components/auth/SocialButtons/SocialButtons";
import { authClient } from "@/lib/auth-client";
import { registerSchema, type RegisterFormValues } from "@/schemas/auth.schema";
import { RegisterFields } from "./RegisterFields";
import { TermsCheckbox } from "./TermsCheckbox";

export const RegisterForm = () => {
  const router = useRouter();

  // form
  const { control, handleSubmit, formState } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
  });

  // submit
  const onSubmit = async ({
    name,
    email,
    password,
    rePassword,
    phone,
  }: RegisterFormValues) => {
    const { error } = await authClient.routeAuth.signUp({
      name,
      email,
      password,
      rePassword,
      phone,
    });

    if (error) {
      toast.error(error.message ?? "Registration failed");
      return;
    }

    toast.success("Account created successfully! Please sign in.");
    router.push("/login");
  };

  return (
    <div>
      {/* Heading */}
      <h2 className="mb-2 text-center text-3xl font-semibold">
        Create Your Account
      </h2>
      <p className="text-center">Start your fresh journey with us today</p>

      {/* Social */}
      <div className="my-10">
        <SocialButtons variant="row" />
      </div>
      <AuthDivider label="or" variant="register" />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
        <RegisterFields control={control} />
        <TermsCheckbox control={control} />
        <AuthSubmitButton
          pending={formState.isSubmitting}
          variant="compact"
          icon={<FaUserPlus />}
        >
          Create My Account
        </AuthSubmitButton>
      </form>

      {/* Sign in link */}
      <p className="my-4 border-t border-gray-300/30 pt-10 text-center">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary-600 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};
