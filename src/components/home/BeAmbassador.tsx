import Image from "next/image";
import React from "react";
import residential from "@../../../public/assets/beAmbasedor/wooden-keychain.svg";
import { ArrowUpRight } from "lucide-react";

interface BeAmbassadorProps {
  imageUrl?: string;
  title?: string;
  buttonText?: string;
}

const BeAmbassador: React.FC<BeAmbassadorProps> = ({
  imageUrl = "https://s3-alpha-sig.figma.com/img/4bb8/38ee/5e5cf4cdfce28225b6c96a62d2f2b068?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=psF8JkIDZ035~v1vKTPvS~PJZKN~DpPYBnFcWvYwjMIQz6YHFY~oOL~p-vht99tIO55fKqGmHUHcOBkenvL8mjWyc2oqcno4Sg2dl~ZruhrlVKtRmAgWJrP5PQ~ERKNiTj3jLgyiIWDhheRqE1YvoNdte0XimdkbYYP4NdRc~lZM-SxPZ8yXqgntHmahTilN5XgVDEdZ0uZSFuxdDUbvQ0YboyCyAusy~7qpfzh6CS3gosgrTInwKRwd9ShRnCXQ3YCOgPyMnT~P1O2qAAQs6QbSbWZ0HIL3SJZIA6mou94-tFTwwra7TJO5zq6Fy9t7~UVGEdY~eaINDgsUs3kA5g",
  title = "Become an ambassador",
  buttonText = "Register Now",
}) => {
  return (
    <div className="relative  max-w-6xl mx-auto my-24">
      <div className="flex  flex-col md:flex-row items-center justify-end bg-[#F8F8F7] px-10 py-20 rounded-lg  ">
        <div className=" ">
          <h2 className="text-3xl max-w-md text-wrap font-black capitalize ">
            {title}
          </h2>
          <button className="flex items-center mt-4 px-4 py-2 bg-[#2D2D2D] text-white rounded hover:bg-blue-600">
            {buttonText}
            <span className="ml-2">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
        <Image
          className="md:w-1/2 lg:absolute hidden md:block start-0 "
          width={40}
          height={40}
          src={residential}
          alt="Real Estate"
        />
      </div>
    </div>
  );
};

export default BeAmbassador;
