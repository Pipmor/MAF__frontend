import React, { useState } from "react";
import PageBlock from "../PageBlock/PageBlock.jsx";
import styles from "./ProductsBlock.module.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button.jsx";
import useSWRImmutable from "swr/immutable";
import ReactPaginate from "react-paginate";
import { getProductsData } from "../../api/getProductsData.js";

const ProductsBlock = ({ isHomePage }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6; // Количество продуктов на странице
    const minProductsToShowPagination = 2; // Минимальное количество продуктов для отображения пагинации

    const { data: productsData } = useSWRImmutable("/products/", getProductsData);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    if (!productsData || productsData.length === 0) {
        return <div>Нет данных для отображения</div>;
    }

    const offset = currentPage * productsPerPage;
    const currentProducts = productsData?.slice(offset, offset + productsPerPage);

    return (
        <PageBlock className="wrapper">
            <div className={styles.gridContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li>
                            <Link to="/">Ветеринарные препараты</Link>
                        </li>
                        <li>
                            <Link to="/">Корма и кормовые добавки</Link>
                        </li>
                        <li>
                            <Link to="/vaccine">Вакцины</Link>
                        </li>
                        <li>
                            <Link to="/products">Продукты</Link>
                        </li>
                        <li>
                            <Link to="/productNew">Новинки</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.container}>
                    <h2>Продукция</h2>
                    <div className={styles.selector_wrapper}>
                        <p>Сортировать по:</p>
                        <select className={styles.selector}>
                            <option value="">Все</option>
                            <option value="">А-Я</option>
                            <option value="">А-Я</option>
                            <option value="">А-Я</option>
                        </select>
                    </div>
                    <div className={styles.wrapperCard}>
                        {currentProducts &&
                            currentProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    title={product.name}
                                    description={product.short_description}
                                    img_product={product.img_product}
                                    id={product.id}
                                    types={product.icon_animal}
                                />
                            ))}
                    </div>
                    {productsData.length > minProductsToShowPagination && (
                        <ReactPaginate
                            pageCount={Math.ceil(productsData.length / productsPerPage)}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={styles.pagination}
                            activeClassName={styles.active}
                            previousLabel={"Назад"}
                            nextLabel={"Вперёд"}
                        />
                    )}
                    <div className={styles.button_wrapper}>
                        {isHomePage && (
                            <Link to={"/products"}>
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

export default ProductsBlock;
