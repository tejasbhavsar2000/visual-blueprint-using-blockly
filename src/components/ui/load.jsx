import { UploadIcon } from "lucide-react";
import * as Blockly from "blockly";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export function LoadButton() {
  const [input, setInput] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Load <UploadIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Load XML</DialogTitle>
          <DialogDescription>Paste XML below.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              load
            </Label>
            <Input
              id="load"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={(e) => {
              e.preventDefault();
              if (input == "") {
                toast.error("Cannot load empty XML");
              } else {
                try {
                  const workspace = Blockly.getMainWorkspace();

                  const xmlDom = Blockly.utils.xml.textToDom(input);

                  Blockly.Xml.domToWorkspace(xmlDom, workspace);
                  toast.success("New XMl Loaded.");
                } catch (error) {
                  toast.error(error.message);
                }
              }
            }}
          >
            <span className="sr-only">Copy</span>
            <UploadIcon />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
