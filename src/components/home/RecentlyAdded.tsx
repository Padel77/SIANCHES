import React from "react";
import Carousel from "../ui/carousel";

interface Item {
  id?: number;
  image: string;
  description: string;
  name?: string;
  projects?: [];
}
interface RecentlyAddedProps {
  recentlyAdded: Item[];
}
const RecentlyAdded: React.FC<RecentlyAddedProps> = ({ recentlyAdded }) => {
  return (
    <>
      <Carousel items={recentlyAdded} title="Recently added" />
    </>
  );
};

export default RecentlyAdded;
