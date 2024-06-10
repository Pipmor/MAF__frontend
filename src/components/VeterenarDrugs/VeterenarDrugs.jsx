import React, { useState, useEffect } from 'react';
import PageBlock from '../PageBlock/PageBlock.jsx';
import styles from './VeterenarDrugs.module.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { getProductsData } from '../../api/getProductsData.js';
import ProductFilter from '../ProductFilter/ProductFilter.jsx';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

const VeterenarDrugs = ({ isHomePage }) => {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const productsPerPage = 6; // Количество продуктов на странице
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProductsData();
                setProducts(productsData);
                setFilteredProducts(productsData); // Initialize with all products
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, [i18n.language]);

    const handleFilterChange = (filteredProducts) => {
        setFilteredProducts(filteredProducts);
        setCurrentPage(0); // Reset to first page on filter change
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * productsPerPage;
    const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);

    return (
        <PageBlock className="wrapper">
            <div className={styles.gridContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li>
                            <Link key="veterenarDrugs" to="/veterenarDrugs">{t('productLink2')}</Link>
                        </li>
                        <li>
                            <Link key="vaccine" to="/vaccine">{t('productLink4')}</Link>
                        </li>
                        <li>
                            <Link key="feed" to="/feed">{t('productLink3')}</Link>
                        </li>
                        <li>
                            <Link key="productNew" to="/productNew">{t('productLink5')}</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.container}>
                    <p className={styles.title}>{t('productLink2')}</p>
                    <ProductFilter onFilterChange={handleFilterChange} />
                    <div className={styles.wrapperCard}>
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    title={t(product.name)} // Tra}slate product name
                                    description={t(product.short_description)} // Translate product description
                                    img_product={product.img_product}
                                    id={product.id}
                                    types={product.icon_animal.map(animal => animal.icon)}
                                />
                            ))
                        ) : (
                            <p className={styles.noProducts}>{t('loading')}</p>
                        )}
                    </div>
                    {filteredProducts.length > productsPerPage && (
                        <ReactPaginate
                            pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
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

export default VeterenarDrugs;
