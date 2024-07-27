import Image from "next/image";
import React from "react";
import residential from "@../../../public/assets/home/modern-residential.svg";
import { ArrowUpRight } from "lucide-react";

interface RealEstateAdProps {
  imageUrl?: string;
  title?: string;
  buttonText?: string;
}

const RealAdversting: React.FC<RealEstateAdProps> = ({
  imageUrl = { residential },
  title = "Sell your property with SIANCHES",
  buttonText = "Sell your unit",
}) => {
  return (
    <div className="relative  max-w-6xl mx-auto my-12 ">
      <div className="flex  flex-col md:flex-row items-center justify-between bg-[#F8F8F7] px-10 py-20 rounded-lg  ">
        <div className="">
          <h2 className="text-3xl max-w-md text-wrap font-black ">{title}</h2>
          <button className="flex items-center mt-4 px-4 py-2 bg-[#2D2D2D] text-white rounded hover:bg-blue-600">
            {buttonText}
            <span className="ml-2">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
        <Image
          className="md:w-[50%] md:absolute hidden md:block   end-0 "
          width={40}
          height={40}
          src={residential}
          alt="Real Estate"
          sizes="100%"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default RealAdversting;
