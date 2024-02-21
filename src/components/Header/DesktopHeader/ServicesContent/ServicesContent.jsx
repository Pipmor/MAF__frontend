import Button from "../../../UI/Button/Button";
import styles from "./ServicesContent.module.css";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import ShortArrowSvg from "../../../UI/Button/ShortArrowSvg";

const ServicesContent = ({
  description,
  imageUrl,
  pathName,
  closeDropdown,
}) => {
  const sanitizedData = DOMPurify.sanitize(description);

  const handleButtonClick = () => {
    closeDropdown();
  };

  return (
    <div className={styles.contentContainer}>
      <div className={`${styles.textContainer} ${styles.truncatedText}`}>
        {parse(sanitizedData)}
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
          <img
            src={imageUrl}
            alt="photo of services"
            className={styles.images}
          />
        </div>
        <Link to={`/services/${pathName}`}>
          <Button className="button" onClick={handleButtonClick}>
            Узнать больше
            <ShortArrowSvg />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesContent;
