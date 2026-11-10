"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { toast } from "sonner";
import { AuthCard } from "@/components/auth/AuthCard/AuthCard";
import { AuthDivider } from "@/components/auth/AuthDivider/AuthDivider";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton/AuthSubmitButton";
import { AuthSwitch } from "@/components/auth/AuthSwitch/AuthSwitch";
import { FormInput } from "@/components/auth/FormInput/FormInput";
import { SocialButtons } from "@/components/auth/SocialButtons/SocialButtons";
import { PrimaryCheckbox } from "@/components/shared/PrimaryCheckbox/PrimaryCheckbox";
import { authClient } from "@/lib/auth-client";
import { loginSchema, type LoginFormValues } from "@/schemas/auth.schema";

export const LoginForm = () => {
  const router = useRouter();

  // form
  const { control, handleSubmit, formState } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  // submit
  const onSubmit = async ({ email, password, rememberMe }: LoginFormValues) => {
    const { error } = await authClient.routeAuth.signIn({
      email,
      password,
      rememberMe,
    });

    if (error) {
      toast.error(error.message ?? "Incorrect email or password");
      return;
    }

    toast.success("Welcome back!");
    router.push("/");
    router.refresh();
  };

  return (
    <AuthCard
      title="Welcome Back!"
      text="Sign in to continue your fresh shopping experience"
    >
      {/* Social */}
      <SocialButtons variant="stack" />
      <AuthDivider label="OR CONTINUE WITH EMAIL" variant="login" />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <FormInput
          control={control}
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          autoComplete="email"
          leftIcon={<FaEnvelope />}
        />

        <FormInput
          control={control}
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          leftIcon={<FaLock />}
          showPasswordToggle
          labelAside={
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Forgot Password?
            </Link>
          }
        />

        {/* Remember me */}
        <Controller
          control={control}
          name="rememberMe"
          render={({ field }) => (
            <div className="flex items-center gap-3">
              <PrimaryCheckbox
                id="rememberMe"
                name={field.name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                Keep me signed in
              </label>
            </div>
          )}
        />

        <AuthSubmitButton pending={formState.isSubmitting}>
          Sign In
        </AuthSubmitButton>
      </form>

      {/* Register link */}
      <AuthSwitch
        text="New to FreshCart?"
        linkLabel="Create an account"
        href="/register"
      />
    </AuthCard>
  );
};