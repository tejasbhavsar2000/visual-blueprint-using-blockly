import { Copy, Share2 } from "lucide-react";

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
import useXmlStore from "../Store";
import { toast } from "sonner";

export function ShareButton() {
  const { xml } = useXmlStore();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Share <Share2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share:</DialogTitle>
          <DialogDescription>
            Anyone with this XML will be able to load your workspace.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              share
            </Label>
            <Input id="load" defaultValue={xml} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(xml);
              toast.success("Successfully Copied!!");
            }}
          >
            <span className="sr-only">Copy</span>
            <Copy />
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
