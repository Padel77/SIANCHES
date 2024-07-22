import { Background } from "@/components/background/Background";
import Navbar from "@/components/header/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Background
          title={"Page Not Found"}
          className="flex h-full text-center items-center justify-center md:text-7xl text-5xl  italic font-bold max-w-lg mx-auto"
          showButton={false}
        />
      </div>
    </>
  );
}
