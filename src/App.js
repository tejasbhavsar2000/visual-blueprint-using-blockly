import "./App.css";
import React, { useContext, useEffect } from "react";
import Prism from "prismjs";
import { StateProvider, store } from "./components/StateProvider";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import Blocks from "./components/Blocks";
export default function App() {
  return (
    <main style={{ display: "flex" }}>
      <StateProvider>
        <Blocks></Blocks>
        <JsCode />
        <PyCode></PyCode>
      </StateProvider>
    </main>
  );
}

export function JsCode() {
  const { state } = useContext(store);
  useEffect(() => {
    Prism.highlightAll();
  }, [state]);

  return (
    <div>
      <pre className="language-javascript">
        <code>{state.javascript}</code>
      </pre>
    </div>
  );
}

export function PyCode() {
  const { state } = useContext(store);
  useEffect(() => {
    Prism.highlightAll();
  }, [state]);

  return (
    <div>
      <pre className="language-python">
        <code>{state.python}</code>
      </pre>
    </div>
  );
}
