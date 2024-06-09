import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageBlock from '../PageBlock/PageBlock';
import styles from './Сalendar.module.css';
import { useTranslation } from "react-i18next";
import { getCalendar } from "../../api/getCalendar.js";  // путь к вашему файлу с API-запросом

const CalendarPage = () => {
    const { t } = useTranslation();
    const [calendarData, setCalendarData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCalendar();
                setCalendarData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <PageBlock>
            <div className={styles.calendarContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li><Link to="/events">{t('newsLink1')}</Link></li>
                        <li><Link to="/publish">{t('newsLink2')}</Link></li>
                        <li><Link to="/calendar">{t('newsLink4')}</Link></li>
                        <li><Link to="/newsvideo">{t('newsLink5')}</Link></li>
                    </ul>
                </div>
                <div className={styles.calendarTable}>
                    <table className={styles.tableTh}>
                        <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Событие</th>
                            <th>Период</th>
                            <th>Место</th>
                        </tr>
                        </thead>
                        <tbody>
                        {calendarData.map((event) => (
                            <tr key={event.id}>
                                <td>{event.data_of_participation}</td>
                                <td>{event.name_exhibition}</td>
                                <td>{event.period}</td>
                                <td>{event.location}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </PageBlock>
    );
};

export default CalendarPage;
