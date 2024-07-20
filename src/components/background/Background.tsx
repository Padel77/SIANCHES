import React from "react";

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
      <span className="flex h-full text-center items-center justify-center text-7xl  italic font-bold max-w-xl m-auto ">{title}</span>
    </div>
  );
};
