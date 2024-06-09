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
