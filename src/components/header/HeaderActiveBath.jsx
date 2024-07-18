'use client';

import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";



export default function HeaderActiveBath() {
    const { pathname, searchParams } = UseSearchParamsHook()

    let active_link = searchParams.get('active_link') || pathname.split('/')[1] || 'Animals'

    return (
        <div className="relative hidden md:block">
            <p className="text-[16px] font-semibold text-primary capitalize">{active_link}</p>
            <p className="absolute -left-4 -bottom-6 w-[140%] h-[3px] bg-primary rounded-lg"></p>
        </div>
    )
}
