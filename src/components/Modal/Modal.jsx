import styles from "./Modal.module.css";
import IconX from "../../assets/icons/x-circle.png";
import { useModal } from "./ModalContext";
import ModalForm from "../ModalForm/ModalForm.jsx";

const Modal = () => {
  const { closeModal } = useModal();

  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={styles.heading}>Оставьте свои контактные данные.</h3>
        <p className={styles.subheading}>
          Мы свяжемся с вами для уточнения всей информации.
        </p>
        <ModalForm isModal />
      </div>
    </div>
  );
};

export default Modal;
