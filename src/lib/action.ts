"use server";

import { redirect } from "next/navigation";
import { BASE_URL, CreateFormData, Expired_time } from "@/lib/utils";
import { cookies } from "next/headers";
import { getCookie, hasCookie } from "cookies-next";

interface FormData {
  get(key: string): string | null;
}

interface LoginForm_data {
  email: string;
  password: string;
}
interface FormError {
  email?: string;
  full_name?: string;
  password?: string;
  national_image?: string;
  error?: string;
  success?: string;
  token?: string;
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
        Authorization: hasCookie("token", { cookies })
          ? `Bearer ${getCookie("token", { cookies })}`
          : getCookie("session", { cookies }),
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
      cache: "no-store" ,
      ...ExtraMethod, // Ensure you spread extra methods/options
    });

    // Handle successful response
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    // Handle unauthorized response
    if (response.status === 401) {
      redirectPath = "/login";
    }

    // Handle other errors
    const errorData = await response.json();
    throw new Error(errorData.message || "An error occurred");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        error.message || "Something went wrong, please try again later!"
      );
    } else {
      throw new Error("Something went wrong, please try again later!");
    }
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
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
    return { password: "Password is missing" };
  }

  const newFormData = CreateFormData({ email, password });
  let redirectPath: string | null = null;

  try {
    const response = await fetch(BASE_URL + "/login", {
      method: "POST",
      body: newFormData,
    });

    const data = await response.json();

    if (response.ok) {
      return { success: data?.message, token: data?.data?.token };
    } else if (response.status === 403) {
      redirectPath = `/sign-up`;
    } else {
      return data?.message === "password does not match"
        ? { password: data?.message }
        : { error: "User not found" };
    }
  } catch (error: any) {
    console.error("Error during fetch:", error);

    if (error instanceof TypeError) {
      throw new Error("Network error or invalid URL");
    } else {
      throw new Error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again later!"
      );
    }
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

/* 
  ! ############ SIGN FUNCTION ###################
  * @param {object} prevState - previous state of the form
  * @param {object} Form_data - form data
  ? @returns {object} - return object with error or success message and User token
*/

async function handleSignUp(
  prevState: any,
  Form_data: FormData
): Promise<FormError> {
  const email = Form_data.get("email") as string | null;
  const password = Form_data.get("password") as string | null;
  const fullName = Form_data.get("full_name") as string | null;
  const nationalImage = Form_data.get("national_image") as File | null;

  if (!email || !isValidEmail(email)) {
    return { email: "Email is not valid" };
  }

  if (!fullName || fullName.length < 10) {
    return { full_name: "Full name must be at least 10 characters" };
  }

  if (!password) {
    return { password: "Password is missing" };
  }

  if (!nationalImage || nationalImage.name === "undefined") {
    return { national_image: "National image is missing" };
  }

  // ######### Post Actions #########
  const newFormData = CreateFormData({
    email,
    password,
    full_name: fullName,
    national_image: nationalImage,
    terms: 1,
    password_confirmation: password,
  });

  let redirectPath: string | null = null;
  try {
    const response = await fetch(BASE_URL + "/register", {
      method: "POST",
      body: newFormData,
    });
    const data = await response.json();

    if (response.status === 200 || response.status === 201) {
      return { success: data?.message, token: data?.data?.token };
    } else if (response.status === 403) {
      redirectPath = `/sign-up`;
    } else {
      redirectPath = null;
      return data?.message === "full name at least be min :min words"
        ? { full_name: data?.message }
        : { error: data?.message };
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

  return {};
}

async function handleLogOut() {
  try {
    const response = await fetch(BASE_URL + "/logout", {
      method: "POST",
    });

    const data = await response.json();

    if (response.ok) {
      return { success: data?.message };
    } else {
      return { error: data?.error };
    }
  } catch (error: any) {
    console.error("Error during fetch:", error);

    if (error instanceof TypeError) {
      throw new Error("Network error or invalid URL");
    } else {
      throw new Error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again later!"
      );
    }
  } finally {
    redirect("/");
  }
}
export { handleLogin, GetDataInServerSide, handleSignUp, handleLogOut };
