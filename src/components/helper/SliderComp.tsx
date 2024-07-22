"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface Item {
  id?: number;
  image: string;
  description: string;
  name?: string;
  projects?: [];
}
interface propertiesProps {
  properties: Item[];
}
const SliderComp: React.FC<propertiesProps> = ({ properties }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider1");
    if (slider) {
      slider.scrollLeft -= 235;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider1");
    if (slider) {
      slider.scrollLeft += 235;
    }
  };

  return (
    <>

      <div className="sm:flex hidden items-center gap-2 justify-center text-xl">
        <Button
          className="bg-none "
          title="scroll left"
          onClick={slideLeft as () => void}

        >
          <ArrowLeft />
        </Button>
        <Button
          className="bg-none "
          title="scroll right"
          onClick={slideRight as () => void}
        >
          <ArrowRight />
        </Button>
      </div>
    </>
  );
};

export default SliderComp;
