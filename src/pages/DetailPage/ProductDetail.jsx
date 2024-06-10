// ProductDetail.jsx

import React, { useState, useEffect } from "react";
import PageBlock from "../../components/PageBlock/PageBlock.jsx";
import styles from "./ProductDetail.module.css";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/UI/Button/Button.jsx";
import useSWRImmutable from "swr/immutable";
import { getProductById } from "../../api/getProductById.js";
import Tabs from "../../components/Tabs/Tabs.jsx";
import { useModal } from "../../components/Modal/ModalContext";
import { useTranslation } from "react-i18next";
import {getProductsData} from "../../api/getProductsData.js";
import i18n from "i18next";

const ProductDetail = ({ isHomePage }) => {
    const { t } = useTranslation();
    const { productId } = useParams();
    const { openModal } = useModal();
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsById = await getProductById(productId);
                setFilteredProducts(productsById);


            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, [i18n.language]);

    console.log(filteredProducts, 'data')

    // if (error) return <div>Failed to load product</div>;
    if (!filteredProducts) return <div>Loading...</div>;

    return (
        <PageBlock className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li>
                            <Link key="veterenarDrugs" to="/veterenarDrugs">
                                {t("productLink2")}
                            </Link>
                        </li>
                        <li>
                            <Link key="vaccine" to="/vaccine">
                                {t("productLink4")}
                            </Link>
                        </li>
                        <li>
                            <Link key="feed" to="/feed">
                                {t("productLink3")}
                            </Link>
                        </li>
                        <li>
                            <Link key="productNew" to="/productNew">
                                {t("productLink5")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {/*<h1>{filteredProducts.applying}</h1>*/}
                    {/*<h3>{filteredProducts.compound}</h3>*/}
                    {filteredProducts ? (
                        <div className={styles.product}>
                            <img
                                className={styles.imgProduct}
                                src={filteredProducts.img_product}
                                alt={filteredProducts.name}
                            />
                            <div className={styles.productInfo}>
                                <h3>{filteredProducts.name}</h3>
                                <p>{t(filteredProducts.short_description)}</p>
                                <div className={styles.iconContainer}>
                                    {
                                        filteredProducts.icon_animal && filteredProducts.icon_animal.map((animal, index) => (
                                            <div key={index}>
                                                <img
                                                    className={styles.iconContainer}
                                                    src={animal.icon}
                                                    alt={`Icon ${index + 1}`}
                                                />
                                            </div>
                                        ))
                                    }


                                </div>
                                <Button className="button buyButton" onClick={openModal}>
                                    Купить
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <p>Продукт не найден</p>
                    )}

                    <div className={styles.tabsContainer}>
                        <Tabs filteredProducts={filteredProducts} />
                    </div>

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
