import React, { useContext, useEffect } from "react";
import Prism from "prismjs";
import Styles from "../styles/PyCode.module.css";
import { store } from "./StateProvider";
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
    <div className={Styles.pycode}>
      <h1>Python</h1>
      <pre className="language-python line-numbers pycode">
        <code>{state.python}</code>
      </pre>
    </div>
  );
}
