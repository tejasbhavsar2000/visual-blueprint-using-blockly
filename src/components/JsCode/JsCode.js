import React, { useContext, useEffect } from "react";
import Prism from "prismjs";
import Styles from "./JsCode.module.css";
import { store } from "../StateProvider";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
export default function JsCode() {
  const { state } = useContext(store);
  useEffect(() => {
    Prism.highlightAll();
  }, [state]);

  return (
    <div className={Styles.jscode}>
      <h1>Javascript</h1>
      <pre className="language-javascript line-numbers jscode">
        <code>{state.javascript}</code>
      </pre>
    </div>
  );
}
