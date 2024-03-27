import React from 'react';
import { Link } from 'react-router-dom';
import PageBlock from '../PageBlock/PageBlock';
import styles from './Сalendar.module.css';

const CalendarPage = () => {
    return (
        <PageBlock>
            <div className={styles.calendarContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li><Link to="/link1">События</Link></li>
                        <li><Link to="/link2">Публикации</Link></li>
                        <li><Link to="/link3">Новинки</Link></li>
                        <li><Link to="/link3">Календарь выстовок</Link></li>
                        <li><Link to="/link3">Видео</Link></li>
                    </ul>
                </div>
                <div className={styles.calendarTable}>
                    <table className={styles.tableTh}>
                        <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Событие</th>
                            <th>Три</th>
                            <th>Четыре</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus praesentium
                                quidem veritatis voluptatem. Dolor illo ipsam molestias mollitia natus omnis
                                perferendis possimus reprehenderit unde vitae. Error facilis neque unde!</td>
                        </tr>
                        <tr>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>asdasda</td>
                        </tr>
                        <tr>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>asdasda</td>
                        </tr>
                        <tr>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>asdasd</td>
                            <td>asdasda</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </PageBlock>
    );
};

export default CalendarPage;
