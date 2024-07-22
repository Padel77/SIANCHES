"use client";
import Image from "next/image";
import React from "react";
import FormSubmittingButton from "../forms/FormSubmittingButton";
import { Checkbox } from "../ui/checkbox";
import InputDemo from "../helper/Input-demo";
import { useFormState } from "react-dom";
import { contactUsFormState, signUpFormState } from "@/lib/types";
import { handleSignUp } from "@/lib/action";
import {
  CameraIcon,
  KeyRound,
  Mail,
  MessageCircle,
  Phone,
  PhoneCall,
  User,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Logo from "../../../public/assets/home/hand-presenting.svg";
import { Button } from "../ui/button";
interface ContactFormProps {
  phoneNumber?: string;
  emailAddress?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  phoneNumber,
  emailAddress,
}) => {
  const [state, formAction] = useFormState<contactUsFormState>(
    handleSignUp as any,
    {
      email: "",
      full_name: "",
      phone_number: "",
      message: "",
    }
  );

  const [checked, setChecked] = useState(false);

  const handleChecked = useCallback(
    (e: any) => setChecked(!checked),
    [checked]
  );
  return (
    <div className="flex flex-col md:flex-row  items-center justify-center md:my-10">
      <div className="flex justify-between  gap-6">
        <div className="md:w-1/2 flex-col gap-4">
          <h1 className="text-3xl font-bold my-4 max-w-md ">
            We&#39;ll help you find a place you&#39;ll love!
          </h1>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex gap-2">
              <PhoneCall size={16} />
              <div className="mb-2 block">
                Phone Number:<p> {phoneNumber}</p>
              </div>
            </div>
            <div className="flex  gap-2">
              <Mail size={16} />
              <div className="mb-2 block">
                Email Address:<p> {emailAddress}</p>
              </div>
            </div>
          </div>
          <Image
            src={Logo}
            width={500}
            height={400}
            alt="House model"
            className="md:absolute left-0  object-fill  "
          />
        </div>
        <div className="w-1/2 md:block hidden ">
          <h1 className="text-3xl font-black mb-4">Contact us</h1>
          <p className="mb-4">
            We will respond as soon as we receive your message.
          </p>
          <form
            action={formAction}
            className="flex flex-col  justify-center gap-8 w-full max-w-full px-4"
          >
            <InputDemo
              id="full_name"
              label="Name"
              type="text"
              placeHolder="Enter your full name"
              error={state.full_name}
            />
            <InputDemo
              id="email"
              label="Email Address"
              type="email"
              placeHolder="Enter your Email Address"
              error={state.email}
            />

            <div className="flex items-end justify-between flex-col">
              <InputDemo
                id="phone_number"
                label="Phone Number"
                type="text"
                placeHolder="Enter your Phone Number"
                error={state.phone_number}
              />
            </div>
            <InputDemo
              id="message"
              label="message"
              type="text"
              placeHolder="Enter your full name"
              error={state.message}
            />

            <div className="flex items-center justify-end">
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-950"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
