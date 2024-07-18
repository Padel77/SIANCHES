'use client';

import { useState } from "react";

import { ISValidEmail, ISValidUserName, handleUpdateUserProfile } from "@/lib/action";

import InputDemo from "@/components/helper/Input-demo";
import UpdatePassword from "@/components/forms/UpdatePasswordForm";
import FormSubmittingButton from "@/components/forms/FormSubmittingButton";
import { toast } from "sonner";

export default function UpdateProfileForm({ user_Info }) {
    const [fullName, setFullName] = useState(user_Info?.full_name || '');
    const [email, setEmail] = useState(user_Info?.email || '');

    function handleFullNameChange(e) {
        setFullName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    async function OnFormAction() {
        if (user_Info?.full_name === fullName && user_Info?.email === email) return toast.warning('No changes made to the form fields.');
        if (!(await ISValidUserName(fullName)) || !(await ISValidEmail(email))) return toast.warning('Please enter valid details.');
        await handleUpdateUserProfile({
            full_name: fullName,
            email: email,
        }).then(res => {
            res?.error && toast.error(res.error);
            res?.success && toast.success(res.success);
        })
    }
    return (
        <form action={OnFormAction} className="flex flex-col gap-5 mt-0 md:mt-12">
            <h1 className="font-medium text-2xl">Account details</h1>
            <InputDemo label="Full name" placeHolder='Enter Your Name' id='full_name' value={fullName} onChange={handleFullNameChange} />
            <InputDemo type="email" label="Email" placeHolder='Enter Your Mail' id='email' value={email} onChange={handleEmailChange} />
            <InputDemo type="number" label="Phone Number" placeHolder='(xxx) xxx-xxx' disabled={true} value={+user_Info?.phone || ""} />
            <UpdatePassword />
            <div className="flex items-center justify-center">
                <FormSubmittingButton name='Done' />
            </div>
        </form>
    )
}
