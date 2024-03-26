import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { AnimalTypsBlock } from "../AnimalTypsBlock/AnimalTypsBlock";

<<<<<<< products
const ProductCard = ({ title, discription, img, slug, types }) => {
  return (
    <Link to={`/products/${slug}`}>
      <div className={styles.productCard}>
        <div className={styles.imageContainer}>
          <img className={styles.productCardImage} src={img} alt={title} />
        </div>
        <div className={styles.textBox}>
          <p className={styles.productCardTitle}>{title}</p>
          <p className={styles.productCardDiscription}>{discription}</p>
        </div>
        <AnimalTypsBlock types={types} />
      </div>
    </Link>
  );
};

export default ProductCard;
