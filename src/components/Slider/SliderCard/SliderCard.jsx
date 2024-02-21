import styles from "./SliderCard.module.css";

const SliderCard = ({ imageUrl }) => {
  return (
    <div className={styles.wrapperCard}>
      <img src={imageUrl} alt="Card" />
    </div>
  );
};

export default SliderCard;