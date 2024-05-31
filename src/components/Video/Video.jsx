import React, { useState, useRef, useEffect } from 'react';
import Beleka from '../../assets/video/Beleka.mp4';
import styles from './Video.module.css';
import Button from "../UI/Button/Button.jsx";
import { useTranslation } from "react-i18next";

const Video = () => {
    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);
    const youtubePlayerRef = useRef(null);

    useEffect(() => {
        const handleClickOutsidePlayer = (event) => {
            if (youtubePlayerRef.current && !youtubePlayerRef.current.contains(event.target)) {
                closeYouTubePlayer();
            }
        };

        document.addEventListener('click', handleClickOutsidePlayer);
        return () => {
            document.removeEventListener('click', handleClickOutsidePlayer);
        };
    }, []);

    const openYouTubePlayer = () => {
        setShowVideo(true);
    };

    const closeYouTubePlayer = () => {
        setShowVideo(false);
    };

    const handleButtonClick = (event) => {
        event.stopPropagation();
        openYouTubePlayer();
    };

    return (
        <div className={styles.main}>
            <div className={styles.overlay}></div>
            <video className={styles.video} src={Beleka} autoPlay loop muted  />
            <div className={styles.content}>
                <h2 className={styles.title}>MIRAGROFARM</h2>
                <h3 className={styles.subtitle}>{t('bannerText')}</h3>
                <button className={styles.watchButton} onClick={handleButtonClick}>{t('watchVideo')}</button>
                {showVideo && (
                    <>
                        <div className={styles.overlayBackground}></div>
                        <div ref={youtubePlayerRef} className={styles.youtubePlayer}>
                            <iframe
                                width="900"
                                height="500"
                                src="https://www.youtube.com/embed/FwoZYHSVvmo?si=npoxZMUMR2YqCBvt"
                                title="YouTube video player"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Video;
