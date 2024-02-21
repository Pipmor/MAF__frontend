import { useState } from "react";
import chat from "./icons/chat.svg";
import whatsapp from "./icons/whatsapp.svg";
import telegram from "./icons/telegram.svg";
import styles from "./Widget.module.css";

const ChatIcon = ({ className, href, imgSrc }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={imgSrc} alt="" />
  </a>
);

const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  //FIX_ME
  const tgName = "lifeprint2017";
  const waNumber = "+996556204977".replace("+", "");

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsOpen(true);
    }, 0);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.fixedContainer}>
      <div
        className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ChatIcon
          className={styles.telegram}
          href={`https://t.me/${tgName}`}
          imgSrc={telegram}
        />
        <ChatIcon
          className={styles.whatsapp}
          href={`https://wa.me/${waNumber}`}
          imgSrc={whatsapp}
        />
        <img className={styles.chat} src={chat} alt="" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Widget;
