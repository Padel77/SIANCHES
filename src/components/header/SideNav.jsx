import Image from "next/image";
import { Suspense } from "react";

import { NavItems } from "@/lib/constant-data";

import NavLink from "@/components/header/NavLink";

const SideNav = () => {
    return (
        <nav className="sticky top-0 left-0 h-screen w-full max-w-full  shadow-sm flex flex-col border-r border-secondary-foreground ">
            {/*Logo*/}
            <main className="flex items-center justify-center">
                <Image
                    src={"/logo.png"}
                    alt="Logo Photo"
                    width={150}
                    height={150}
                    priority={true}
                />
            </main>
            {/*  ###### Nav #####     
                @issue Missing Suspense boundary with useSearchParams
                @solution Wrap the component with Suspense Or Use experimental: {missingSuspenseWithCSRBailout: false,}, inside the next.config.js file
            */}
            <Suspense fallback={<div>Loading...</div>}>
                <main className="h-[calc(100%-200px)] overflow-auto px-[35px] py-[12px] w-full flex flex-col">
                    {
                        NavItems.map((item, index) => (
                            <NavLink key={index} activeLink={item.activeLink} href={item.href} title={item.name} />
                        ))
                    }
                </main>
            </Suspense>
        </nav>
    );
};

export default SideNav;