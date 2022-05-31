import Styles from "./Backdrop.module.css";

const Backdrop = ({ children, handleShow }) => {
  return (
    <div className={Styles.backdrop} onClick={handleShow}>
      {children}
    </div>
  );
};

export default Backdrop;
