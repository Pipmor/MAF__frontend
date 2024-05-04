import React from "react";
import styles from "./AccordionMenu.module.css";
import AccordionMenu from "./AccordionMenu.js"; // Импорт массива данных для аккордеона

const Accordion = ({ index, activeIndex, onAccordionClick }) => {
    const { title, contentMain,contentSecondary } = AccordionMenu[index]; // Получаем данные для данного индекса

    const isActive = index === activeIndex;

    return (
        <div className={styles["accordion-item"]} key={title}>
            <div className={styles["accordion-title"]} onClick={() => onAccordionClick(index)}>
                <div>{title}</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className={styles["accordion-content"]}>{contentMain}</div>}
            {isActive && <div className={styles["accordion-content"]}>{contentSecondary}</div>}
        </div>
    );
};

export default Accordion;