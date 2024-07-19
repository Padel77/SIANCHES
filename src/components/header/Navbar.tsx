"use client";
import Image from "next/image";
import Logo from "../../../public/assets/Vector.svg";
import User from "../../../public/assets/next.svg";
import Menu from "../../../public/assets/vercel.svg";
import Link from "next/link";
import { useState } from "react";
import { Globe } from "lucide-react";
import { Heart } from "lucide-react";
import { NavLink } from "./NavLink";
import { Background } from "../background/Background";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/About" },
  { name: "Services", link: "/Services" },
  { name: "Properties", link: "/Properties" },
  { name: "Our Partners", link: "/Partners" },
  { name: "Contact us", link: "/Contact" },
];
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
        id: 3,
        name: "Submenu 1",
        href: "/Properties/Properties",
        activeLink: "submenu1",
      },
      {
        id: 4,
        name: "Submenu 2",
        href: "/Properties/Properties",
        activeLink: "submenu2",
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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="top-0 left w-full realtive">
      <nav className="flex px-5 h-20 top-8 py-4 text-sm  lg:container  absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center  gap-x-5 m-auto  ">
          <Image src={Logo} alt="Logo" />
          <NavLink links={NavItems} />
          <div className=" flex items-center gap-x-2 ">
            <div className=" flex items-center text-[12px] ">
              <Globe size={24} className="text-primary" />
              <span className="text-primary">Ar</span>
            </div>
            <span className="border-r-2 h-8"></span>
            <div className="flex items-center font-medium ">
              <Link href="/Favourite">
                <Heart className="text-primary" />
              </Link>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        {open && (
          <div className="lg:hidden fixed top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
            <div className="flex flex-col items-center space-y-6 font-bold">
              {navLinks.map((item, index) => (
                <Link
                  onClick={() => setOpen(!open)}
                  key={index}
                  className="font-medium text-base text-primary"
                  href={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* mobile menu */}
        {/* <div className="flex justify-between items-center gap-x-5 lg:gap-x-14">
        <Link className="hidden lg:block font-medium text-[16px]" href="#">
          Open an Account
        </Link>
        <div className="hidden lg:flex justify-between items-center gap-x-3">
          <Image src={User} alt="user" />
          <Link className="font-medium text-[16px]" href="#">
            Sign In
          </Link>
        </div>
        <Image
          className="lg:hidden"
          src={User}
          width="32"
          height="32"
          alt="user"
        />
        <Image
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          src={Menu}
          width="32"
          height="32"
          alt="menu"
        />
      </div> */}
      </nav>
      <Background imageUrl="https://sunchase.backend.aait-d.com/storage/images/sliders/gLsFfVwMltoXopav24ihPhDiZRRXGEAjZ8L1SSej.webp" title="Home" />
    </div>
  );
};

export default Navbar;
