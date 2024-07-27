import Image from "next/image";
import React from "react";
import group5 from "@../../../public/assets/home/Group5.svg";
import Frame1 from "@../../../public/assets/home/Group.svg";
import Frame2 from "@../../../public/assets/home/Frame (1).svg";
import Frame3 from "@../../../public/assets/home/Frame (2).svg";
import Frame4 from "@../../../public/assets/home/Frame.svg";
import { ArrowUpRight } from "lucide-react";
import { WeHelpYouProps } from "@/lib/types";

const PropertyCard: React.FC<WeHelpYouProps> = ({ weHelpYou }) => {
  return (
    <div className="  justify-center md:my-12 my-6  overflow-hidden">
      <div className="flex flex-col items-center gap-4 md:flex-row  ">
        <div className="md:w-1/2 flex md:justify-end">
          <Image
            src={weHelpYou?.main?.image || group5}
            width={300}
            height={300}
            alt="Property"
            className="w-[90%] h-[70%] object-cover"
            sizes="100%"
            loading="lazy"
          />
        </div>
        <div className="p-6 md:w-1/2  ">
          <h2 className="text-4xl font-bold mb-2 max-w-lg">
            {weHelpYou?.main?.title}
          </h2>
          <p className="text-gray-700  my-4 max-w-lg">
            Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
            Fusce at dui tincidunt nulla semper venenatis at et magna. Mauris
            turpis lorem, ultricies vel justo sed, ultrices auctor nisi.
          </p>
          <p className="text-gray-700 mb-4 max-w-lg">
            Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
            Fusce at dui tincidunt nulla semper.
          </p>
          <button className="bg-[#2D2D2D] text-white px-4 flex py-2 rounded">
            Read More <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row items-center justify-evenly my-8 text-xs gap-4		  ">
        <div className="flex text-sm flex-col items-center gap-3">
          <Image
            width={100}
            height={100}
            src={weHelpYou?.icons?.icon_1.icon || Frame1}
            alt="Property"
            className="w-6 h-6"
            sizes="100%"
            loading="lazy"
          />
          <span>{weHelpYou?.icons?.icon_1.text}</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            width={100}
            height={100}
            src={weHelpYou?.icons?.icon_2.icon || Frame2}
            alt="Property"
            className="w-6 h-6"
            sizes="100%"
            loading="lazy"
          />
          <span>{weHelpYou?.icons?.icon_2.text}</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            width={100}
            height={100}
            src={weHelpYou?.icons?.icon_3.icon || Frame3}
            alt="Property"
            className="w-6 h-6"
            sizes="100%"
            loading="lazy"
          />
          <span>{weHelpYou?.icons?.icon_3.text}</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            width={100}
            height={100}
            src={weHelpYou?.icons?.icon_4.icon || Frame4}
            alt="Property"
            className="w-6 h-6"
            sizes="100%"
            loading="lazy"
          />
          <span>{weHelpYou?.icons?.icon_4.text}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
