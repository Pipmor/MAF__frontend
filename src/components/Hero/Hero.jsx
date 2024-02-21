import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import PageBlock from '../PageBlock/PageBlock';
import Button from '../UI/Button/Button';
import { useModal } from '../Modal/ModalContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import { images, cardsData } from '../../constants/hero.js';

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { openModal } = useModal();
  const isMobile = useMediaQuery('(max-width: 800px)');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isMouseOver]);

  const handleCardAnimation = (index) => {
    return index === activeIndex
      ? [isMobile ? styles.cardMobile : styles.card, styles.active].join(' ')
      : styles.card;
  };

  const handleCardMouseEnter = (index) => {
    setActiveIndex(index);
    setIsMouseOver(true);
  };

  const handleCardMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      className={styles.hero_section}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[activeIndex]})`,
      }}
    >
      <PageBlock>
          <div className={styles.heroTitle}>
            <h1 className={styles.heroHeading1}>LIFE PRINT</h1>
            <h3 className={styles.heroHeading3}>Рекламно-полиграфические услуги</h3>
            <Button className="button" onClick={openModal}>
              Оставить заявку
            </Button>
          </div>
          <div className={styles.cards_container}>
            {cardsData.map((card, index) => (
              <div
                className={handleCardAnimation(index)}
                key={index}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={handleCardMouseLeave}
              >
                {isMobile ? (
                    <>
                      <img src={card.icon} alt={`Icon for ${card.title}`} />
                      <h3>{card.title}</h3>
                    </>
                  ) : (
                    <>
                      <img src={index === activeIndex ? card.icon2 : card.icon} alt={`Icon for ${card.title}`} />
                      <h3 style={{ color: card.titleColor }}>{card.title}</h3>
                      <p>{card.description}</p>
                    </>
  )}
              </div>
            ))}
          </div>
      </PageBlock>   
    </div>
  );
};

export default Hero;
