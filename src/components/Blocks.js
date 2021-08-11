import React, { useContext, useEffect, useState } from "react";
import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import "blockly/python";
import { store } from "./StateProvider";
import Styles from "../styles/Blocks.module.css";
export default function Blocks() {
  const [initialxml, setInitailxml] = useState("");
  const data = () => localStorage.getItem("initialxml");
  const toolboxCategories = [
    {
      name: "Logic",
      colour: "#5C81A6",
      blocks: [
        {
          type: "controls_if",
        },
        {
          type: "logic_compare",
        },
        {
          type: "logic_operation",
        },
      ],
    },
    {
      name: "Loops",
      colour: "#5C81A6",
      blocks: [
        {
          type: "controls_repeat",
        },
        {
          type: "controls_repeat_ext",
        },
        {
          type: "controls_whileUntil",
        },
      ],
    },
    {
      name: "Math",
      colour: "#5CA65C",
      blocks: [
        {
          type: "math_round",
        },
        {
          type: "math_number",
        },
        {
          type: "math_arithmetic",
        },
      ],
    },
  ];
  const { dispatch } = useContext(store);
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));

    localStorage.setItem("initialxml", newXml);
    document.getElementById("generated-xml").innerText = newXml;
    const JavascriptCode = Blockly.JavaScript.workspaceToCode(workspace);
    if (JavascriptCode !== "") {
      dispatch({ type: "SET_JAVASCRIPT", payload: JavascriptCode });
    }
    const PythonCode = Blockly.Python.workspaceToCode(workspace);
    if (PythonCode !== "") {
      dispatch({ type: "SET_PYTHON", payload: PythonCode });
    }
  }

  return (
    <div className={Styles.canvas}>
      {initialxml}
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={data()}
        wrapperDivClassName="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "black",
            snap: true,
          },
        }}
        workspaceDidChange={workspaceDidChange}
      />

      <pre id="generated-xml" style={{ overflow: "scroll" }}></pre>
    </div>
  );
}
