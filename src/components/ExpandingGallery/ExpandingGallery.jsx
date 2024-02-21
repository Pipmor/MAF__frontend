import styles from './ExpandingGallery.module.css';
import PageBlock from '../PageBlock/PageBlock';
import { useState } from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const ExpandingGallery = () => {

    const [activeBox, setActiveBox] = useState(0);

    const handleMouseEnter = (index) => {
        setActiveBox(index);
    };
    const handleButtonClick = (index) => {
        setActiveBox(index);
    };

  return (
    <PageBlock heading="О нас" subHeading="Наша история, миссия и преимущества">
        <div className={styles.container}>
            <div className={styles.gallery}>
                {[0, 1, 2].map((index) => (
                    <div
                        key={index}
                        className={`${styles.img_box} ${index === activeBox ? styles.active : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        <div className={styles.div}>
                            {/* don't delete this div */}
                        </div>
                        <h2>{index === 0 ? 'О нас' : index === 1 ? 'Наша миссия' : 'Наши преимущества'}</h2>
                        <div className={styles.wrapper}>
                            <p>
                            {index === 0
                                ? 'Наши корни уходят в 2017 год, и с тех пор мы постоянно развиваемся, стремясь предоставить нашим клиентам только лучшее в мире полиграфии.'
                                : index === 1
                                ? 'В LifePrint мы гордимся тем, что наша миссия – это не просто предоставление услуг, но создание опыта, который высоко ценится нашими клиентами.'
                                : 'Мы рады воплотить ваши идеи в жизнь, придавая вашему бизнесу визуальное воплощение, которое оставит непередаваемое впечатление.'}
                            </p>
                            <Link to={'/about/'} className={styles.link}>
                                <Button className="button" withArrow>Узнать больше</Button>
                            </Link>
                            
                        </div>
                    </div>
            ))}

            </div>
            <div className={styles.circleButtons}>
                {[0, 1, 2].map((index) => (
                    <button
                    key={index}
                    className={`${styles.circleButton} ${index === activeBox ? styles.active : ''}`}
                    onClick={() => handleButtonClick(index)}
                    />
                ))}
            </div>
        </div>
    </PageBlock>
  )
}

export default ExpandingGallery