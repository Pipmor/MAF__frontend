import React, { useState } from 'react';
import PageBlock from '../PageBlock/PageBlock.jsx';
import styles from './ProductsBlock.module.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button.jsx';
import useSWRImmutable from 'swr/immutable';
import ReactPaginate from 'react-paginate';
import { getProductsData } from '../../api/getProductsData.js';
import ProductFilter from '../ProductFilter/ProductFilter.jsx';
import {useTranslation} from "react-i18next";

const ProductsBlock = ({ isHomePage }) => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6; // Количество продуктов на странице
    const minProductsToShowPagination = 2; // Минимальное количество продуктов для отображения пагинации

    const { data: productsData } = useSWRImmutable('/products/', getProductsData);
    const products = productsData || []; // Если данные еще не загружены, устанавливаем пустой массив

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <PageBlock className="wrapper">
            <div className={styles.gridContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li>
                            <Link to="/">{t('productLink1')}</Link>
                        </li>
                        <li>
                            <Link to="/">{t('productLink2')}</Link>
                        </li>
                        <li>
                            <Link to="/vaccine">{t('productLink4')}</Link>
                        </li>
                        <li>
                            <Link to="/products">{t('productLink1')}</Link>
                        </li>
                        <li>
                            <Link to="/productNew">{t('productLink5')}</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.container}>
                    <h2>Продукция</h2>
                    <ProductFilter
                        options={['Курица', 'Овцы', 'Коровы', 'Лошади', 'Свиньи', 'Собака']}
                        products={products}
                    />

                    <div className={styles.wrapperCard}>
                        {products &&
                            products.map((product) => (
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
                    {products.length > minProductsToShowPagination && (
                        <ReactPaginate
                            pageCount={Math.ceil(products.length / productsPerPage)}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={styles.pagination}
                            activeClassName={styles.active}
                            previousLabel={'Назад'}
                            nextLabel={'Вперёд'}
                        />
                    )}
                </div>
            </div>
        </PageBlock>
    );
};

export default ProductsBlock;
