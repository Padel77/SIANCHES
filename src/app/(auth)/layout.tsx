import {  hasCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'


export default  function AuthLayout({ children }: { children: React.ReactNode }) {
    if (hasCookie('token', { cookies })) {
        redirect('/')
    }
    
    return  <>{children}</>
}