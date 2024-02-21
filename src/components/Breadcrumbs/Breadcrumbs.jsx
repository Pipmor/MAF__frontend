import { useMatches } from "react-router-dom";
import { Fragment } from "react";
import Arrow from "../../assets/icons/right.png";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const matches = useMatches();

  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
  if (crumbs.length < 2) return null;

  return (
    <div>
      <ol className={`${styles.navList} container`}>
        {crumbs.map((crumb, index) => (
          <Fragment key={index}>
            {index > 0 && (
              <li>
                <img src={Arrow} alt="icon" />
              </li>
            )}
            <li>{crumb}</li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
