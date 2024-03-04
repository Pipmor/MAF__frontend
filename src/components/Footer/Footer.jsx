import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const linkList = [
  { destination: "about", caption: "О компании" },
  { destination: "services", caption: "Услуги" },
  { destination: "products", caption: "Продукция" },
  { destination: "partners", caption: "Наши партнёры" },
  { destination: "press", caption: "Пресс центр" },
  { destination: "questions", caption: "Вопросы и Ответы" },
  { destination: "contacts", caption: "Контакты" },
];

const Footer = () => {
  return (
      <footer className={styles. footer}>
        <div className="container">
          <div className={styles.flexContainer}>
            <Link to="/" className={styles.logo}>

            </Link>

            <nav className={styles.footerNav}>
              {linkList.map((link, index) => (
                  <Link key={index} to={`/${link.destination}`}>
                    {link.caption}
                  </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
