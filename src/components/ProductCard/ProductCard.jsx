import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import {useTranslation} from "react-i18next";

const ProductCard = ({ title, description, img_product, id, types }) => {
    const { t } = useTranslation();
    return (
        <Link to={`/products/${id}`} className={styles.productCardLink}>
            <div className={styles.productCard}>
                <div className={styles.imageContainer}>
                    <img className={styles.productCardImage} src={img_product} alt={title} />
                </div>
                <div className={styles.textBox}>
                    <p className={styles.productCardTitle}>{title}</p>
                    <p className={styles.productCardDescription}>{description}</p>
                    {types.map((icon, index) => (
                        <img key={index} className={styles.icon} src={icon} alt={`icon-${index}`} />
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
