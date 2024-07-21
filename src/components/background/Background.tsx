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
      className="w-full relative h-screen fixed bg-cover bg-center text-white "
    >
      <span className="flex h-full text-center items-center justify-center text-7xl  italic font-bold max-w-xl m-auto ">
        {title}
      </span>
      <Link href="/properties" className="buttom absolute flex items-center justify-center top-3/4  p-2 text-sm  mx-auto bg-[#F8F8F7] text-[#2D2D2D] border ">Explore Properties <ArrowUpRight size={16}/></Link>
    </div>
  );
};
