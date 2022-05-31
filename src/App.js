import "./App.css";
import React from "react";
import { StateProvider } from "./components/StateProvider";
import Blocks from "./components/Blocks";

import Code from "./components/Code/Code";
import Nav from "./components/Nav/Nav";
export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StateProvider>
        <Nav />
        <main className="main">
          <Blocks />

          <Code />
        </main>
      </StateProvider>
    </div>
  );
}
