import Styles from "./Nav.module.css";
export default function Nav() {
  return (
    <nav className={Styles.navbar}>
      <h1>
        Block <span>Coder</span>
      </h1>
    </nav>
  );
}
