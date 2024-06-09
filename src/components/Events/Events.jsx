import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Events.module.css';
import eventsData from './EventsData.js';
import PageBlock from "../PageBlock/PageBlock.jsx";
import event1 from '../../assets/press/event1.png';
import { useTranslation } from "react-i18next";
import ReactPaginate from 'react-paginate'; // Импорт компонента пагинации

const EventsPage = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const eventsPerPage = 5; // Количество событий на странице
  const pagesVisited = pageNumber * eventsPerPage;

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const displayEvents = events
      .slice(pagesVisited, pagesVisited + eventsPerPage)
      .map((event) => (
          <div key={event.id} className={styles.eventsCard}>
            <img src={event.photo} alt={event.title} />
            <div className={styles.eventsText}>
              <h5>{event.date}</h5>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
      ));

  const pageCount = Math.ceil(events.length / eventsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
      <PageBlock>
        <div className={styles.eventsContainer}>
          <div className={styles.leftColumn}>
            <ul>
              <li><Link to="/events">{t('newsLink1')}</Link></li>
              <li><Link to="/publish">{t('newsLink2')}</Link></li>
              <li><Link to="/calendar">{t('newsLink4')}</Link></li>
              <li><Link to="/newsvideo">{t('newsLink5')}</Link></li>
            </ul>
          </div>
          <div className={styles.cardColumn}>
            <h2>{t('newsLink1')}</h2>
            <div className={styles.cardPhoto}>
              <img src={event1} alt="" />
              <img src={event1} alt="" />
            </div>
            <div className={styles.eventsCardContainer}>
              {displayEvents}
            </div>
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                previousLabel={'Назад'}
                nextLabel={'Вперёд'}
            />
          </div>
        </div>
      </PageBlock>
  );
};

export default EventsPage;
