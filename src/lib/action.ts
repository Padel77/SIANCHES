"use server";

import { redirect } from "next/navigation";
import { BASE_URL, CreateFormData, Expired_time } from "@/lib/utils";
import { cookies } from "next/headers";
import { setCookie, getCookie, hasCookie } from "cookies-next";
import { revalidatePath } from "next/cache";

interface FormData {
    get(key: string): string | null;
}

interface LoginForm_data {
    email: string;
    password: string;
}


function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUserName(userName: string): boolean {
    return /^[a-zA-Z0-9 ]{3,30}$/.test(userName);
}


/* 
    ! ############ GET DATA IN SERVER SIDE FUNCTION ###################
    * @param {string} End_Point - request end point
    * @param {object} headers - request headers
    * @param {object} method - request Another method
    ? {...} - request body parameters or query parameters
*/
async function GetDataInServerSide(
    End_Point = "",
    ExtraMethod = {},
    Authorization = true
) {
    /*
     * Default Headers If Not Provided Or Not Valid.
     */
    let headers = Authorization
        ? {
            "Content-Type": "application/json",
            Authorization: hasCookie("token", { cookies }) ? `Bearer ${getCookie("token", { cookies })}` : getCookie("session", { cookies }),
        }
        : {
            "Content-Type": "application/json",
        };

    let redirectPath;
    try {
        const response = await fetch(BASE_URL + End_Point, {
            method: "GET",
            headers: headers as any,
            // ? if You Want To Use Extra Method For Request Such as Cache Control, etc.
            cache: "no-store",
        });
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
            return data;
        } else if (response.status === 401) {
            redirectPath = "/login";
        } else {
            throw new Error(
                data.message || response.error || response?.data?.message
            );
        }
    } catch (error) {
        throw new Error(
            error?.response?.message ||
            "Something went wrong please try again later !!!"
        );
    } finally {
        redirectPath && redirect(redirectPath);
    }
}



/* 
  ! ############ LOGIN FUNCTION ###################
  * @param {object} prevState - previous state of the form
  * @param {object} Form_data - form data
  ? @returns {object} - return object with error or success message and User token
*/
async function handleLogin(prevState: any, Form_data: FormData) {
    const email = Form_data.get("email");
    const password = Form_data.get("password");

    if (!email || !isValidEmail(email)) {
        return { email: "Email is not valid" };
    }

    if (!password) {
        return { password: "password is missing" };
    }

    // ######### Post Actions #########
    else {
        const newFormData = CreateFormData({ email, password });
        let redirectPath: string | null = null;
        try {
            const response = await fetch(BASE_URL + "/login", {
                method: "POST",
                body: newFormData,
            });
            const data = await response.json();

            if (response.status === 201 || response.status === 200) {
                return { success: data?.message , token: data?.data?.token };
            } else if (response.status === 403) {
                redirectPath = `/sign-up`;
            } else {
                redirectPath = null;
                return data?.message === 'password doest match' ? { password: data?.message } : { error: "User not found" };
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



export { handleLogin, GetDataInServerSide }