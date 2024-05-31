import React, { useState } from 'react';
import PageBlock from '../PageBlock/PageBlock';
import styles from './AboutUs.module.css';
import Certificate from "../../assets/images/AboutImg/Certificate.png";
import Certificate2 from "../../assets/images/AboutImg/Certificate2.png";
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();
    const certificates = [Certificate2, Certificate, Certificate2, Certificate, Certificate2, Certificate];
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleClick = (certificate) => {
        setSelectedCertificate(certificate);
    };

    return (
        <PageBlock heading="О компании">
            <div className={styles.container}>
                <div className={styles.image}>
                    {certificates.map((certificate, index) => (
                        <img
                            key={index}
                            src={certificate}
                            alt={`Certificate ${index + 1}`}
                            className={styles.carouselImage}
                            onClick={() => handleClick(certificate)}
                        />
                    ))}
                </div>
            </div>

            {selectedCertificate && (
                <div className={styles.overlay} onClick={() => setSelectedCertificate(null)}>
                    <img src={selectedCertificate} alt="Selected Certificate" className={styles.zoomedImage} />
                </div>
            )}

            <div className={styles.mission}>
                <p className={styles.paragraph}>{t('aboutMaf')}</p><br/>
            </div>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/a-xPJJH5Qug?si=pcdZAfrXTMsorXo6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </PageBlock>
    );
};

export default AboutUs;
