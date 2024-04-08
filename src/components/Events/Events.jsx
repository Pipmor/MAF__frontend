import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Events.module.css';
import eventsData from './EventsData.js';
import PageBlock from "../PageBlock/PageBlock.jsx";
import event1 from '../../assets/press/event1.png'


const EventsPage = () => {
  return (
      <PageBlock>
        <div className={styles.eventsContainer}>
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
            <h2>События</h2>
            <div className={styles.cardPhoto}>
              <img src={event1} alt="" />
              <img src={event1} alt="" />

            </div>
            <div className={styles.eventsCardContainer}>
              {eventsData.map((events) => (
                  <div key={events.id} className={styles.eventsCard}>
                    <img src={events.photo} alt={events.title} />
                    <div className={styles.eventsText}>
                    <h5>{events.date}</h5>
                    <h3>{events.title}</h3>
                    <p>{events.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </PageBlock>
  );
};

export default EventsPage;
