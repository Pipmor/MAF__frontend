import React, { useState } from 'react';
import Beleka from '../../assets/video/Beleka.mp4';
import styles from './Video.module.css';
import Button from "../UI/Button/Button.jsx";

const Main = () => {
    const [showVideo, setShowVideo] = useState(false);

    const openYouTubePlayer = () => {
        setShowVideo(true);
    };

    const closeYouTubePlayer = () => {
        setShowVideo(false);
    };

    return (
        <div className={styles.main}>
            <div className={styles.overlay}></div>
            <video className={styles.video} src={Beleka} autoPlay loop muted />
            <div className={styles.content}>
                <h2 className={styles.title}>MIRAGROFARM</h2>
                <h3 className={styles.subtitle}>Широкий выбор высококачественных ветеринарных препаратов и специализированных кормов.</h3>
                <button className={styles.watchButton} onClick={openYouTubePlayer}>Смотреть видео</button>
                {showVideo && (
                    <>
                        <div className={styles.overlayBackground}></div>
                        <div className={styles.youtubePlayer}>
                            <iframe
                                width="900"
                                height="500"
                                src="https://www.youtube.com/embed/FwoZYHSVvmo?si=npoxZMUMR2YqCBvt"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                            <Button className={styles.closeButton} onClick={closeYouTubePlayer}>Закрыть</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Main;
