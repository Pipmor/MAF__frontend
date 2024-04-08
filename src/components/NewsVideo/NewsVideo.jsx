import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsVideo.module.css';
import { getProductsData } from '../../api/getNewsVideo.js';
import PageBlock from "../PageBlock/PageBlock.jsx";

const NewsPage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductsData();
            if (data) {
                setVideos(data);
            }
        };

        fetchData();
    }, []);

    return (
        <PageBlock>
            <div className={styles.newsContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li><Link to="/events">События</Link></li>
                        <li><Link to="/news">Публикации</Link></li>
                        <li><Link to="/link3">Новинки</Link></li>
                        <li><Link to="/calendar">Календарь</Link></li>
                        <li><Link to="/link3">Видео</Link></li>
                    </ul>
                </div>
                <div className={styles.cardColumn}>
                    {videos.map(video => (
                        <div key={video.id} className={styles.videoCard}>
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                <img src={video.img_preview} alt={video.name} />
                            </a>
                            <p>{video.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageBlock>
    );
};

export default NewsPage;
