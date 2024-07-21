"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

import { ArrowLeft, Download, Plus } from "lucide-react";

interface DialogFormProps {
  handleClose?: () => void;
}

interface CommonDialogProps {
  text?: string;
  DialogForm: (props: DialogFormProps) => JSX.Element;
  importReport?: boolean;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  text,
  DialogForm,
  importReport = true,
}) => {
  const [open, setOpen] = useState(false);

  //------------- Global Functions ---------------
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex items-center gap-2">
      {importReport && (
        <Button className="bg-custom-gradient text-white capitalize flex items-center gap-2  font-light">
          Report
          <Download color="#ffff" size={20} />
        </Button>
      )}
      <Button
        onClick={handleOpen}
        className="bg-custom-gradient text-white capitalize flex items-center gap-2  font-light"
      >
        {text}
        <Plus color="#ffff" size={20} />
      </Button>
      <Dialog open={open} onOpenChange={setOpen} aria-describedby="modal-desc">
        <DialogContent
          id="modal-desc"
          className="w-full md:min-w-[70%] h-[80%] overflow-auto md:overflow-visible bg-white"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center my-5 capitalize text-primary gap-3">
              <ArrowLeft />
              {text}
            </DialogTitle>
          </DialogHeader>
          <DialogForm handleClose={handleClose} /> {/* Form Component */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommonDialog;
