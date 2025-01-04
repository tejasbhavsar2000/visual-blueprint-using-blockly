import { useState } from "react";
import * as Blockly from "blockly";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Share2Icon, UploadIcon } from "lucide-react";
import { Dialog } from "./ui/dialog";
import { LoadButton } from "./ui/load";
import { ShareButton } from "./ui/share";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-secondary p-4 gap-5">
      <ModeToggle />
      <div className="flex gap-4">
        <LoadButton />
        <ShareButton />
      </div>
    </nav>
  );
}
