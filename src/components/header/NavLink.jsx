"use client";

import Link from "next/link";
import { SendHorizontal } from "lucide-react";

import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { cn } from "@/lib/utils";

export default function NavLink({ title, href, activeLink }) {
    const { pathname } = UseSearchParamsHook()

    function FilterBath() {
        return pathname.split("/")[1];
    }

    function isActive(active) {
        if (active === FilterBath()) {
            return true;
        }
        return false;
    }

    return (
        <div className="flex items-center">
            <div className={cn(isActive(activeLink) ? 'opacity-1 text-primary' : 'opacity-0')}>
                <SendHorizontal />
            </div>
            <Link
                href={href}
                className={`${isActive(activeLink) ? "active-nav-link" : "text-gray-300 font-medium text-lg"} p-3 hover:text-secondary-foreground Transition rounded-md flex items-center gap-2`}>
                <p className={`font-[600] text-[18px] `}>
                    {title}
                </p>
            </Link>
        </div>
    );
}

