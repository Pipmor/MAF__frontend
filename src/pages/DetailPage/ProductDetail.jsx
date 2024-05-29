// ProductDetail.jsx
import React from "react";
import PageBlock from "../../components/PageBlock/PageBlock.jsx";
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button.jsx";
import useSWRImmutable from "swr/immutable";
import { getProductsData } from "../../api/getProductsData.js";
import Tabs from "../../components/Tabs/Tabs.jsx";
import TabsData from "../../components/Tabs/TabsData.jsx";
import { useModal } from "../../components/Modal/ModalContext";

const ProductDetail = ({ isHomePage }) => {
    const { data: productsData } = useSWRImmutable("/products/", getProductsData);
    const firstProduct = productsData && productsData.length > 0 ? productsData[0] : null;
    const { openModal } = useModal();

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
                    {firstProduct && (
                        <div className={styles.product}>
                            <img src={firstProduct.img_product} alt={firstProduct.name} />
                            <div className={styles.productInfo}>
                                <h3>{firstProduct.name}</h3>
                                <p>{firstProduct.short_description}</p>
                                <div className={styles.iconContainer}>
                                    {firstProduct.icon_animal.map((icon, index) => (
                                        <img key={index} src={icon} alt={`Icon ${index + 1}`} />
                                    ))}
                                </div>
                                <Button className="button buyButton" onClick={openModal}>
                                    Купить
                                </Button>
                            </div>
                        </div>
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
