import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useSWR from "swr";
import { useModal } from "../../Modal/ModalContext";
import { getContacts } from "../../../api/getContacts.js";
import PhoneList from "../../PhoneList/PhoneList.jsx";
import styles from "./DesktopHeader.module.css";

import Dropdown from "./Dropdown/Dropdown";

const DesktopHeader = ({ linkList }) => {
  const { data } = useSWR("/contacts", getContacts);
  const [dropdownContent, setDropdownContent] = useState(null);

  const openDropdown = (destination) => {
    if (destination === "services" || destination === "products") {
      setDropdownContent(destination);
    } else {
      setDropdownContent(null);
    }
  };

  const closeDropdown = () => {
    setDropdownContent(null);
  };

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
        <header className={styles.header} onMouseLeave={closeDropdown}>
          <div className={styles.navWrapper}>
            <nav className={`${styles.nav} container`}>
              <Link
                  to="/"
                  className={styles.homeLink}
                  onMouseEnter={closeDropdown}
              >

              </Link>
              <ul className={styles.navList}>
                {linkList.map((item) => (
                    <li key={item.caption}>
                      <NavLink
                          className={styles.navLink}
                          to={item.destination}
                          onMouseEnter={() => openDropdown(item.destination)}
                      >
                        {item.caption}
                      </NavLink>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
          <Dropdown contentType={dropdownContent} closeDropdown={closeDropdown} />
        </header>
      </>
  );
};

export default DesktopHeader;
