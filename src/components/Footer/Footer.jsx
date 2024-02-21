import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { getContacts } from "../../api/getContacts";
import Logo from "../../assets/footer_logo.png";
import PhoneList from "../PhoneList/PhoneList";

import geeksIcon from "../../assets/icons/footericons/geeks.png";
import local from "../../assets/icons/footericons/local-two.png";
import time from "../../assets/icons/footericons/time.png";
import email from "../../assets/icons/footericons/mail.png";
import phone from "../../assets/icons/footericons/phone-telephone.png";
import telegram from "../../assets/icons/footericons/telegram.png";
import insta from "../../assets/icons/footericons/Brand.png";

const Footer = () => {
  const { data: contacts } = useSWR("/contacts", getContacts);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flexContainer}>
          <Link to="/" className={styles.logo}>
            <img src={Logo} alt="logo" />
          </Link>

          <address className={styles.address}>
            <FooterContact icon={local}>{contacts?.address}</FooterContact>
            <FooterContact icon={time}>{contacts?.working_hours}</FooterContact>
            <FooterContact icon={email}>{contacts?.email}</FooterContact>
            <FooterContact icon={phone}>
              <span>
                <PhoneList />
              </span>
            </FooterContact>
          </address>

          <ul className={styles.socialMedia}>
            <SocialMediaLink icon={telegram} href={contacts?.telegram_link} />
            <SocialMediaLink icon={insta} href={contacts?.instagram_link} />
          </ul>
        </div>

        <a
          href="https://www.instagram.com/geeks_pro"
          className={styles.geekspro}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Made by GeeksPro</p>
          <img src={geeksIcon} alt="geeks" className={styles.icons} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

const FooterContact = ({ icon, children }) => (
  <div className={styles.footerContact}>
    <img src={icon} />
    {children}
  </div>
);

const SocialMediaLink = ({ icon, href }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} />
    </a>
  </li>
);
