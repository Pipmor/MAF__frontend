import React, { useState } from 'react';
import PageBlock from '../PageBlock/PageBlock';
import styles from './AboutUs.module.css';
import Certificate from "../../assets/images/AboutImg/Certificate.png";
import Certificate2 from "../../assets/images/AboutImg/Certificate2.png";

const AboutUs = () => {
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
                <h3 className={styles.title}>Миссия и История</h3>
                <p className={styles.paragraph}>Добро пожаловать в LifePrint– Ваш надежный партнер в мире рекламно-полиграфических решений!</p><br/>
                <p className={styles.paragraph}>Наши корни уходят в 2017 год, и с тех пор мы постоянно развиваемся, стремясь предоставить нашим клиентам только лучшее в мире полиграфии. В LifePrint мы гордимся тем, что наша миссия – это не просто предоставление услуг, но создание опыта, который высоко ценится нашими клиентами.</p><br/>
                <p className={styles.paragraph}>Присоединяйтесь к тем, кто уже оценил преимущества сотрудничества с LifePrint. Мы готовы воплотить ваши идеи в жизнь, придавая вашему бизнесу визуальное воплощение, которое оставит непередаваемое впечатление.</p><br/>
                <p className={styles.paragraph}>Выберите LifePrint– выберите качество, доступность и оперативность!</p><br/>
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
