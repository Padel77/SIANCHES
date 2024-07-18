'use client'

import { deleteCookie } from "cookies-next";

import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LogOut } from "lucide-react";

export default function ProfileDropDown({ user_detail }) {
  const { router } = UseSearchParamsHook()

  //-------------- Public Functions -------------------
  function handleLogOut() {
    deleteCookie("token");
    router.push("/login");
  }


  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="outline-none">
        <Avatar className={"m-0"}>
          <AvatarImage src={user_detail?.image} />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent >
        <DropdownMenuItem className="w-[366px] max-w-full min-h-[140px] rounded-md py-2 border border-secondary-foreground flex items-start justify-between flex-col hover:bg px-0">
          <div className="flex items-center gap-2">
            <Avatar className='w-[60px] h-[60px]'>
              <AvatarImage src={user_detail?.image} />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">{user_detail?.name}</p>
              <p className="text-sm text-gray-300">{user_detail?.mail}</p>
            </div>
          </div>
          <button onClick={handleLogOut} className="py-2 border-t border-secondary-foreground w-full text-start px-4 flex items-center gap-2 text-lg font-medium">
            <LogOut size={20} color="#212121" className="rotate-180" />
            Log Out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}