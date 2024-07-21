import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BackgroundProps {
  imageUrl?: string;
  color?: string;
  title?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  imageUrl,
  color,
  title,
}) => {
  const style = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
    backgroundColor: color,
  };

  return (
    <div
      style={style}
      className="w-full relative h-screen  bg-cover bg-center text-white "
    >
      <span
        style={{ fontFamily: "HelveticaNeueLTW05-93BlkExObl" }}
        className="flex h-full text-center items-center justify-center md:text-7xl text-5xl  italic font-bold max-w-xl mx-auto "
      >
        {title}
        <Link
          href="/properties"
          className="buttom absolute flex items-center justify-center m-3 gap-2 top-2/3  p-3 text-xs  mx-auto bg-[#F8F8F7] text-[#2D2D2D] border "
        >
          Explore Properties <ArrowUpRight size={16} />
        </Link>
      </span>
    </div>
  );
};
