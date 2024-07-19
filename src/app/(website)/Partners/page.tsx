import React from "react";

interface AboutProps {
  text: string;
}

const page: React.FC<AboutProps> = () => (
  <div className="p-4 text-xl text-center">Parteners</div>
);

export default page;
