'use client';


import { useFormState } from "react-dom";
import Link from "next/link";
import Image from "next/image";

import { handleSubmit } from "@/lib/action";

import InputDemo from "@/components/helper/Input-demo";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";


export default function RegisterForm() {

    const [state, formAction] = useFormState(handleSubmit, {
        phone: "",
        password: "",
        full_name: "",
        confirmPassword: "",
        email: "",
    });

    return (
        <main className="container min-h-[calc(100vh-66px)] flex items-center flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-6 w-full">
                <form action={formAction} className="flex flex-col gap-4  order-2 md:order-1">
                    <h1 className="text-4xl font-semibold">Sign Up</h1>
                    <InputDemo
                        id={"full_name"}
                        label="Full Name"
                        type="text"
                        placeHolder="Enter your Full Name"
                        error={state.full_name}
                    />
                    <InputDemo
                        id={"phone"}
                        label="Phone number"
                        type="number"
                        placeHolder="Enter your phone number"
                        error={state.phone}
                    />
                    <InputDemo
                        id={"email"}
                        label="Email"
                        type="email"
                        placeHolder="Enter your Email Address"
                        error={state.email}
                    />
                    <InputDemo
                        id={"password"}
                        label="Password"
                        type="password"
                        placeHolder="Enter your Password"
                        error={state.password}
                    />
                    <InputDemo
                        id={"confirmPassword"}
                        label="Confirm Password"
                        type="password"
                        placeHolder="Enter your Password"
                        error={state.confirmPassword}
                    />

                    <div className="flex items-center justify-center">
                        <FormSubmittingButton name="Sign Up" />
                    </div>
                    <h1 className="text-center text-gray-600">Already have an account? <Link href="/login" className="text-primary font-semibold text-xl"> Log in</Link></h1>
                </form>
                {/* Logo Banner Image */}
                <div className="w-full flex items-start justify-center order-1 md:order-2">
                    <Image src="/loginImage.png" alt="Login Image" width={600} height={600} className="w-full" />
                </div>
            </div>
        </main>
    )
}
