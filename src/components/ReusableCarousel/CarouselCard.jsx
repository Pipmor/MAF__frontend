import React from "react";
import { Link } from "react-router-dom";
import styles from "./CarouselCard.module.css";

const CarouselCard = ({ img, slug }) => {
    return (
        <Link to={`/products/${slug}`}>
            <div className={styles.wrapperCard}>
                <div className={styles.imageContainer}>
                    <img className={styles.wrapperCard} src={img} alt="Card" />
                </div>
            </div>
        </Link>
    );
};

export default CarouselCard;
