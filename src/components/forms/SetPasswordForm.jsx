'use client';

import Image from "next/image";
import { useFormState } from "react-dom";

import { handleSetNewPassword } from "@/lib/action";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";

import InputDemo from "@/components/helper/Input-demo";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";
import { useEffect } from "react";
import { toast } from "sonner";


export default function SetPasswordForm() {
    const { searchParams } = UseSearchParamsHook();

    let phone_number = searchParams.get("phone");
    let otp_number = searchParams.get("otp");

    const [state, formAction] = useFormState(handleSetNewPassword, {
        phone: "",
        new_password: "",
        new_password2: "",
        otp: "",
    });


    useEffect(() => {
        state?.error && toast.error(state.error?.at(0) || state.error);
    }, [state]);

    return (
        <main className="container min-h-[calc(100vh-66px)] flex items-center flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-6 w-full">
                <form action={formAction} className="flex flex-col gap-4  order-2 md:order-1  ">
                    <div className="flex flex-col gap-2 items-start w-full mb-8">
                        <h1 className="text-4xl font-medium">Set a password</h1>
                        <p className="text-gray-500 text-lg">Your previous password has been reseted. Please set a new password for your account.</p>
                    </div>
                    <input type="hidden" name="phone" value={phone_number || ""} />
                    <input type="hidden" name="otp" value={otp_number || ""} />

                    <InputDemo
                        id={"new_password"}
                        label="New password"
                        type="password"
                        placeHolder="Enter your New Password"
                        error={state.new_password}
                    />
                    <InputDemo
                        id={"new_password2"}
                        label="Confirm New Password"
                        type="password"
                        placeHolder="confirm your password"
                        error={state.new_password2}
                    />
                    <div className="flex items-center justify-center">
                        <FormSubmittingButton name='Done' />
                    </div>
                </form>
                {/* Logo Banner Image */}
                <div className="w-full flex items-center justify-center order-1 md:order-2">
                    <Image src="/reset.png" alt="Login Image" width={400} height={400} />
                </div>
            </div>
        </main>
    )
}
