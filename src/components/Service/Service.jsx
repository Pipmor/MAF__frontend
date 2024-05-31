import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Service.module.css';
import ServiceData from './ServiceData';

const Services = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.servicesContainer}>
            <h3>{t('services')}</h3>
            <h4>{t('aboutCompany')}</h4>
            <div className={styles.topGrid}>
                {ServiceData.slice(0, 4).map((service, index) => (
                    <div key={index} className={`${styles.serviceItem} ${styles.topItem}`}>
                        <img src={service.imageUrl} className={styles.servicesImage} alt={t(service.title)} />
                        <p className={styles.servicesTitle}>{t(service.title)}</p>
                    </div>
                ))}
            </div>
            <div className={styles.bottomGrid}>
                {ServiceData.slice(4).map((service, index) => (
                    <div key={index} className={`${styles.bottomItem}`}>
                        <img src={service.imgUrl} className={styles.servicesImg} alt={t(service.Description)} />
                        <p className={styles.servicesDescription}>{t(service.Description)}</p>
                    </div>
                ))}
            </div>
            <p>{t('availabilityCertificates')}</p>
            <p>{t('contactDetails')}</p>
        </div>
    );
};

export default Services;
