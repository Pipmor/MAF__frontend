import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./DesktopHeader.module.css";
import Search from "../../Search/Search.jsx";
import logo from "../../../assets/images/Logo.png";
import LanguageSelector from "../../LanguageSwitcher/LanguageSwitcher.jsx";

const DesktopHeader = ({ linkList }) => {
  return (
      <>
        <div className={styles.topHeaderWrapper}>
          <div className={`${styles.topHeader} container`}>
            <Search className={styles.search} />
            <div className={styles.contacts}>
              <a href="mailto:email@gmail.com" className={styles.email}>
                email@gmail.com
              </a>
              <a href="tel: +996000000000" className={styles.tel}>
                +996000000000
              </a>
            </div>
            <LanguageSelector/>
          </div>
        </div>
        <header className={styles.header}>
          <div className={styles.navWrapper}>
            <nav className={`${styles.nav} container`}>
              <Link to="/" className={styles.homeLink}>
                <img src={logo} alt="Логотип" className={styles.logo} />
              </Link>
              <ul className={styles.navList}>
                {linkList.map((item) => (
                    <li key={item.caption}>
                      <NavLink className={styles.navLink} to={item.destination}>
                        {item.caption}
                      </NavLink>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </>
  );
};

export default DesktopHeader;
