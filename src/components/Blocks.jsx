import React, { useContext, useEffect, useRef, useState } from "react";
import { useBlocklyWorkspace } from "react-blockly";
import useXmlStore, { useLangStore } from "./Store";
import { javascriptGenerator } from "blockly/javascript";
import { pythonGenerator } from "blockly/python";
import { ToolboxCategories2 } from "@/constants/CoreBlocks";
import DarkTheme from "@blockly/theme-dark";
import { useTheme } from "./theme-provider";
export default function Blocks() {
  const blocklyRef = useRef();
  const { theme } = useTheme();
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: ToolboxCategories2, // this must be a JSON toolbox definition
    workspaceConfiguration: {
      grid: {
        colour: "#ccc",
        length: 2,
        spacing: 20,
      },
      theme: theme == "dark" ? DarkTheme : "",
    },
    onWorkspaceChange: workspaceDidChange,
    initialXml: "",
  });

  useEffect(() => {
    if (workspace != null) workspace.setTheme(theme == "dark" ? DarkTheme : "");
  }, [theme]);

  function workspaceDidChange(workspace) {
    const JavascriptCode = javascriptGenerator.workspaceToCode(workspace);
    const PythonCode = pythonGenerator.workspaceToCode(workspace);
    useLangStore.setState({ javascript: JavascriptCode, python: PythonCode });
    useXmlStore.setState({ xml: xml });
  }

  return <div className="h-full w-full p-2" ref={blocklyRef} />;
}
