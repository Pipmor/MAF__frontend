import search from "../../assets/icons/header_icons/search.svg";
import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Найти интересующий товар"
      />
      <button className={styles.button}>
        <img src={search} alt="search-icon" className={styles.icon} />
      </button>
    </div>
  );
};
