import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.css';
import {useTranslation} from "react-i18next";

const Tabs = ({ filteredProducts }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = React.useState(0);

    const tabHeaders = [t('description'), t('compound'), t('other')];
    const tabContents = [
        t(filteredProducts.description),
        t(filteredProducts.compound),
        (
            <>
                <div>{t(filteredProducts.applying)}</div>
                <div>{t(filteredProducts.waiting_time)}</ div>
                <div>{t(filteredProducts.release_form)}</div>
                <div>{t(filteredProducts.storage_date)}</div>
                <div>{t(filteredProducts.storage_conditions)}</div>
            </>
        )
    ];

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabHeaders}>
                {tabHeaders.map((header, index) => (
                    <div
                        key={index}
                        className={`${styles.tabHeader} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {header}
                    </div>
                ))}
            </div>
            <div className={styles.tabContent}>
                {tabContents[activeTab]}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    product: PropTypes.shape({
        description: PropTypes.string.isRequired,
        compound: PropTypes.string.isRequired,
        applying: PropTypes.string.isRequired,
        waiting_time: PropTypes.string.isRequired,
        release_form: PropTypes.string.isRequired,
        storage_date: PropTypes.string.isRequired,
        storage_conditions: PropTypes.string.isRequired,
    }).isRequired,
};

export default Tabs;
