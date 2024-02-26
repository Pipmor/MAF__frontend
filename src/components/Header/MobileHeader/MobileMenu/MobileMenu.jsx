
import menuIcon from "../../../../assets/icons/hamburger-button.png";
import closeIcon from "../../../../assets/icons/close.png";
import { Link } from "react-router-dom";
import styles from "../MobileHeader.module.css";

const MobileMenu = ({ isMobileHeader, handleMenuOpen, handleMenuClose }) => {
  return (
    <header
      className={
        isMobileHeader
          ? `${styles.mobileHeader} container`
          : styles.mobileHeaderMenu
      }
    >
      <Link to="/" onClick={!isMobileHeader ? handleMenuClose : undefined}>
      </Link>
      <button
        className={styles.button}
        onClick={isMobileHeader ? handleMenuOpen : handleMenuClose}
      >
        {isMobileHeader ? (
          <img src={menuIcon} alt="menuIcon" />
        ) : (
          <img src={closeIcon} alt="closeIcon" />
        )}
      </button>
    </header>
  );
};

export default MobileMenu;
