import ArrowDown from "../../assets/icons/icons_blog/arrow.svg";
import styles from "./AccordionItem.module.css";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const AccordionItem = ({ arItem, openAccordion, isOpen }) => {
  const headingAccordionItem = arItem.title;
  const sanitizedData = DOMPurify.sanitize(headingAccordionItem);

  return (
    <li className={styles["accordion-item"]}>
      <div className={styles.accordionLeft}>
        <img src={arItem.img} alt="image"  className={styles.accordionImage}/>
      </div>
      <div className={styles.accordionRight}>
        <div onClick={() => openAccordion()} className={styles.openAccordionClick}>
          <div className={styles.heading}>{parse(sanitizedData)}</div>
          <img
            src={ArrowDown}
            className={`${styles["accordion-arrow"]} ${
              isOpen ? styles.active : ""
            }`}
          />
        </div>

        <div
          className={`${styles["accordion-body"]} ${
            isOpen
              ? styles["accordion-collapse-open"]
              : styles["accordion-collapse"]
          }`}
        >
          <p>{arItem.titleItem}</p>
          {arItem.contents.map((contents, id) => (
            <div key={id} className={styles.acrSection}>
              <p>
                <b>{contents.section}</b> {" "} {contents.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
