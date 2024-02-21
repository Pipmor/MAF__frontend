import React from 'react';
import PageBlock from '../PageBlock/PageBlock';
import styles from './AboutUs.module.css';
import mission from '../../assets/mission.jpg';
import video from '../../assets/video.mp4';

const AboutUs = () => {

  return (
    <PageBlock heading="О нас">
        <div className={styles.container}>
            <div className={styles.mission}>
                <h3 className={styles.title}>Миссия и История</h3>
                <p className={styles.paragraph}>Добро пожаловать в LifePrint– Ваш надежный партнер в мире рекламно-полиграфических решений!</p><br/>
                <p className={styles.paragraph}>Наши корни уходят в 2017 год, и с тех пор мы постоянно развиваемся, стремясь предоставить нашим клиентам только лучшее в мире полиграфии. В LifePrint мы гордимся тем, что наша миссия – это не просто предоставление услуг, но создание опыта, который высоко ценится нашими клиентами.</p><br/>
                <p className={styles.paragraph}>Присоединяйтесь к тем, кто уже оценил преимущества сотрудничества с LifePrint. Мы готовы воплотить ваши идеи в жизнь, придавая вашему бизнесу визуальное воплощение, которое оставит непередаваемое впечатление.</p><br/>
                <p className={styles.paragraph}>Выберите LifePrint– выберите качество, доступность и оперативность!</p><br/>
            </div>
            <div className={styles.carousel}>
                <img src={mission} alt="about us image"/>
                <video className='video' controls muted>
                  <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    </PageBlock>
  )
}

export default AboutUs