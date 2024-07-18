'use client';

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { handleUpdatePassword } from "@/lib/action";

import FormSubmittingButton from "@/components/forms/FormSubmittingButton";
import InputDemo from "@/components/helper/Input-demo";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Edit } from "lucide-react";
import CommonDialog from "../helper/CommonDialog";

const UpdatePassword = () => {
    const [open, setOpen] = useState(false)
    const [state, formAction] = useFormState(handleUpdatePassword, {
        old_password: "",
        new_password: "",
        new_password2: "",
    });

    //------------- Global Functions ---------------
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    //----------------- Public Effect ----------------
    useEffect(() => {
        state?.error && toast.error(state.error?.at(0) || state.error);
        if (state?.success) {
            toast.success(state.success);
            handleClose();
        }
    }, [state]);

    // --------------------- Return JSX ---------------

    function DialogForm(state) {
        return (
            <>
                <div>
                    <h3 className="text-lg font-medium my-0 py-0">Password</h3>
                    <div className="flex items-center rounded-md border-2 p-2 px-4 cursor-pointer" onClick={handleOpen}>
                        <p className="flex-1">************</p>
                        <Edit className="text-primary" />
                    </div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="sm:max-w-[750px] bg-gray-100">
                        <DialogHeader>
                            <DialogTitle className="text-black font-medium text-lg text-center">
                                Change Password
                            </DialogTitle>
                            <DialogDescription className="text-center">
                                Your password must be at least 8 characters long and contain at least one letter and one
                                digit
                            </DialogDescription>
                        </DialogHeader>
                        <form action={formAction} id="Change-User-Password" className="flex flex-col gap-4" >
                            <InputDemo
                                id={"old_password"}
                                label="Old Password"
                                type="password"
                                placeHolder="Enter your Old Password"
                                error={state.old_password}
                                inputStyle='bg-inherit border-2'
                            />
                            <InputDemo
                                id={"new_password"}
                                label="New password"
                                type="password"
                                placeHolder="Enter your New Password"
                                error={state.new_password}
                                inputStyle='bg-inherit border-2'
                            />
                            <InputDemo
                                id={"new_password2"}
                                label="Confirm New Password"
                                type="password"
                                placeHolder="confirm New your password"
                                error={state.new_password2}
                                inputStyle='bg-inherit border-2'
                            />
                            <div className="flex items-center justify-center">
                                <FormSubmittingButton name={"Change Password"} />
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
    return (
        <CommonDialog text='Add Animal ' DialogForm={DialogForm} />
    );
};

export default UpdatePassword;