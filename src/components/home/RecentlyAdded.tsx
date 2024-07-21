import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";
import Rectangle1 from "../../../public/assets/home/Rectangle 16 (1).svg";
import Rectangle2 from "../../../public/assets/home/Rectangle 16 (2).svg";
import Rectangle3 from "../../../public/assets/home/Rectangle 16.svg";

import Image from "next/image";
import { Button } from "../ui/button";

interface Item {
  id: number;
  img: string;
  description: string;
  price: number;
}

const RecentlyAdded: React.FC = () => {
  const filteredItems: Item[] = [
    {
      id: 1,
      img: Rectangle1,
      description: "New Cairo",
      price: 200,
    },
    {
      id: 2,
      img: Rectangle2,
      description: "October",
      price: 100,
    },
    {
      id: 3,
      img: Rectangle3,
      description: "Seaside",
      price: 100,
    },
  ];

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
      <div className="sm:my-12 my-0 sm:block hidden">
        <div className="sm:block hidden mx-auto text-center">
          <p className="text-2xl font-bold">Recently Added</p>
        </div>
        <div
          className="flex  my-2 justify-center items-center gap-2 "
          id="slider1"
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="p-2 flex-shrink-0">
              <Link href={`/`} className="">
                <div className="w-full h-full bg-white rounded flex ">
                  <Image
                    className="h-full rounded"
                    src={item.img}
                    alt={item.description}
                  />
                </div>
              </Link>
              <div className="flex text-center items-center justify-between p-2">
                <p className="text-lg">{item.description}</p>
                <p>
                  <ArrowDown size={16} />
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:flex hidden items-center gap-2 justify-center text-xl">
          <Button
            className="bg-none "
            title="scroll left"
            // onClick={function () {}} //slideLeft as () => void}
          >
            <ArrowLeft />
          </Button>
          <Button
            className="bg-none "
            title="scroll right"
            // onClick={slideRight as () => void}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
