import Backdrop from "../Backdrop/Backdrop";
import Styles from "./Modal.module.css";

const Modal = ({ children, handleShow }) => {
  return (
    <Backdrop handleShow={handleShow}>
      <div onClick={(e) => e.stopPropagation()} className={Styles.modal}>
        {children}
      </div>
    </Backdrop>
  );
};
export default Modal;
