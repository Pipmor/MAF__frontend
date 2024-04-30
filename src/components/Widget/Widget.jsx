import { useState } from "react";
import useSWRImmutable from "swr/immutable";
import { getWidget } from "../../api/getWidget.js";
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
      <img src={imgSrc} alt="Chat Icon" />
    </a>
);

const Widget = () => {
  const { data: contacts } = useSWRImmutable("http://107.23.142.232:80/api/v1/chat/chats/", getWidget); // Используем getWidget для получения данных
  const [isOpen, setIsOpen] = useState(false);

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
          {contacts && contacts.map(contact => (
              <ChatIcon
                  key={contact.id}
                  className={contact.id === 1 ? styles.whatsapp : styles.telegram}
                  href={contact.chat_link}
                  imgSrc={contact.id === 1 ? whatsapp : telegram}
              />
          ))}
          <img className={styles.chat} src={chat} alt="Chat" onClick={handleClick} />
        </div>
      </div>
  );
};

export default Widget;
