'use client';
import { deleteCookie } from "cookies-next";

import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";

import { Button } from "@/components/ui/button";

import { LogOut } from "lucide-react";

export default function LogoutBtn() {
    const { router } = UseSearchParamsHook();

    function handleLogout() {
        deleteCookie("token");
        router.push("/login");
        router.refresh(); // refresh the page to clear the URL parameters
    }
    return (
        <Button className="text-sm cursor-pointer" onClick={handleLogout} asChild>
            <div className="text-sm font-medium">
                <span className="mx-1">
                    <LogOut size={20} />
                </span>
                Log Out
            </div>
        </Button>
    )
}
