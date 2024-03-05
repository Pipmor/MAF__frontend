import React from "react";
import { Link, NavLink } from "react-router-dom";
import useSWR from "swr";
// import { useModal } from "../../Modal/ModalContext";
import { getContacts } from "../../../api/getContacts.js";
import styles from "./DesktopHeader.module.css";
import { Search } from "../../Search/Search.jsx";

const DesktopHeader = ({ linkList }) => {
  // const { data } = useSWR("/contacts", getContacts);

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
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.navWrapper}>
          <nav className={`${styles.nav} container`}>
            <Link to="/" className={styles.homeLink}>
              {/* Контент для домашней ссылки */}
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
