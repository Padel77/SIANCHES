'use client';

import Link from "next/link";
import Image from "next/image";
import { useFormState } from "react-dom";

import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { handleValidateOtp } from "@/lib/action";

import { InputOTPDemo } from "@/components/helper/OtpInput";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";

import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { BASE_URL, cn } from "@/lib/utils";
import { toast } from "sonner";



export default function VerifyAccountForm() {
    const { searchParams } = UseSearchParamsHook();
    const [showTimer, setShowTimer] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(3 * 60); // 3 minutes in seconds

    let phone_number = searchParams.get("phone");
    let Is_Forget = searchParams.get("forget");

    const [state, formAction] = useFormState(handleValidateOtp, {
        otp: "",
        phone: '',
        is_forget:''
    });

    useEffect(() => {
        const startTime = Date.now();
        const endTime = startTime + 3 * 60 * 1000; // 3 minutes in milliseconds

        const timerId = setInterval(() => {
            const currentTime = Date.now();
            const timeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000));
            setTimeRemaining(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timerId);
                setShowTimer(false);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [showTimer]);

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    function handleResendOtp() {
        // Resend OTP
        fetch(BASE_URL + "/api/send-otp/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone: "+" + phone_number.trim(),
            })
        }).then((res) => {
            if (res?.status === 201 || res?.status === 200) {
                setShowTimer(true);
                setTimeRemaining(3 * 60); // 3 minutes in seconds
                toast.success("OTP sent successfully");
            } else {
                toast.error("Failed to resend OTP");
            }
        })
    }

    return (
        <main className="container min-h-[calc(100vh-66px)] flex items-center flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-6 w-full">
                <form action={formAction} className="flex flex-col gap-4  order-2 md:order-1  ">
                    <Link href="/login" className=" font-semibold flex items-center text-gray-500 "> <ChevronLeft />
                        Back To Login
                    </Link>
                    <div className="flex flex-col gap-2 items-start w-full mb-8">
                        <h1 className="text-4xl font-medium">Verify code</h1>
                        <p className="text-gray-500 text-lg">An authentication code has been sent to your email.</p>
                    </div>
                    <input type="hidden" name="phone" value={phone_number || ""} />
                    <input type="hidden" name="is_forget" value={Is_Forget || ""} />
                    <InputOTPDemo id='otp' error={state?.otp} />
                    <p>Didn’t receive a code? <span className={cn("mx-2 text-primary ", showTimer ? "pointer-events-none" : "cursor-pointer")} onClick={handleResendOtp}>
                        {showTimer ? `( ${formatTime(timeRemaining)} )` : "Resend OTP"}
                    </span></p>
                    <div className="flex items-center justify-center">
                        <FormSubmittingButton name='Submit' />
                    </div>
                </form>
                {/* Logo Banner Image */}
                <div className="w-full flex items-center justify-center order-1 md:order-2">
                    <Image src="/otp.png" alt="Login Image" width={600} height={600} className="w-full" />
                </div>
            </div>
        </main>
    )
}
