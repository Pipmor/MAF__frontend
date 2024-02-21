import styles from "./PageBlock.module.css";

/**
 *
 * @param {object} PageBlockProps
 * @param {string} PageBlockProps.heading
 * @param {string} PageBlockProps.subHeading
 * @param {string} PageBlockProps.id
 * @param {string} PageBlockProps.className
 */
const PageBlock = ({ heading, subHeading, children, id, className = "" }) => {
  return (
    <section className={`container ${styles.section} ${className}`} id={id}>
      {heading ? (
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>{heading}</h2>
          {subHeading && <p className={styles.subHeading}>{subHeading}</p>}
        </div>
      ) : null}
      {children}
    </section>
  );
};

export default PageBlock;
