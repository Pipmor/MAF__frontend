import styles from "./ContactCard.module.css";

/**
 * @param {object} ContactCardProps
 * @param {string} ContactCardProps.title
 * @param {string} ContactCardProps.iconURL
 * @param {string|string[]} ContactCardProps.content
 */
const ContactCard = ({ title, iconURL, content }) => {
  let cardContent = [];
  if (Array.isArray(content)) {
    cardContent = [...content];
  } else if (typeof content === "string" && content) {
    cardContent = [content];
  } else {
    cardContent = [null];
  }

  return (
    <li className={styles.ContactCard}>
      <h3 className={styles.title}>
        <img src={iconURL} alt="icon" />
        <span>{title}</span>
      </h3>
      <ul className={styles.contactList}>
        {cardContent.map((item, index) => (
          <li className={styles.contactLine} key={index}>
            {<p>{item}</p> || <p className={styles.skeleton} />}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ContactCard;
