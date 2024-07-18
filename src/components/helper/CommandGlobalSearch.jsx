'use client';

import { useEffect, useState } from "react";

import InputDemo from "@/components/helper/Input-demo";

import { Search } from "lucide-react";


export default function CommandProductSearch() {
    const [search, setSearch] = useState("");

    //  Effects for searching products
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (search.length > 0) {

            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [search]);

    // ---------- Global Function ----------------
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="hidden md:flex items-center border rounded-md pr-3 relative w-full ">
            <InputDemo
                value={search}
                onChange={handleSearch}
                inputStyle="pl-8 rounded-2xl bg-inherit border-secondary-foreground"
                placeHolder="What are you looking for...?"

            />
            <Search className="absolute left-2 top-0 h-full flex items-center pr-2" color="#888073" />
        </div>)
};
