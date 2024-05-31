// Tabs.jsx
import React, { useState } from 'react';
import styles from './Tabs.module.css';
import Button from "../UI/Button/Button.jsx";

const Tabs = ({ tabsData }) => {
    const [activeTab, setActiveTab] = useState(0);

    if (!tabsData || tabsData.length === 0) return null;

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabHeaders}>
                {tabsData.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tabHeader} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                {tabsData[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
