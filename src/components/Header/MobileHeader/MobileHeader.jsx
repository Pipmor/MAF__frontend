import styles from "./MobileHeader.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowDown from "../../../assets/icons/header_icons/down.svg";
import MobileDropdown from "./MobileDropdown/MobileDropDown";
import MobileMenu from "./MobileMenu/MobileMenu";

const MobileHeader = ({ linkList }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleActiveDropdown = (destination) => {
    setActiveDropdown(activeDropdown === destination ? null : destination);
  };

  return (
    <>
      <MobileMenu isMobileHeader handleMenuOpen={handleMenuOpen} />
      <div
        className={`${styles.wrapperMenuBar} ${isMenuOpen && styles.isOpen}`}
      >
        <MobileMenu handleMenuClose={handleMenuClose} />
        <ul className={styles.menuListContainer}>
          {linkList.map((item, index) => (
            <li key={index}>
              <div className={styles.menubar}>
                <Link
                  to={item.destination}
                  onClick={handleMenuClose}
                  className={styles.link}
                >
                  {item.caption}
                </Link>
                {(item.destination === "services" ||
                  item.destination === "products") && (
                  <div
                    className={styles.accordionButton}
                    onClick={() => handleActiveDropdown(item.destination)}
                  >
                    <img
                      src={ArrowDown}
                      alt="arrowIcon"
                      className={
                        activeDropdown === item.destination
                          ? styles.rotateArrow
                          : ""
                      }
                    />
                  </div>
                )}
              </div>
              {activeDropdown === item.destination && (
                <MobileDropdown
                  activeDropdown={activeDropdown}
                  handleMenuClose={handleMenuClose}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;
