'use client';

import { useState, ChangeEvent, FC } from "react";

import { handleKeyDown, handleWheel } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Eye, EyeOff } from "lucide-react";
import { InputDemoProps } from "@/lib/types";



const InputDemo: FC<InputDemoProps> = ({
  id,
  label,
  style = '',
  inputStyle = '',
  type = 'text',
  placeHolder = '',
  disabled = false,
  value,
  onChange,
  error = '',
  selectValue = '',
  selectItem = [],
  defaultValue = '',
  icon = null,
}) => {
  const [isPassword, setIsPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPassword((prevIsPassword) => !prevIsPassword);
  };

  return (
    <div className={`grid grid-cols-1 w-full ${style} items-center gap-1`}>
      {label && (
        <Label htmlFor={id} className={`flex items-center gap-2 text-[16px] font-medium cursor-pointer w-fit ${error ? 'text-red-800' : 'text-gray-500'}`}>
          {icon}
          <p>{label}</p>
        </Label>
      )}
      <div className="w-full flex-1 relative">
        <Input
          type={type}
          id={id}
          className={`outline-0 bg-secondary ${error ? 'border border-red-800' : 'border-0'} focus-visible:ring-0 focus-visible:ring-offset-0 ${disabled ? 'bg-gray-300' : ''} ${inputStyle} rounded-none`}
          placeholder={placeHolder}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={id}
          min={type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
        />
        {type === 'password' && (
          <div className="absolute right-2 top-2 cursor-pointer z-40">
            {isPassword ? (
              <EyeOff onClick={handleTogglePasswordVisibility} size={20} />
            ) : (
              <Eye onClick={handleTogglePasswordVisibility} size={20} />
            )}
          </div>
        )}
        {error && <p className="text-red-800 text-xs pt-1 m-0">{error}</p>}
      </div>
    </div>
  );
};

export default InputDemo;
