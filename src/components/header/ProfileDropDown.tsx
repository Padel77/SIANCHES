"use client";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { handleLogOut } from "@/lib/action";

interface Organization {
  id: string;
  name: string;
}

interface VerifiedUser {
  image?: string;
  first_name?: string;
  organizations?: Organization[];
}

interface ProfileDropDownProps {
  loading: boolean;
  image?: VerifiedUser;
}

export default function ProfileDropDown({
  loading,
  image,
}: ProfileDropDownProps) {
  //-------------- Public Functions -------------------
  function handleLogOuts() {
    handleLogOut();
    deleteCookie("token");
  }

  if (loading) {
    return null;
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-5 w-full  p-2 rounded-md">
          <Avatar className={"m-0 border-2 border-white mr-[-15px] "}>
            <AvatarImage src={image?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-slate-100 w-full rounded-sm py-2 font-bold">
          <Link href={"/profile"} className="w-full">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-slate-100 w-full rounded-sm py-2 text-blue-800">
          <button onClick={handleLogOuts} className="">
            Log Out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
