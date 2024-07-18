'use client';

import { useState } from "react";

import { handleKeyDown, handleWheel } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


import { Eye, EyeOff } from "lucide-react";

const InputDemo = ({ id, label, style, inputStyle, type = "text", placeHolder, disabled = false, value, onChange, error, selectValue = "", selectItem = [], defaultValue, isChoices = null }) => {
    const [isPassword, setIsPassword] = useState(false)

    // --------- Global functions ------------------
    const handleChangePassword = () => {
        setIsPassword(!isPassword)
    }
    return (
        <div className={`grid grid-cols-1 w-full ${style} items-center `}>
            {
                label &&
                <Label htmlFor={id} className={`text-[16px] font-medium  cursor-pointer w-fit  ${error ? "text-red-800" : "text-black"}`}>{label}</Label>
            }
            <div className="w-full flex-1">
                {
                    (type === "email") ?
                        <Input
                            type={"email"}
                            id={id}
                            className={`outline-0 bg-secondary   ${error ? "border border-red-800" : "border-0"} focus-visible:ring-0 focus-visible:ring-offset-0  ${disabled && "bg-secondary"} ${inputStyle}`}
                            placeholder={placeHolder}
                            onKeyDown={handleKeyDown}
                            onWheel={handleWheel}
                            value={value}
                            onChange={onChange}
                            disabled={disabled}
                            name={id}
                        /> :
                        (type === "date") ?
                            <Input
                                type={"date"}
                                id={id}
                                className={`outline-0 bg-secondary   ${error ? "border border-red-800" : "border-0"} focus-visible:ring-0 focus-visible:ring-offset-0  ${disabled && "bg-gray-300"} ${type === "file" && "cursor-pointer"} ${inputStyle}`}
                                placeholder={placeHolder}
                                onKeyDown={handleKeyDown}
                                onWheel={handleWheel}
                                value={value}
                                onChange={onChange}
                                disabled={disabled}
                                name={id}
                                min={new Date().toISOString().split('T')[0]} // Set min attribute to today's date in YYYY-MM-DD format
                            /> :
                            <div className="relative">
                                <Input
                                    type={type === 'password' ? isPassword ? 'text' : 'password' : type}
                                    id={id}
                                    className={` outline-0 bg-secondary   ${error ? "border border-red-800" : "border-0"} focus-visible:ring-0 focus-visible:ring-offset-0  ${disabled && "bg-gray-300"} ${inputStyle}`}
                                    placeholder={placeHolder}
                                    onKeyDown={handleKeyDown}
                                    onWheel={handleWheel}
                                    value={value}
                                    onChange={onChange}
                                    disabled={disabled}
                                    name={id}
                                />
                                {
                                    type === 'password' &&
                                    (
                                        isPassword ? <EyeOff onClick={handleChangePassword} className="absolute right-2 top-2 cursor-pointer z-40  " size={25} /> :
                                            <Eye onClick={handleChangePassword} className="absolute right-2 top-2 cursor-pointer z-40  " size={25} />
                                    )
                                }
                            </div>
                }

                {
                    error &&
                    <p className="text-red-800 text-xs pt-1 m-0">{error}</p>
                }
            </div>

        </div>


    );
};

export default InputDemo;