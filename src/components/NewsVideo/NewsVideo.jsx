import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'; // Импорт компонента пагинации
import styles from './NewsVideo.module.css';
import { getProductsData } from '../../api/getNewsVideo.js';
import PageBlock from "../PageBlock/PageBlock.jsx";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
    const { t } = useTranslation();
    const [videos, setVideos] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const videosPerPage = 10; // Количество видео на странице
    const minVideosToShowPagination = 5; // Минимальное количество видео для показа пагинации

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductsData();
            if (data) {
                setVideos(data);
            }
        };

        fetchData();
    }, []);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayedVideos = videos.slice(pageNumber * videosPerPage, (pageNumber + 1) * videosPerPage);

    return (
        <PageBlock>
            <div className={styles.newsContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li><Link to="/events">{t('newsLink1')}</Link></li>
                        <li><Link to="/publish">{t('newsLink2')}</Link></li>
                        <li><Link to="/calendar">{t('newsLink4')}</Link></li>
                        <li><Link to="/newsvideo">{t('newsLink5')}</Link></li>
                    </ul>
                </div>
                <div className={styles.cardColumn}>
                    {displayedVideos.map(video => (
                        <div key={video.id} className={styles.videoCard}>
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                <img src={video.img_preview} alt={video.name} />
                            </a>
                            <p>{video.name}</p>
                        </div>
                    ))}
                    {videos.length > minVideosToShowPagination && (
                        <ReactPaginate
                            pageCount={Math.ceil(videos.length / videosPerPage)}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={styles.pagination}
                            activeClassName={styles.active}
                            previousLabel={'Назад'}
                            nextLabel={'Вперёд'}
                        />
                    )}
                </div>
            </div>
        </PageBlock>
    );
};

export default NewsPage;
