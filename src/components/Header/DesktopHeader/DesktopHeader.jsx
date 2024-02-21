import styles from "./DesktopHeader.module.css";
import { useState } from "react";
import useSWR from "swr";
import { Link, NavLink } from "react-router-dom";
import Button from "../../UI/Button/Button";
import logo from "../../../assets/header_logo.png";
import Dropdown from "./Dropdown/Dropdown";
import { useModal } from "../../Modal/ModalContext";
import { getContacts } from "../../../api/getContacts.js";
import PhoneList from "../../PhoneList/PhoneList.jsx";

const DesktopHeader = ({ linkList }) => {
  const { data } = useSWR("/contacts", getContacts);
  const [dropdownContent, setDropdownContent] = useState(null);
  const { openModal } = useModal();

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
      {/* topHeaderWrapper нужен для того, чтобы спрятать под ним выпадающее меню */}
      <div className={styles.topHeaderWrapper}>
        <div className={`${styles.topHeader} container`}>
          <span>{data?.address}</span>
          <span>
            <PhoneList />
          </span>
        </div>
      </div>
      <header className={styles.header} onMouseLeave={closeDropdown}>
        {/* navWrapper нужен для того, чтобы спрятать под ним выпадающее меню */}
        <div className={styles.navWrapper}>
          <nav className={`${styles.nav} container`}>
            <Link
              to="/"
              className={styles.homeLink}
              onMouseEnter={closeDropdown}
            >
              <img src={logo} alt="logo" />
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
            <Button className="button" onClick={openModal}>
              Заказать печать
            </Button>
          </nav>
        </div>
        <Dropdown contentType={dropdownContent} closeDropdown={closeDropdown} />
      </header>
    </>
  );
};

export default DesktopHeader;
