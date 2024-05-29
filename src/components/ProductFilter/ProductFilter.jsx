import React, { useState, useEffect } from 'react';
import { getProductsData } from '../../api/getProductsData.js';
import styles from './ProductFilter.module.css';

const ProductFilter = ({ options }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProductsData();
                setProducts(productsData);
                setFilteredProducts(productsData);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAnimalChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedAnimal(selectedValue);

        if (selectedValue === 'all') {
            // Если выбрано "Все", показываем все продукты
            setFilteredProducts(products);
        } else {
            // Иначе фильтруем продукты по выбранной иконке животного
            const filtered = products.filter((product) =>
                product.icon_animal.some((animal) => animal.name === selectedValue)
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className={styles.selector_wrapper}>
            <p>Сортировать по:</p>
            <select className={styles.selector} value={selectedAnimal} onChange={handleAnimalChange}>
                <option value="all">Все</option>
                {options.map((option) => (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            {filteredProducts.length > 0 ? (
                <ul className={styles.productList}>
                    {filteredProducts.map((product) => (
                        <li key={product.id} className={styles.productItem}>
                            <h3>{product.name}</h3>
                            <p>{product.short_description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noProducts}>Нет продуктов с выбранным видом животного</p>
            )}
        </div>
    );
};

export default ProductFilter;
