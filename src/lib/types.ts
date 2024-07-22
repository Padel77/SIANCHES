import { ChangeEvent } from "react";
export interface NavLinkItem {
  id: number;
  name: string;
  href: string;
  activeLink: string;
  children?: NavLinkItem[];
}

export interface NavLinkProps {
  links: NavLinkItem[];
}

export interface FormData {
  get(key: string): string | null;
}

export interface LoginFormData {
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
  token?: string;
}
export interface signUpFormState {
  email: string;
  password: string;
  full_name: string;
  national_image?: string;
  terms: string | boolean;
  error?: string;
  success?: string;
  token?: string;
}

export interface contactUsFormState {
  email: string;
  full_name: string;
  message: string;
  phone_number: string;
}


export interface NavbarProps {
  data?: any; // يمكنك تحديد النوع المناسب للبيانات
}
export interface RadioGroupInputsProps {
  inputs_details: {
    title: string;
    extras: {
      id: number;
      title: string;
      price: number;
    }[];
  };
  choiceDefaultValue?: number[];
  handleChange: (value: number | undefined) => void;
}
export interface WeHelpYouProps {
  weHelpYou: {
    main: {
      title: string;
      content: string;
      image: string;
    };
    icons: {
      icon_1: {
        icon: string;
        text: string;
      };
      icon_2: {
        icon: string;
        text: string;
      };
      icon_3: {
        icon: string;
        text: string;
      };
      icon_4: {
        icon: string;
        text: string;
      };
    };
  };
}
