import styles from "./MobileHeader.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";

const MobileHeader = ({ linkList }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
      <>
        <MobileMenu isMobileHeader handleMenuOpen={handleMenuOpen} />
        <div className={`${styles.wrapperMenuBar} ${isMenuOpen && styles.isOpen}`}>
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
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </>
  );
};

export default MobileHeader;
