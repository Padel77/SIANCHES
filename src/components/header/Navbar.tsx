"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify, ArrowUpRight, Globe, Heart, MenuIcon } from "lucide-react";
import { NavLink } from "./NavLink";
import { Background } from "../background/Background";
import Logo from "../../../public/assets/Frame 33.svg";
import { Button } from "../ui/button";
import { NavbarProps } from "@/lib/types";
import { Avatar } from "../ui/avatar";
import ProfileDropDown from "../helper/ProfileDropDown";
import { getCookie } from "cookies-next";



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
    href: "/About",
    activeLink: "About",
  },
  {
    id: 3,
    name: "Services",
    href: "/Services",
    activeLink: "Services",
  },
  {
    id: 4,
    name: "Properties",
    href: "/Properties",
    activeLink: "Properties",
    children: [
      {
        id: 6,
        name: "Buy",
        href: "/Properties/Buy",
        activeLink: "Buy",
      },
      {
        id: 7,
        name: "Sell",
        href: "/Properties/Sell",
        activeLink: "Sell",
      },
      {
        id: 8,
        name: "Rent",
        href: "/Properties/Rent",
        activeLink: "Rent",
      },
    ],
  },
  {
    id: 5,
    name: "Our Partners",
    href: "/Partners",
    activeLink: "Partners",
  },
  {
    id: 6,
    name: "Contact us",
    href: "/Contact",
    activeLink: "Contact",
  },
];

const Navbar: React.FC<NavbarProps> =  ({ data }) => {
  console.log("sliders", data);

  const [open, setOpen] = useState(false);
  const token = getCookie("token");

  return (
    <div className="top-0 left w-full relative">
      <nav className="flex px-5 h-20 py-4 text-sm lg:container absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-x-5 m-auto">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
          <NavLink links={NavItems} />
          <div className="flex items-center text-[#f2f2f2] gap-x-2">
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
            {!token ? (<Link
              href="/sign-up"
              className="md:flex hidden  items-center justify-center capitalize   p-2 text-xs   bg-[#F8F8F7] text-[#2D2D2D] border "
            >
              Become an ambassador <ArrowUpRight size={16} />
            </Link>) : (

              <ProfileDropDown image={Logo} loading={false} />
            )
            }
            <Button
              onClick={() => setOpen(!open)}
              className="md:hidden fixed top-4 right-4  items-end justify-end  p-2 text-xs hover:bg-[#F8F8F7]   bg-[#F8F8F7] text-[#2D2D2D] border "
            >
              <AlignJustify size={16} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden fixed  delay-75	 animate-ping	  top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
            <div className="flex flex-col items-center space-y-6 font-bold">
              {NavItems.map((item, index) => (
                <Link
                  onClick={() => setOpen(!open)}
                  key={index}
                  className="font-medium text-base text-primary"
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* Mobile Menu */}
      </nav>
      
      <Background
        imageUrl="https://sunchase.backend.aait-d.com/storage/images/sliders/gLsFfVwMltoXopav24ihPhDiZRRXGEAjZ8L1SSej.webp"
        color="rgba(0, 0, 0, 0.5)"
        title="We Help You Realize Your Dream Property"
      />
    </div>
  );
};

export default Navbar;
