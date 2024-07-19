"use server";

import { redirect } from "next/navigation";
import { BASE_URL, Expired_time } from "@/lib/utils";
import { cookies } from "next/headers";
import { setCookie, getCookie, hasCookie } from "cookies-next";
import { revalidatePath } from "next/cache";

interface FormData {
    get(key: string): string | null;
}

interface LoginFormData {
    phone: string;
    password: string;
}


function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password: string): boolean {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}

function isValidUserName(userName: string): boolean {
    return /^[a-zA-Z0-9 ]{3,30}$/.test(userName);
}

function isValidPhoneNumber(number: string): boolean {
    // Regular expression to match U.S. phone number formats
    const usPhoneNumberPattern =
        /^(?:\+1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return usPhoneNumberPattern.test(number);
}



/* 
  ! ############ LOGIN FUNCTION ###################
  * @param {object} prevState - previous state of the form
  * @param {object} formData - form data
  ? @returns {object} - return object with error or success message and User token
*/
async function handleLogin(prevState: any, formData: FormData): Promise<any> {
    const phone = formData.get("phone");
    const password = formData.get("password");

    if (!phone || !password) {
        return { phone: "Phone number or password is missing" };
    }

    const FormData: LoginFormData = {
        phone: "+1" + phone,
        password: password,
    };

    if (!isValidPhoneNumber(FormData.phone)) {
        return { phone: "Phone number is not valid" };
    }
    if (!isValidPassword(FormData.password)) {
        return {
            password:
                "Password is not valid must have at least one Uppercase & lowercase",
        };
    }
    // ######### Post Actions #########
    else {
        let redirectPath: string | null = null;
        try {
            const response = await fetch(BASE_URL + "/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(FormData),
            });
            const data = await response.json();

            if (response.status === 201 || response.status === 200) {
                cookies().set("token", data?.token, Expired_time);
                redirectPath = `/`;
                return { success: "User logged in successfully" };
            } else if (response.status === 403) {
                redirectPath = `/verify-password?phone=${FormData.phone}`;
            } else {
                redirectPath = null;
                return data?.phone
                    ? data
                    : data?.password
                        ? data
                        : { phone: data?.message || "User not found" };
            }
        } catch (error: any) {
            redirectPath = null;
            throw new Error(
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong. Please try again later!"
            );
        } finally {
            if (redirectPath) {
                redirect(redirectPath);
            }
        }
    }
}



export { handleLogin }