import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export let Expired_time = {
  maxAge: 60 * 60 * 24 
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ############### clear default input numbers  ###############

export const handleKeyDown: any = (event : KeyboardEvent) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
}


export const handleWheel : any = (event: WheelEvent) => {
  (event.target as HTMLElement).blur();
};

export function FilterBath(pathname: string, numberOfSplit: number = 1): string {
  return pathname.split("/")[numberOfSplit];
}

export function CreateFormData<T extends Record<string, any>>(values: T, formData: FormData = new FormData()): FormData {
  Object.keys(values).forEach((key) => {
    formData.append(key, values[key]);
  });
  return formData;
}

