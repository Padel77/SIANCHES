'use client';

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { handleUpdatePassword } from "@/lib/action";

import FormSubmittingButton from "@/components/forms/FormSubmittingButton";
import InputDemo from "@/components/helper/Input-demo";
import { toast } from "sonner";

import CommonDialog from "@/components/helper/CommonDialog";


function DialogForm({ handleClose }) {
    const [state, formAction] = useFormState(handleUpdatePassword, {
        old_password: "",
        new_password: "",
        new_password2: "",
    });

    //----------------- Public Effect ----------------
    useEffect(() => {
        state?.error && toast.error(state.error?.at(0) || state.error);
        if (state?.success) {
            toast.success(state.success);
            handleClose();
        }
    }, [state]);

    // --------------------- Return JSX ---------------

    return (
        <form action={formAction} id="Change-User-Password" className="flex flex-col gap-4" >
            <InputDemo
                id={"old_password"}
                label="Old Password"
                type="text"
                placeHolder="Enter your Old Password"
                error={state.old_password}
                inputStyle='bg-inherit border-2'
            />
            <div className="flex items-center justify-center">
                <FormSubmittingButton name={"Add"} />
            </div>
        </form>
    )
}


const AddAnimalForm = () => {
    return (
        <CommonDialog text='Add type' DialogForm={DialogForm} importReport={false} />
    );
};



export default AddAnimalForm;