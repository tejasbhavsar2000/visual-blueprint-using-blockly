import Styles from "./Copy.module.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
export default function Copy() {
  return (
    <div className={Styles.div}>
      <button
        className={Styles.copy}
        id="copy"
        onClick={() => {
          const copyText = document.getElementsByName("code");
          console.log(copyText);
          navigator.clipboard.writeText(copyText[0].outerText);
          var copy = document.getElementById("copy");
          copy.textContent = `Copied!`;
          setTimeout(function () {
            copy.textContent = `Copy`;
          }, 4000);
        }}
      >
        Copy
      </button>
    </div>
  );
}
