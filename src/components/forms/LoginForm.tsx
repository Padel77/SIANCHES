"use client";

import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { Expired_time } from "@/lib/utils";
import { toast } from "sonner";
import { useEffect } from "react";

import { handleLogin } from "@/lib/action";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";

import InputDemo from "@/components/helper/Input-demo";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";

import { KeyRound, Mail } from "lucide-react";
import { LoginFormState } from "@/lib/types";

export default function LoginForm() {
  const { router } = UseSearchParamsHook();

  const [state, formAction] = useFormState<LoginFormState>(handleLogin as any, {
    email: "",
    password: "",
  });

  useEffect(() => {
    if (state.success) {
      setCookie("token", state.token, Expired_time);
      router.push("/");
      toast.success(state.success);
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return (
    <main className="container md:h-full h-screen w-full flex items-center flex-col justify-center gap-4">
      <Link href="/">
        <Image src="/authLogo.png" width={200} height={200} alt="auth image" />
      </Link>
      <form
        action={formAction}
        className="flex flex-col justify-center   gap-4 w-full max-w-full px-4"
      >
        <InputDemo
          id="email"
          label="Email Address"
          icon={<Mail size={18} />}
          type="email"
          placeHolder="Enter your Email Address"
          error={state.email || state.error}
        />
        <div className="flex items-end justify-between flex-col">
          <InputDemo
            id="password"
            label="Password"
            icon={<KeyRound size={18} />}
            type="password"
            placeHolder="Enter your Password"
            error={state.password}
          />
          <p>Forget your password ?</p>
        </div>

        <div className="flex items-center justify-center">
          <FormSubmittingButton name="Login" style="w-full" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p>Don`t have an account ?</p>
          <Link href="/sign-up" className="font-bold">
            Create account
          </Link>
        </div>
      </form>
    </main>
  );
}
