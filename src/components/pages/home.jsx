import React, { lazy, Suspense } from "react";

import Blocks from "@/components/Blocks";
const Code = lazy(() => import("@/components/Code"));

import Nav from "@/components/Nav";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Nav />
      <div className="h-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel
            className="relative"
            defaultSize={60}
            minSize={30}
            maxSize={60}
          >
            <Blocks />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40} minSize={40} maxSize={70}>
            <Suspense fallback={<div>Loading...</div>}>
              <Code />
            </Suspense>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
