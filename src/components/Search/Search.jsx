import React, { useState, useRef } from 'react';
import search from '../../assets/icons/header_icons/search.svg';
import styles from './Search.module.css';
import ProductDropdown from '../ProductDropdown/Dropdown';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputRef = useRef(null);

    const handleInputChange = async (event) => {
        const value = event.target.value;
        const lowercaseValue = value.trim().toLowerCase(); // Преобразуем к нижнему регистру

        setSearchTerm(value);

        if (lowercaseValue !== '') {
            try {
                const response = await fetch(`http://107.23.142.232:80/api/v1/products/?search=${encodeURIComponent(lowercaseValue)}`);
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const data = await response.json();
                setSearchResults(data);
                setShowDropdown(true);
            } catch (error) {
                console.error('Произошла ошибка при выполнении поиска:', error);
                setSearchResults([]);
                setShowDropdown(false);
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
                placeholder="Найти интересующий товар"
                value={searchTerm}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <button className={styles.button} onClick={handleInputChange}>
                <img src={search} alt="search-icon" className={styles.icon} />
            </button>

            {/* Используем компонент ProductDropdown для отображения выпадающего меню */}
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
