export interface FormData {
    get(key: string): string | null;
  }
  
export  interface LoginFormData {
    phone: string;
    password: string;
  }
