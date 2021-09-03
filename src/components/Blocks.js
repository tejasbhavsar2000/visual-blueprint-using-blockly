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
          type: "logic_boolean",
        },
        {
          type: "logic_operation",
        },
        {
          type: "controls_ifelse",
        },
        {
          type: "logic_compare",
        },
        {
          type: "logic_negate",
        },
        {
          type: "logic_null",
        },
        {
          type: "logic_ternary",
        },
      ],
    },
    {
      name: "Loops",
      colour: "rgb(91, 165, 91)",
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
        {
          type: "controls_for",
        },
        {
          type: "controls_forEach",
        },
        {
          type: "controls_flow_statements",
        },
      ],
    },
    {
      name: "Math",
      colour: "rgb(91, 103, 165)",
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
        {
          type: "math_single",
        },
        {
          type: "math_trig",
        },
        {
          type: "math_constant",
        },
        {
          type: "math_number_property",
        },
        {
          type: "math_change",
        },
        {
          type: "math_on_list",
        },
        {
          type: "math_modulo",
        },
        {
          type: "math_constrain",
        },
        {
          type: "math_random_int",
        },
        {
          type: "math_random_float",
        },
      ],
    },
    {
      name: "Lists",
      colour: "rgb(116, 91, 165)",
      blocks: [
        {
          type: "lists_create_empty",
        },
        {
          type: "lists_repeat",
        },
        {
          type: "lists_reverse",
        },
        {
          type: "lists_isEmpty",
        },
        {
          type: "lists_length",
        },
      ],
    },
    {
      name: "Text",
      colour: "rgb(91, 165, 140)",
      blocks: [
        {
          type: "text",
        },
        {
          type: "text_multiline",
        },
        {
          type: "text_join",
        },
        {
          type: "text_create_join_container",
        },
        {
          type: "text_create_join_item",
        },
        {
          type: "text_append",
        },
        {
          type: "text_length",
        },
        {
          type: "text_isEmpty",
        },
        {
          type: "text_indexOf",
        },
        {
          type: "text_charAt",
        },
      ],
    },
    {
      name: "Variables",
      colour: "rgb(165, 91, 128)",
      blocks: [
        {
          type: "variables_get",
        },
        {
          type: "variables_set",
        },
      ],
    },
    {
      name: "Procedures",
      colour: "rgb(153, 91, 165)",
      blocks: [
        {
          type: "procedures_defreturn",
        },
        {
          type: "procedures_defnoreturn",
        },
        {
          type: "procedures_callreturn",
        },
        {
          type: "procedures_callnoreturn",
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

    dispatch({ type: "SET_JAVASCRIPT", payload: JavascriptCode });

    const PythonCode = Blockly.Python.workspaceToCode(workspace);

    dispatch({ type: "SET_PYTHON", payload: PythonCode });
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
