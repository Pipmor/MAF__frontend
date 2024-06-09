import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Service.module.css';
import { getService } from '../../api/getService.js';
import ServiceData from "./ServiceData.js";

const Services = () => {
    const { t } = useTranslation();
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getService();
                setServiceData(data);
            } catch (error) {
                console.error('Error fetching service data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.servicesContainer}>
            <h3>{t('services')}</h3>
            <h4>{t('aboutCompany')}</h4>
            <div className={styles.topGrid}>
                {serviceData.slice(0, 4).map((service, index) => (
                    <div key={index} className={`${styles.serviceItem} ${styles.topItem}`}>
                        <img src={service.image} className={styles.servicesImage} />
                        <p className={styles.servicesTitle}>{t(service.name)}</p>
                        <p className={styles.servicesTitle}>{t(service.description)}</p>
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
