import styles from "./CarouselCard.module.css";

const CarouselCard = ({ imageUrl }) => {
  return (
    <>
      <img src={imageUrl} alt="Card" className={styles.wrapperCard}/>
    </>
  );
};

export default CarouselCard;
