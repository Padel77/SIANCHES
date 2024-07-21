import Image from "next/image";
import React from "react";
import residential from "../../../public/assets/home/modern-residential.svg";

interface RealEstateAdProps {
  imageUrl?: string;
  title?: string;
  buttonText?: string;
}

const RealAdversting: React.FC<RealEstateAdProps> = ({
  imageUrl = "https://s3-alpha-sig.figma.com/img/4bb8/38ee/5e5cf4cdfce28225b6c96a62d2f2b068?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=psF8JkIDZ035~v1vKTPvS~PJZKN~DpPYBnFcWvYwjMIQz6YHFY~oOL~p-vht99tIO55fKqGmHUHcOBkenvL8mjWyc2oqcno4Sg2dl~ZruhrlVKtRmAgWJrP5PQ~ERKNiTj3jLgyiIWDhheRqE1YvoNdte0XimdkbYYP4NdRc~lZM-SxPZ8yXqgntHmahTilN5XgVDEdZ0uZSFuxdDUbvQ0YboyCyAusy~7qpfzh6CS3gosgrTInwKRwd9ShRnCXQ3YCOgPyMnT~P1O2qAAQs6QbSbWZ0HIL3SJZIA6mou94-tFTwwra7TJO5zq6Fy9t7~UVGEdY~eaINDgsUs3kA5g",
  title = "Sell your property with SIANCHES",
  buttonText = "Sell yours?",
}) => {
  return (
    <div className="relative  max-w-6xl mx-auto my-12">
      <div className="flex  flex-col md:flex-row items-center justify-between bg-[#F8F8F7] px-10 py-20 rounded-lg  ">
        <div className="">
          <h2 className="text-3xl max-w-md text-wrap font-bold ">{title}</h2>
          <button className="mt-4 px-4 py-2 bg-[#2D2D2D] text-white rounded hover:bg-blue-600">
            {buttonText}
            <span className="ml-2">→</span>
          </button>
        </div>
        <Image
          className="w-[50%] md:absolute hidden  end-0 "
          width={40}
          height={40}
          src={residential}
          alt="Real Estate"
        />
      </div>
    </div>
  );
};

export default RealAdversting;
