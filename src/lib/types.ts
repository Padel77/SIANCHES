import { ChangeEvent } from "react";

export interface FormData {
    get(key: string): string | null;
  }
  
export  interface LoginFormData {
    phone: string;
    password: string;
  }

  export interface AboutProps {
    text: string;
  }

  export interface InputDemoProps {
    id: string;
    label?: string | JSX.Element;
    style?: string;
    inputStyle?: string;
    type?: "text" | "email" | "date" | "password" | "number" | "file";
    placeHolder?: string;
    disabled?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    selectValue?: string;
    selectItem?: string[];
    defaultValue?: string;
    isChoices?: boolean | null;
    icon?: JSX.Element;
}
export interface LoginFormState {
  email: string;
  password: string;
  error?: string;
  success?: string;
  token?: string
}
export interface signUpFormState {
  email: string;
  password: string;
  full_name: string;
  national_image?: string;
  terms: string | boolean;
  error?: string;
  success?: string;
  token?: string
}
