import React from 'react';
import { Link } from 'react-router-dom';
import styles from './News.module.css';
import newsData from './NewsData.js';
import PageBlock from "../PageBlock/PageBlock.jsx";


const NewsPage = () => {
  return (
      <PageBlock>
        <div className={styles.newsContainer}>
          <div className={styles.leftColumn}>
            <ul>
              <li><Link to="/events">События</Link></li>
              <li><Link to="/link2">Публикации</Link></li>
              <li><Link to="/link3">Новинки</Link></li>
              <li><Link to="/calendar">Календарь</Link></li>
              <li><Link to="/link3">Видео</Link></li>
            </ul>
          </div>
          <div className={styles.cardColumn}>
            <h2>Публикации</h2>
            <div className={styles.newsCardContainer}>
              {newsData.map((news) => (
                  <div key={news.id} className={styles.newsCard}>
                    <img src={news.photo} alt={news.title} />
                    <div className={styles.newsText}>
                    <h5>{news.date}</h5>
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </PageBlock>
  );
};

export default NewsPage;
