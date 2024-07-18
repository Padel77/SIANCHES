'use client';

import { useFormState } from "react-dom";

import { handleLogin } from "@/lib/action";

import InputDemo from "@/components/helper/Input-demo";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";

export default function LoginForm() {

    const [state, formAction] = useFormState(handleLogin, {
        phone: "",
        password: "",
    });
    return (
        <main className="container h-full flex items-center flex-col justify-center">
            <form action={formAction} className="flex flex-col justify-center  p-12 gap-4  order-2 md:order-1  shadow-lg w-[580px] max-w-full h-[580px] max-h-full rounded-lg">
                <h1 className="text-4xl font-semibold mb-8">Welcome Back !</h1>
                <InputDemo
                    id={"phone"}
                    label="Email Address"
                    type="number"
                    placeHolder="Enter your Email Address"
                    error={state.phone}
                />
                <div className="flex items-end justify-between flex-col">
                    <InputDemo
                        id={"password"}
                        label="Password"
                        type="password"
                        placeHolder="Enter your Password"
                        error={state.password}
                    />
                </div>

                <div className="flex items-center justify-center">
                    <FormSubmittingButton name='Login' style="w-3/5" />
                </div>
            </form>
        </main>
    )
}
