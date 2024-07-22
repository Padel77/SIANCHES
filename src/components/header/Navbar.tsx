import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AlignJustify,
  ArrowUpRight,
  Globe,
  Heart,
  MenuIcon,
} from "lucide-react";
import { NavLink } from "./NavLink";
import Logo from "../../../public/assets/Frame 33.svg";
import { Button } from "../ui/button";
import { NavbarProps } from "@/lib/types";
import { Avatar } from "../ui/avatar";
import ProfileDropDown from "../helper/ProfileDropDown";
import { getCookie, hasCookie } from "cookies-next";
import MobileMenu from "./MobileMenu";
import { GetDataInServerSide } from "@/lib/action";

const NavItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    activeLink: "",
  },
  {
    id: 2,
    name: "About us",
    href: "/about",
    activeLink: "about",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
    activeLink: "services",
  },
  {
    id: 4,
    name: "Properties",
    href: "/properties",
    activeLink: "properties",
    children: [
      {
        id: 6,
        name: "Buy",
        href: "/properties/buy",
        activeLink: "buy",
      },
      {
        id: 7,
        name: "Sell",
        href: "/properties/sell",
        activeLink: "sell",
      },
      {
        id: 8,
        name: "Rent",
        href: "/properties/rent",
        activeLink: "rent",
      },
    ],
  },
  {
    id: 5,
    name: "Our Partners",
    href: "/partners",
    activeLink: "partners",
  },
  {
    id: 6,
    name: "Contact us",
    href: "/contact",
    activeLink: "contact",
  },
];

const Navbar: React.FC = async () => {
  const istoken = hasCookie("token");
  const token = getCookie("token");
  let fetchedData;
  if (istoken && token != "") {
    try {
      const response = await GetDataInServerSide("/profile/", token);
      fetchedData = JSON.stringify(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="top-0 left w-full relative">
      <nav className="flex px-5 h-20 py-4 text-sm lg:container absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-x-5 m-auto">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
          <NavLink links={NavItems} />
          <div className="md:flex  items-center text-[#f2f2f2] gap-x-2">
            <div className="md:flex hidden   items-center text-[#f2f2f2] gap-x-2">
              <div className="flex items-center gap-x-1 text-[12px]">
                <Globe size={20} strokeWidth={1} />
                <span>Ar</span>
              </div>
              <span className="border-r border-1 h-8"></span>
              <div className="flex items-center font-medium">
                <Link href="/Favourite">
                  <Heart size={24} strokeWidth={1} />
                </Link>
              </div>
              {!istoken ? (
                <Link
                  href="/sign-up"
                  className="md:flex hidden  items-center justify-center capitalize  p-2 text-xs  w-full  bg-[#F8F8F7] text-[#2D2D2D] border "
                >
                  Become an ambassador <ArrowUpRight size={16} />
                </Link>
              ) : (
                <>
                  <ProfileDropDown image={Logo} loading={false} />
                </>
              )}
            </div>
            {/* Mobile Menu */}
            <MobileMenu />
            {/* Mobile Menu */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
