import React, { useContext, useEffect } from "react";
import Prism from "prismjs";
import Styles from "./PyCode.module.css";
import { store } from "../StateProvider";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
export default function PyCode() {
  const { state } = useContext(store);
  useEffect(() => {
    Prism.highlightAll();
  }, [state]);

  return (
    <div>
      <h1>Python</h1>
      <pre className={`language-python line-numbers ${Styles.pycode}`}>
        <code>{state.python}</code>
      </pre>
    </div>
  );
}
