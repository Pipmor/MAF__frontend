import styles from "./ProductsContent.module.css";
import { Link } from "react-router-dom";

const ProductsContent = ({ images, titles, pathNames, closeDropdown }) => {
  return (
    <div className={styles.productContainer}>
      {titles &&
        titles.map((title, titleIndex) => (
          <Link
            key={titleIndex}
            className={styles.productLink}
            to={`/products/${pathNames[titleIndex]}`}
            onClick={closeDropdown}
          >
            <ul className={styles.list}>
              <li>{title}</li>
              {images[titleIndex] && (
                <li className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={images[titleIndex]}
                    alt={`Product ${titleIndex + 1}`}
                  />
                </li>
              )}
            </ul>
          </Link>
        ))}
    </div>
  );
};

export default ProductsContent;
