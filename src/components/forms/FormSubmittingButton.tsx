'use client';

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormSubmittingButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  style?: string;
}

const FormSubmittingButton: React.FC<FormSubmittingButtonProps> = ({
  name,
  type = "submit",
  loading = false,
  style = "",
}) => {
  const { pending } = useFormStatus() as { pending: boolean };

  return (
    <Button
      type={type}
      className={cn(
        "my-5 px-12 text-lg font-medium bg-black text-white text-[16px] hover:bg-gray-950 rounded-none",
        style
      )}
      disabled={pending || loading}
    >
      {pending || loading ? (
        <LoaderCircle className="animate-spin" size={25} />
      ) : (
        name
      )}
    </Button>
  );
};

export default FormSubmittingButton;
