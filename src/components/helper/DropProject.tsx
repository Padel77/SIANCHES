"use client";

import { ArrowDown } from "lucide-react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Item {
  id: number;
  image: string;
  description: string;
  name: string;
}

interface DropProps {
  projects?: Item[];
}

const DropProject: React.FC<DropProps> = ({ projects = [] }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => setOpen(!open);

  return (
    <div>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      ;
      {/* <p>
        <ArrowDown
          size={16}
          cursor={"pointer"}
          onClick={handleToggle}
          className={`transition-transform duration-200 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </p>
      <div
        className={`transition-max-height duration-200 ease-in-out overflow-hidden block ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        {projects.length > 0 ? (
          projects.map((item) => (
            <p key={item.id} className="text-lg">
              {item.name}
            </p>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div> */}
    </div>
  );
};

export default DropProject;
