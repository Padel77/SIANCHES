"use client";
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
import { hasCookie } from "cookies-next";

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

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="top-0 left w-full relative">
      <Button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4  items-end justify-end  p-2 text-xs hover:bg-[#F8F8F7]   bg-[#F8F8F7] text-[#2D2D2D] border "
      >
        <AlignJustify size={16} />
      </Button>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed  delay-75	 animate-ping	  top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
          <div className="flex flex-col items-center space-y-6 font-bold">
            {NavItems.map((item, index) => (
              <Link
                key={index}
                onClick={() => setOpen(!open)}
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
    </div>
  );
};

export default MobileMenu;
