import React, { useCallback, useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import submitFormData from "../../api/postFormData";
import { errorBorderColor } from "./formConstants.js";

const Form = () => {
  const [userEmail, setUserEmail] = useState("");
  const [validationErrors, setValidationErrors] = useState("");
  const [onBlurInput, setOnBlurInput] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleInputChange = useCallback(({ target: { value } }) => {
    // Ваша валидация для электронной почты
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidationErrors(regex.test(value) ? "" : "Некорректный адрес эл.почты");

    setUserEmail(value);
  }, []);

  const handleInputBlur = () => {
    setOnBlurInput(true);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    setShowSpinner(true);

    try {
      // Отправка данных на сервер
      await submitFormData({ email: userEmail });

      // Успешная отправка
      console.log("Данные успешно отправлены");
    } catch (error) {
      // Обработка ошибки при отправке
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
      <form className={styles.form}>
        <div className={styles.flexContainer}>
          <p className={styles.label}>
            Подписаться на новости
          </p>

          <Input
              value={userEmail}
              id="userEmail"
              type="email"
              name="userEmail"
              placeholder="Электронная почта"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              border={onBlurInput && (userEmail.trim() || validationErrors) && errorBorderColor}
              className={styles.email}
          />


          <Button onClick={handleButtonClick} className="button">
            {showSpinner && <Spinner />}
            <span style={{ color: showSpinner && "white" }}>
            {showSpinner ? "Загрузка..." : "Оставить заявку"}
          </span>
          </Button>
        </div>

        <p className={styles.errorText}>
          {(onBlurInput && (userEmail.trim() || validationErrors)) || ""}
        </p>
      </form>
  );
};

Form.propTypes = {
  isModal: PropTypes.bool,
};

export default React.memo(Form);
