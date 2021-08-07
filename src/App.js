import "./App.css";
import React from "react";

import Blocks from "./components/Blocks";

export default function App() {
  return (
    <main style={{ display: "flex" }}>
      <Blocks></Blocks>
      <JsCode />
      <PyCode></PyCode>
    </main>
  );
}

export function JsCode() {
  return (
    <div>
      <textarea
        readOnly
        id="Python"
        style={{ height: "200px", width: "400px" }}
        value=""
      ></textarea>
    </div>
  );
}

export function PyCode() {
  return (
    <textarea
      readOnly
      id="Javascript"
      style={{ height: "200px", width: "400px" }}
      value=""
    ></textarea>
  );
}
