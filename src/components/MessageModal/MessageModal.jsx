import Button from "../UI/Button/Button";
import styles from "./MessageModal.module.css";

const MessageModal = ({ onClose, message }) => {
  const description = message.description
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <h3>{message.title}</h3>
        {description}
        <div className={styles.button}>
          <Button onClick={onClose} className="button">
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
