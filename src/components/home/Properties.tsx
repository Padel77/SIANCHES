import React from "react";
import Carousel from "../ui/carousel";

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
      <Carousel items={properties} title="Properties" />
    </>
  );
};

export default Properties;
