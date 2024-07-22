import { Background } from "@/components/background/Background";
import React from "react";
import Logo from "./Rectangle.svg";

const page: React.FC = () => (
  <div>
    {" "}
    <Background
      imageUrl={Logo}
      className="flex h-full text-center items-center justify-center md:text-7xl text-5xl  italic font-bold max-w-lg mx-auto"
      title={"Get Ready to live for unlimited living experience"}
      showButton={false}
    />
  </div>
);

export default page;
