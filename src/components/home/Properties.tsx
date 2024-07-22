import Link from "next/link";
import React from "react";

import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";

import Image from "next/image";
import DropProject from "../helper/DropProject";
import SliderComp from "../helper/SliderComp";

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
const Properties: React.FC<propertiesProps> = ({ properties }) => {


  return (
    <>
      <div className="sm:my-10 my-0 sm:block hidden">
        <div className="sm:block hidden mx-auto text-center">
          <p className="text-2xl font-bold">Properties</p>
        </div>
        <div
          className="flex  my-2 justify-center items-center gap-2 "
          id="slider1"
        >
          {properties?.map((item) => (
            <div key={item.id} className="p-2 flex-shrink-0">
              <Link href={`/properties`} className="">
                <div className="w-full h-full bg-white rounded flex ">
                  <Image
                    width={300}
                    height={300}
                    className="h-full rounded"
                    src={item.image}
                    alt={item.description}
                  />
                </div>
              </Link>
              <div className="flex text-center items-center justify-between p-2">
                <p className="text-lg">{item.name}</p>
                <ArrowDown
                  size={16}
                  cursor={"pointer"}
                />
              </div>
            </div>
          ))}
        </div>
        <SliderComp properties={properties} />
      </div>
    </>
  );
};

export default Properties;
