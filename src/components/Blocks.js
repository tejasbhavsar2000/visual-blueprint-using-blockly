import React from "react";
import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import "blockly/python";
export default function Blocks() {
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
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById("generated-xml").innerText = newXml;
    const JavascriptCode = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(JavascriptCode);
    if (JavascriptCode !== "")
      document.getElementById("Javascript").value = JavascriptCode;
    const PythonCode = Blockly.Python.workspaceToCode(workspace);
    if (PythonCode !== "") document.getElementById("Python").value = PythonCode;
  }

  return (
    <div style={{ width: "80vh", border: "solid" }}>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
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

      <pre id="generated-xml" style={{ visibility: "hidden" }}></pre>
    </div>
  );
}
