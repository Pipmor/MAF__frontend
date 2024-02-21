import styles from "./Modal.module.css";
import Form from "../Form/Form";
import IconX from "../../assets/icons/x-circle.png";
import { useModal } from "./ModalContext";

const Modal = () => {
  const { closeModal } = useModal();

  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton}>
          <img
            className={styles.closeIcon}
            src={IconX}
            alt="close"
            onClick={closeModal}
            width={32}
            height={32}
          />
        </button>
        <h3 className={styles.heading}>Оставьте свои контактные данные.</h3>
        <p className={styles.subheading}>
          Мы свяжемся с вами для уточнения всей информации.
        </p>
        <Form isModal />
      </div>
    </div>
  );
};

export default Modal;
