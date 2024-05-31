import React, { useState, useRef } from 'react';
import search from '../../assets/icons/header_icons/search.svg';
import styles from './Search.module.css';
import ProductDropdown from '../ProductDropdown/Dropdown';
import { getProductsData } from '../../api/getProductsData.js';
import {useTranslation} from "react-i18next";

const Search = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputRef = useRef(null);

    const handleInputChange = async (event) => {
        const value = event.target.value.trim().toLowerCase();

        setSearchTerm(value);

        if (value !== '') {
            try {
                // Выполняем запрос к серверу для получения списка продуктов
                const productList = await getProductsData();

                // Фильтруем продукты по имени на основе введенного значения
                const filteredProducts = productList.filter(product =>
                    product.name.toLowerCase().includes(value)
                );

                setSearchResults(filteredProducts);
                setShowDropdown(true);
            } finally {
                // Код в блоке finally будет выполнен независимо от успешности запроса
                setShowDropdown(true);
            }
        } else {
            setShowDropdown(false);
            setSearchResults([]);
        }
    };

    const handleSelectProduct = (selectedProduct) => {
        const selectedProductName = selectedProduct.name.toLowerCase();
        setSearchTerm(selectedProductName);
        setShowDropdown(false);
    };

    return (
        <div className={styles.search}>
            <input
                type="text"
                className={styles.input}
                placeholder={t('search')}
                value={searchTerm}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <button className={styles.button} onClick={handleInputChange}>
                <img src={search} alt="search-icon" className={styles.icon} />
            </button>

            {showDropdown && (
                <ProductDropdown
                    products={searchResults}
                    onSelectProduct={handleSelectProduct}
                    inputRef={inputRef}
                />
            )}
        </div>
    );
};

export default Search;
