"use client";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";

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
  {
    id: 7,
    name: "Favourite",
    href: "/favourite",
    activeLink: "favourite",
  },
];
const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="top-0 left w-full relative">
      <Button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4  items-end justify-end p-2    hover:bg-[#F8F8F7]   bg-[#F8F8F7] text-[#2D2D2D] border "
      >
        <AlignJustify size={20} />
      </Button>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed   top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
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
