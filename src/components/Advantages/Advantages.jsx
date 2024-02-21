import React from 'react';
import styles from "./Advantages.module.css";
import AdvantagesCard from './AdvantagesCard/AdvantagesCard';
import PageBlock from '../PageBlock/PageBlock';
import speed from '../../assets/advantagesicons/speed.svg';
import everyuser from '../../assets/advantagesicons/everyuser.svg';
import success from '../../assets/advantagesicons/success.svg';
import localpin from '../../assets/advantagesicons/localpin.svg';

const Advantages = () => {
  return (
    <PageBlock heading="Преимущества">
        <ul className={styles.advantagesBlock}>
            <AdvantagesCard 
                icon={speed} 
                title="Скорость" 
                description="Выполнение заказа быстро и в срок."
            />
            <AdvantagesCard 
                icon={success}
                title="Качество" 
                description="Качественное выполнение всех работ."
            />
            <AdvantagesCard 
                icon={everyuser}
                title="Доступность" 
                description="Доступные цены для широкого круга."
            />
            <AdvantagesCard 
                icon={localpin}
                title="Местное производство" 
                description="Производство на местном уровне, поддержка экономики."
            />
        </ul>
    </PageBlock>
  )
}

export default Advantages