import React from 'react';
import { Link } from 'react-router-dom';
import PageBlock from '../PageBlock/PageBlock';
import styles from './TwoProduct.module.css';
import { twoData } from './twoData';

const TwoProductCards = () => {
    return (
        <PageBlock heading="Продукция">
            <div className={styles.container}>
                <div className={styles.wrapperCard}>
                    {twoData.map((product) => (
                        <Link key={product.pathName} to={`/products/${product.pathName}`}>
                            <div className={styles['product-card']}>
                                <img className={styles['product-card__image']} src={product.productImageUrl} alt={product.productName} />
                                <div className={styles['product-card__title']}>{product.productName}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageBlock>
    );
};

export default TwoProductCards;
