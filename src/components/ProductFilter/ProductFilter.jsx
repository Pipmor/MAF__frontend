import React, { useState, useEffect } from 'react';
import { getProductsData } from '../../api/getProductsData.js';
import styles from './ProductFilter.module.css';

const ProductFilter = ({ onFilterChange }) => {
    const [products, setProducts] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState('all');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProductsData();
                setProducts(productsData);
                onFilterChange(productsData); // Initialize with all products
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []); // Removed onFilterChange from dependencies

    const animals = [
        { id: 1, name: 'Коровы' },
        { id: 3, name: 'Лошади' },
        { id: 4, name: 'Овцы' },
        { id: 5, name: 'Курицы' },
        { id: 6, name: 'Свиньи' },
        { id: 7, name: 'Собаки' }
    ];

    const handleAnimalChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedAnimal(selectedValue);

        if (selectedValue === 'all') {
            onFilterChange(products);
        } else {
            const filtered = products.filter((product) =>
                product.icon_animal.some((animal) => animal.id === Number(selectedValue))
            );
            onFilterChange(filtered);
        }
    };

    return (
        <div className={styles.selector_wrapper}>
            <p>Сортировать по:</p>
            <select className={styles.selector} value={selectedAnimal} onChange={handleAnimalChange}>
                <option value="all">Все</option>
                {animals.map((animal) => (
                    <option key={animal.id} value={animal.id}>
                        {animal.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductFilter;
