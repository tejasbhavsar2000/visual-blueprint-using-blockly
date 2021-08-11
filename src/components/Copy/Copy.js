import Styles from "./Copy.module.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
export default function Copy({ name }) {
  return (
    <div className={Styles.div}>
      <button
        className={Styles.copy}
        onClick={() => {
          //write copy functionality using context api
        }}
      >
        Copy
      </button>
    </div>
  );
}
