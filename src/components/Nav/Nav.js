import { useState } from "react";
import { useContext } from "react";
import Modal from "../Modal/Modal";
import { store } from "../StateProvider";

import Blockly from "blockly";
import Styles from "./Nav.module.css";
export default function Nav() {
  const [showShare, onShowShare] = useState(false);
  const [showLoad, onShowLoad] = useState(false);
  const handleShowShare = () => {
    onShowShare(!showShare);
  };
  const handleShowLoad = () => {
    onShowLoad(!showLoad);
  };
  const { state, dispatch } = useContext(store);
  return (
    <nav className={Styles.navbar}>
      {showShare && (
        <Modal handleShow={handleShowShare}>
          <div className={Styles.xml} name="xml">
            {state.xml}
          </div>
          <button
            id="copyxml"
            onClick={(e) => {
              e.stopPropagation();
              const copyText = document.getElementsByName("xml");
              navigator.clipboard.writeText(copyText[0].innerText);
              var copy = document.getElementById("copyxml");
              copy.textContent = `Copied!`;
              setTimeout(function () {
                copy.textContent = `Copy`;
              }, 4000);
            }}
          >
            Copy
          </button>
        </Modal>
      )}
      {showLoad && (
        <Modal handleShow={handleShowLoad}>
          <input
            className={Styles.xml}
            type="text"
            name="xmldata"
            onClick={(e) => {
              e.stopPropagation();
            }}
            placeholder="paste xml here...."
          ></input>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const value = document.getElementsByName("xmldata")[0].value;
              dispatch({ type: "SET_XML", payload: value });
              Blockly.mainWorkspace.clear();
              const xmlDom = Blockly.Xml.textToDom(value);
              Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
              handleShowLoad();
            }}
          >
            Load
          </button>
        </Modal>
      )}

      <h1>
        Block <span className={Styles.span}>Coder</span>
      </h1>

      <div>
        <button className={Styles.load} onClick={handleShowLoad}>
          Load
        </button>
        <button className={Styles.share} onClick={handleShowShare}>
          Share
        </button>
      </div>
    </nav>
  );
}
