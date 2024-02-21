import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image, slug }) => {
  return (
    <Link to={`/services/${slug}`}>
      <div className={styles.wrapperCard}>
        <img className={styles.img} src={image} alt={title} />
        <h3 className={styles.cardHeading}>{title}</h3>
        <span className={styles.description}>{description}</span>
      </div>
    </Link>
  );
};

export default ServiceCard;
