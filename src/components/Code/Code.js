import React, { useContext, useState, useEffect } from "react";
import Prism from "prismjs";
import Styles from "./Code.module.css";
import { store } from "../StateProvider";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import Copy from "../Copy/Copy";

export default function Code() {
  const { state } = useContext(store);
  const [lang, setLang] = useState("javascript");
  useEffect(() => {
    Prism.highlightAll();
  }, [state, lang]);

  const handleChange = (e) => {
    const data = e.target.value;
    setLang(data);
  };
  return (
    <div className={Styles.block}>
      <span className={Styles.select}>
        <select
          name="langs"
          id="langs"
          defaultValue="javascript"
          onChange={handleChange}
        >
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
        </select>
        <svg viewBox="0 0 24 24">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M10 12.458Q9.833 12.458 9.677 12.396Q9.521 12.333 9.375 12.188L5.604 8.417Q5.354 8.167 5.375 7.792Q5.396 7.417 5.625 7.188Q5.896 6.917 6.25 6.927Q6.604 6.938 6.854 7.188L10 10.354L13.167 7.188Q13.417 6.938 13.76 6.938Q14.104 6.938 14.375 7.208Q14.625 7.458 14.625 7.823Q14.625 8.188 14.375 8.438L10.625 12.188Q10.479 12.333 10.323 12.396Q10.167 12.458 10 12.458Z"
          />
        </svg>
      </span>

      <Copy />

      <pre className={`language-${lang} line-numbers ${Styles.code}`}>
        <code name="code">
          {lang === "javascript" ? state.javascript : state.python}
        </code>
      </pre>
    </div>
  );
}
