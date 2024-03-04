import React from "react";
import { Link, NavLink } from "react-router-dom";
import useSWR from "swr";
import { useModal } from "../../Modal/ModalContext";
import { getContacts } from "../../../api/getContacts.js";
import PhoneList from "../../PhoneList/PhoneList.jsx";
import styles from "./DesktopHeader.module.css";

const DesktopHeader = ({ linkList }) => {
  const { data } = useSWR("/contacts", getContacts);

  return (
      <>
        <div className={styles.topHeaderWrapper}>
          <div className={`${styles.topHeader} container`}>
            <span>{data?.address}</span>
            <span>
            <PhoneList />
          </span>
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
