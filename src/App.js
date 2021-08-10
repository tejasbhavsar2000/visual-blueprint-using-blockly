import "./App.css";
import React from "react";
import { StateProvider } from "./components/StateProvider";
import Blocks from "./components/Blocks";
import JsCode from "./components/JsCode/JsCode";
import PyCode from "./components/PyCode/PyCode";
import Nav from "./components/Nav/Nav";
export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Nav />
      <main className="main">
        <StateProvider>
          <Blocks></Blocks>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <JsCode />
            <PyCode />
          </div>
        </StateProvider>
      </main>
    </div>
  );
}
