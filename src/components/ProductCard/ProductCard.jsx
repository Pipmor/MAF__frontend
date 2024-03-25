import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";



const ProductCard = ({ title, image, slug }) => {
    console.log("image>>>", image);
    return (
        <Link to={`/products/${slug}`}>
            <div className={styles.productCard}>
                <div className={styles.imageContainer}>
                    <img className={styles.productCardImage} src={image} alt={title} />jkh
                </div>
                <p className={styles.productCardTitle}>{title}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
