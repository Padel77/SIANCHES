import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { LoaderCircle } from "lucide-react";

export default function UpdateNumberBtn({
  cart_style,
  count,
  max_count,
  handleIncrement,
  handleDecrement,
}) {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center justify-center gap-1 md:gap-5">
      <Button
        variant="outline"
        className={cn(
          "font-semibold   text-center text-[#1D1D1D] rounded-sm border-primary border-2 bg-inherit",
          cart_style
            ? "text-sm md:text-xl h-2 md:h-6 w-6 px-2 md:px-0"
            : "text-md h-2 w-6 px-3",
          count <= 1 && "pointer-events-none opacity-50"
        )}
        disabled={pending}
        type="submit"
        onClick={handleDecrement}
      >
        -
      </Button>
      <span className="text-xl">
        {pending ? <LoaderCircle className="animate-spin" size={25} /> : count}
      </span>
      <Button
        className={cn(
          "bg-[#FFE101] font-semibold  text-center text-[#1D1D1D] rounded-sm ",
          cart_style
            ? "text-sm md:text-xl h-2 md:h-6 w-6 px-2 md:px-0"
            : "text-md h-2 py-3 w-7 px-3",
          count === max_count && "pointer-events-none opacity-50"
        )}
        disabled={pending}
        type="submit"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
}
