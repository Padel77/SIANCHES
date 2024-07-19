"use client";

import Link from "next/link";
import { ArrowDown, SendHorizontal } from "lucide-react";
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

  function FilterBath() {
    return pathname.split("/")[1];
  }

  function isActive(active?: string): boolean {
    return active === FilterBath();
  }

  const renderLinks = (links: NavLinkItem[]) => {
    return links.map((link) => (
      <div key={link.id} className="relative group ">
        <div className="flex items-center">
          <div
            className={cn(
              isActive(link.activeLink) ? "opacity-1 text-primary" : "opacity-0"
            )}
          >
            <SendHorizontal />
          </div>
          <Link
            href={link.href}
            className={`${
              isActive(link.activeLink)
                ? "active-nav-link"
                : "text-gray-300 font-medium "
            }  hover:text-secondary-foreground transition rounded-md flex items-center `}
          >
            <p className="font-[400] flex ">
              {link.name}
              {link.children ? <ArrowDown size={16} /> : ""}
            </p>
          </Link>
        </div>
        {link.children && link.children.length > 0 && (
          <div className="absolute left-0 top-full hidden group-hover:block bg-white  rounded-md shadow-lg">
            <div className="flex flex-col">{renderLinks(link.children)}</div>
          </div>
        )}
      </div>
    ));
  };

  return <nav className="flex space-x-4">{renderLinks(links)}</nav>;
};
