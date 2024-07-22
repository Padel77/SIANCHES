import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Logo1 from "../../../public/assets/about/Rectangle.svg";

interface BackgroundProps {
  imageUrl?: string;
  className?: string;
  title?: string;
  showButton?: boolean;
}

export const Background: React.FC<BackgroundProps> = ({
  imageUrl,
  className,
  title,
  showButton
}) => {
  const style = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : `url(${Logo1})`,
    backgroundColor: imageUrl ? "#0f0f0f0" : "transparent",
  };

  return (
    <div
      style={style}
      className="w-full relative h-screen bg-cover bg-center text-white"
    >
      <span
        style={{ fontFamily: "HelveticaNeueLTW05-93BlkExObl" }}
        className={clsx(className)}
      >
        {title}
        {showButton && <Link
          href="/Properties"
          className="absolute flex items-center justify-center  md:my-6 gap-2 top-2/3 p-3 text-xs mx-auto bg-[#F8F8F7] text-[#2D2D2D] border"
        >
          Explore Properties <ArrowUpRight size={16} />
        </Link>}
      </span>
    </div>
  );
};
