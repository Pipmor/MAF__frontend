import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import styles from './Publish.module.css';
import { getPublishData } from '../../api/getPublishData.js';
import PageBlock from "../PageBlock/PageBlock.jsx";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const { t } = useTranslation();
  const [publishData, setPublishData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 5; // Количество публикаций на странице
  const minProductsToShowPagination = 3; // Минимальное количество публикаций для показа пагинации

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPublishData();
        setPublishData(data);
      } catch (error) {
        console.error("Failed to fetch publish data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const products = publishData.slice(pageNumber * productsPerPage, (pageNumber + 1) * productsPerPage);

  return (
      <PageBlock>
        <div className={styles.newsContainer}>
          <div className={styles.leftColumn}>
            <ul>
              <li><Link to="/events">{t('newsLink1')}</Link></li>
              <li><Link to="/news">{t('newsLink2')}</Link></li>
              <li><Link to="/calendar">{t('newsLink4')}</Link></li>
              <li><Link to="/newsvideo">{t('newsLink5')}</Link></li>
            </ul>
          </div>
          <div className={styles.cardColumn}>
            <h2>Публикации</h2>
            <div className={styles.newsCardContainer}>
              {products.map((news) => (
                  <div key={news.id} className={styles.newsCard}>
                    <img src={news.image} alt={news.title} />
                    <div className={styles.newsText}>
                      <h5>{news.created_at}</h5>
                      <h3>{news.title}</h3>
                      <p>{news.short_description}</p>
                    </div>
                  </div>
              ))}
            </div>
            {publishData.length > minProductsToShowPagination && (
                <ReactPaginate
                    pageCount={Math.ceil(publishData.length / productsPerPage)}
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
