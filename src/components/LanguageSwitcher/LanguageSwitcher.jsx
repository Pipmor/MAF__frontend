import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher..module.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('ru');

    const changeLanguage = () => {
        const newLanguage = currentLanguage === 'ru' ? 'kg' : 'ru';
        i18n.changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <div className={styles.languageSelector}>
            <button className={styles.languageButton} onClick={changeLanguage}>
                {currentLanguage === 'ru' ? 'Рус' : 'Кырг'}
            </button>
        </div>
    );
};

export default LanguageSelector;
