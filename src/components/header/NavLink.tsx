"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { cn } from "@/lib/utils";
import React from "react";

interface NavLinkItem {
  id: number;
  name: string;
  href: string;
  activeLink: string;
  children?: NavLinkItem[];
}

interface NavLinkProps {
  links: NavLinkItem[];
}

export const NavLink: React.FC<NavLinkProps> = ({ links }) => {
  const { pathname } = UseSearchParamsHook();

  function FilterPath() {
    return pathname.split("/")[1];
  }

  function isActive(active?: string): boolean {
    return active === FilterPath();
  }

  const renderLinks = (links: NavLinkItem[]) => {
    return links.map((link) => (
      <div key={link.id} className="relative group">
        <div className="flex items-center">
          <Link
            href={link.href}
            className={`${
              isActive(link.activeLink)
                ? "active-nav-link text-white font-bold  "
                : "text-gray-300 font-medium"
            }  transition rounded-md flex items-center relative `}
          >
            <p className="font-[400] flex">
              {link.name}
              {link.children && <ChevronDown strokeWidth={1} size={16} />}
            </p>
            {isActive(link.activeLink) && (
              <ChevronUp 
                strokeWidth={1}
                size={16}
                className="absolute right-1/3 top-1/2  text-white top-0 mt-1"
              />
            )}
          </Link>
        </div>
        {link.children && link.children.length > 0 && (
          <div className="absolute left-0 top-full hidden group-hover:block bg-white text-dark rounded-md p-4 ">
            <div className="flex flex-col text-sm text-[#000] border-l w-8 p-1 gap-2 border-dark ">
              {renderLinks(link.children)}
            </div>
          </div>
        )}
      </div>
    ));
  };

  return <nav className="hidden lg:flex space-x-4">{renderLinks(links)}</nav>;
};
