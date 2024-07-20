// 'use client';

// import Link from "next/link";
// import Image from "next/image";
// import { useFormState } from "react-dom";

// import { handleForgetPassword } from "@/lib/action";

// import InputDemo from "@/components/helper/Input-demo";
// import FormSubmittingButton from "@/components/forms/FormSubmittingButton";

// import { ChevronLeft } from "lucide-react";

// export default function ForgetPasswordForm() {

//   const [state, formAction] = useFormState(handleForgetPassword as any, {
//     phone: "",
//   });
  

//   return (
//     <main className="container min-h-[calc(100vh-66px)] flex items-center flex-col justify-center">
//       <div className="grid md:grid-cols-2 gap-6 w-full">
//         <form action={formAction} className="flex flex-col gap-4  order-2 md:order-1  ">
//           <Link href="/login" className=" font-semibold flex items-center text-gray-500 "> <ChevronLeft />
//             Back To Login
//           </Link>
//           <div className="flex flex-col gap-2 items-start w-full mb-8">
//             <h1 className="text-4xl font-medium">Forgot your password?</h1>
//             <p className="text-gray-500 text-lg">Don’t worry, happens to all of us. Enter your email below to recover your password</p>
//           </div>
//           <InputDemo
//             id={"phone"}
//             label="Phone number"
//             type="number"
//             placeHolder="Enter your phone number"
//             error={state.phone}
//             value={state.phone}
//             onChange={(e) => setState((prevState) => ({ ...prevState, phone: e.target.value }))}
//           />
//           <div className="flex items-center justify-center">
//             <FormSubmittingButton name='Submit' />
//           </div>
//         </form>
//         {/* Logo Banner Image */}
//         <div className="w-full flex items-center justify-center order-1 md:order-2">
//           <Image src="/otp.png" alt="Login Image" width={600} height={600} className="w-full" />
//         </div>
//       </div>
//     </main>
//   )
// }

