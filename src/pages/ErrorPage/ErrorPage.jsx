import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/images/errorimage.png";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className={styles.errorWrapper}>
      <div>
        {error && (
          <div className={styles.errorContainer}>
            <Link to="/" replace>
              <img
                src={errorImage}
                className={styles.errorImage}
                alt="errorImage"
              />
            </Link>
            <h1 className={styles.heading}>ОШИБКА 404</h1>
            <p className={styles.errorText}>
              Извините, страница не найдена, возможно, она была перемещена,
              удалена или временно недоступна; проверьте правильность введенного
              адреса.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
