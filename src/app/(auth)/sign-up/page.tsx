import Image from "next/image";

import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUpPage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-screen hidden lg:block">
        <Image src='/authImage.png' width={600} height={400} alt='auth image' className="w-full h-full object-cover" />
      </div>
      <SignUpForm />
    </section>
  )
}
