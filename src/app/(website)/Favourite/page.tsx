import { hasCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export default function FaviortePage() {
  if (!hasCookie('token', { cookies })) {
    redirect('/sign-in')
  }
  return (
    <div className="container mx-auto py-4">
      Faviorte
    </div>
  );
}
