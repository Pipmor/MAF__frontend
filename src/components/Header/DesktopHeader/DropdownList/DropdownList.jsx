import { Link } from "react-router-dom";
import styles from "./DropdownList.module.css";
import ArrowSVG from "../../../UI/ArrowSVG";

const DropdownList = ({
  contentNames,
  onHover,
  closeDropdown,
  selectedContent,
  contentType,
  servicesPathName,
}) => {
  return (
    <ul className={styles.dropdownList}>
      {contentNames.map((contentName) => {
        const isServices = contentType === "services";
        const LinkOrParagraph = isServices ? Link : "p";
        const linkProps = isServices
          ? {
              to: `/services/${
                servicesPathName[contentNames.indexOf(contentName)]
              }`,
            }
          : {};

        return (
          <li
            key={contentName}
            onMouseEnter={() => onHover(contentName)}
            className={styles.listContainer}
          >
            <LinkOrParagraph
              {...linkProps}
              className={`${styles.lists} ${
                selectedContent === contentName ? styles.selected : ""
              }`}
              onClick={isServices ? closeDropdown : undefined}
            >
              {contentName}
              <ArrowSVG />
            </LinkOrParagraph>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownList;
