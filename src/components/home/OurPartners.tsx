import React from "react";
import Image from "next/image";
import Link from "next/link";
interface OurPartnersProps {
  partners: Item[];
}
interface Item {
  ordering: number;
  link: string;
  logo: string;
}
const Partners: React.FC<OurPartnersProps> = ({ partners }) => {
  return (
    <div className="text-center w-full p-10 ">
      <p className="text-3xl font-black my-1">Our Partners</p>
      <div className="flex md:justify-between justify-center flex-wrap md:flex-nowrap   items-center  ">
        {partners?.map((Item,index) => (
          <>
            <Link key={index} href={Item.link}>
              <Image
                width={200}
                height={200}
                key={Item.logo}
                src={Item.logo}
                alt={Item.logo || "logo"}
                className="partner-logo"
              />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Partners;
