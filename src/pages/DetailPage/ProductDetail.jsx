import React from "react";
import PageBlock from "../../components/PageBlock/PageBlock.jsx";
import styles from "./ProductDetail.module.css";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/UI/Button/Button.jsx";
import useSWRImmutable from "swr/immutable";
import { getProductsData } from "../../api/getProductsData.js";
import Tabs from "../../components/Tabs/Tabs.jsx";
import TabsData from "../../components/Tabs/TabsData.jsx";
import { useModal } from "../../components/Modal/ModalContext";
import {useTranslation} from "react-i18next";

const ProductDetail = ({ isHomePage }) => {
    const { t } = useTranslation();
    const { productId } = useParams();
    const { data: productsData } = useSWRImmutable("/products/", getProductsData);
    const { openModal } = useModal();

    // Найти продукт, соответствующий productId
    const product = productsData?.find(p => p.id === parseInt(productId, 10));

    return (
        <PageBlock className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li><Link to="/">Ветеринарные препараты</Link></li>
                        <li><Link to="/">Корма и кормовые добавки</Link></li>
                        <li><Link to="/products">Продукты</Link></li>
                    </ul>
                </div>
                <div>
                    {product ? (
                        <div className={styles.product}>
                            <img className={styles.imgProduct} src={product.img_product} alt={product.name} />
                            <div className={styles.productInfo}>
                                <h3>{product.name}</h3>
                                <p>{t(product.short_description)}</p>
                                <div className={styles.iconContainer}>
                                    {product.icon_animal.map((icon, index) => (
                                        <img key={index} className={styles.icon} src={icon.icon} alt={`Icon ${index + 1}`} />
                                    ))}
                                </div>
                                <Button className="button buyButton" onClick={openModal}>
                                    Купить
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <p>Продукт не найден</p>
                    )}

                    {TabsData.length > 0 && (
                        <div className={styles.tabsContainer}>
                            <Tabs tabsData={TabsData} />
                        </div>
                    )}

                    <div className={styles.button_wrapper}>
                        {isHomePage && (
                            <Link to="/products">
                                <Button className="button" withArrow>
                                    Смотреть все
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </PageBlock>
    );
};

export default ProductDetail;
