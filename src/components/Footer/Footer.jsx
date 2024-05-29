import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import logo from "../../assets/images/Logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const linkList = [
    { destination: "about", caption: t("about") },
    { destination: "services", caption: t("services") },
    { destination: "products", caption: t("productLink1") },
    { destination: "press", caption: t("press") },
    { destination: "questions", caption: t("AnswerQuestions") },
    { destination: "contacts", caption: t("contacts") },
  ];

  return (
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.flexContainer}>
            <Link to="/" >
              <img src={logo} alt="Логотип" className={styles.logo} />
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
