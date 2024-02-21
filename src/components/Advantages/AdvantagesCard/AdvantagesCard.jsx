import React from 'react';
import styles from './AdvantagesCard.module.css';


const AdvantagesCard = ({icon, title, description}) => {
  
    return (
    <li className={styles.advantagesCard}>
        <img src={icon} alt="icon" className={styles.advantagesImage}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
    </li>
  )
}

export default AdvantagesCard;