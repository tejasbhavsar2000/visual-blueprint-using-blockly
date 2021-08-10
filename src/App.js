import "./App.css";
import React from "react";
import { StateProvider } from "./components/StateProvider";
import Blocks from "./components/Blocks";
import JsCode from "./components/JsCode/JsCode";
import PyCode from "./components/PyCode";
export default function App() {
  return (
    <main className="main">
      <StateProvider>
        <Blocks></Blocks>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <JsCode />
          <PyCode />
        </div>
      </StateProvider>
    </main>
  );
}
