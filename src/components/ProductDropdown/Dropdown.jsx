import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';

const ProductDropdown = ({ products, onSelectProduct }) => {
    const handleProductSelect = (selectedProduct) => {
        // Вызываем функцию onSelectProduct для передачи выбранного продукта выше по иерархии
        onSelectProduct(selectedProduct);
    };

    return (
        <div className={styles.dropdown}>
            {products.map((product) => (
                <Link
                    key={product.id}
                    to={`/products/${product.id}`} // Ссылка на страницу ProductDetail с productId в URL
                    className={styles.dropdownItem}
                    onClick={() => handleProductSelect(product)}
                >
                    <img src={product.img_product} alt={product.name} className={styles.productImage} />
                    <span className={styles.productName}>{product.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default ProductDropdown;
