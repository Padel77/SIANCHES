'use client';

import { toast } from "sonner";
import { useFormState } from "react-dom";
import { useEffect } from "react";

import { handleAddPromoCode } from "@/lib/action";
import { cn } from "@/lib/utils";

import InputDemo from "@/components/helper/Input-demo";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";

export default function AddPromoCodeForm({ handleGetNewPrice }) {
    const [state, formAction] = useFormState(handleAddPromoCode, {
        coupon: "",
    });

    useEffect(() => {
        if (state.success) {
            toast.success("Promo code added successfully!");
            handleGetNewPrice(state?.data?.discount / 100);
        }
        if (state.error || state.coupon) {
            toast.error(state.coupon || state.error || "Failed to add promo code!");
            handleGetNewPrice(0);
        }
    }, [state]);
    return (
        <form action={formAction} className="flex flex-col md:flex-row gap-4 w-full justify-between my-5">
            <InputDemo
                id="coupon"
                inputStyle={`${state.coupon ? "border-red-500" : "border-primary"} rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-inherit`}
                placeHolder={"Add Promo Code"}
                error={state.coupon}

            />
            <div className={cn('flex', state?.coupon ? 'h-[60px] items-end' : 'h-[40px] items-center')}>
                <FormSubmittingButton name='Apply' style="rounded-xl px-4 text-md font-light hover:bg-inherit hover:border-2 hover:border-primary w-full md:w-fit" />
            </div>
        </form>
    )
}
