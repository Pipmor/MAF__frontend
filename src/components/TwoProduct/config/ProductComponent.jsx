import { Link } from "react-router-dom";
import { Arrow } from "./Arrow.jsx";
import style from "./Product.module.css";
import {useTranslation} from "react-i18next";

export const ProductComponent = ({ title, image, path }) => {
    const { t } = useTranslation();
  console.log("image>>>", image);
  return (
    <div className={style.product}>
      <img src={image} alt="image" className={style.img} />
      <div className={style.text}>
        <h4 className={style.title}>{t(title)}</h4>
        <Link to={path} className={style.link}>
          Смотреть <Arrow />
        </Link>
      </div>
    </div>
  );
};
