import React, { useContext, useEffect } from "react";
import Prism from "prismjs";
import Styles from "./JsCode.module.css";
import { store } from "../StateProvider";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import Copy from "../Copy/Copy";
export default function JsCode() {
  const { state } = useContext(store);
  useEffect(() => {
    Prism.highlightAll();
  }, [state]);

  return (
    <div className={Styles.block}>
      <h2>Javascript</h2>
      <Copy name="js" />
      <pre
        id="js"
        className={`language-javascript line-numbers ${Styles.jscode}`}
      >
        <code>{state.javascript}</code>
      </pre>
    </div>
  );
}
