"use client";

import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { Expired_time } from "@/lib/utils";
import { toast } from "sonner";
import { useCallback, useEffect, useState } from "react";

import { handleSignUp } from "@/lib/action";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import InputDemo from "@/components/helper/Input-demo";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";

import { CameraIcon, KeyRound, Mail, User } from "lucide-react";
import { signUpFormState } from "@/lib/types";


export default function SignUpForm() {
  const [checked, setChecked] = useState(false);
  const { router } = UseSearchParamsHook();

  const [state, formAction] = useFormState<signUpFormState>(handleSignUp as any, {
    email: "",
    password: "",
    full_name: "",
    terms: false,
    national_image: "",
  });

  useEffect(() => {
    if (state.success) {
      setCookie("token", state.token, Expired_time);
      router.push("/");
      toast.success(state.success);
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state,router]);

  const handleChecked = useCallback(
    (e: any) => setChecked(!checked),
    [checked]
  );
  return (
    <main className="container md:h-full h-screen w-full flex items-center flex-col justify-center gap-4">
      <Link href="/"><Image src="/authLogo.png" width={200} height={200} alt="auth image" /></Link>
      <form
        action={formAction}
        className="flex flex-col justify-center gap-4 w-full max-w-full px-4"
      >
        <InputDemo
          id="full_name"
          label="Name"
          icon={<User size={18} />}
          type="text"
          placeHolder="Enter your full name"
          error={state.full_name}
        />
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
        </div>
        <div className="flex items-end justify-between flex-col">
          <InputDemo
            id="national_image"
            label="National ID Image"
            icon={<CameraIcon size={18} />}
            type="file"
            placeHolder="Enter your Password"
            error={state.national_image}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="checkbox"
            required
            checked={checked}
            onCheckedChange={handleChecked}
          />
          <Label htmlFor="checkbox">
            <span className="text-gray-300">Agree to the</span> terms and
            conditions
          </Label>
        </div>

        <div className="flex items-center justify-center">
          <FormSubmittingButton name="Create account" style="w-full" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p>Have an account? </p>
          <Link href="/sign-in" className="font-bold">
            login
          </Link>
        </div>
      </form>
    </main>
  );
}
