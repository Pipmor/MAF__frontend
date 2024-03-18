import React, { useCallback, useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../UI/Button/Button";
import Spinner from "../Spinner/Spinner";
import submitFormData from "../../api/postFormData.js"; // Импортируем функцию отправки данных

const Form = () => {
  const [userEmail, setUserEmail] = useState("");
  const [onBlurInput, setOnBlurInput] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [validationErrors, setValidationErrors] = useState("");

  const handleInputChange = useCallback(({ target: { value } }) => {
    setUserEmail(value);
  }, []);

  const handleInputBlur = () => {
    setOnBlurInput(true);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidationErrors(regex.test(userEmail) ? "" : "Некорректный email");
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    setShowSpinner(true);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(userEmail)) {
      setValidationErrors("Некорректный email");
      setShowSpinner(false);
      return;
    }

    // Отправка данных
    try {
      await submitFormData({ email: userEmail }); // Вызов функции отправки данных
      alert("Данные успешно отправлены!"); // Ваше сообщение об успешной отправке
    } catch (error) {
      console.error("Ошибка при отправке данных:", error); // Обработка ошибок
      alert("Произошла ошибка при отправке данных. Пожалуйста, попробуйте снова позже."); // Ваше сообщение об ошибке
    } finally {
      setShowSpinner(false);
    }
  };

  return (
      <form className={styles.form}>
        <div className={styles.flexContainer}>
          <p className={styles.label}>Подписаться на новости</p>

          <Input
              value={userEmail}
              id="userEmail"
              type="email"
              name="userEmail"
              placeholder="Электронная почта"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              border={onBlurInput && userEmail.trim() && validationErrors && styles.errorBorderColor}
              className={styles.email}
          />

          <Button onClick={handleButtonClick} className="button">
            {showSpinner && <Spinner />}
            <span style={{ color: showSpinner && "black" }}>
            {showSpinner ? "Загрузка..." : "Оставить заявку"}
          </span>
          </Button>
        </div>

        <p className={styles.errorText}>
          {(onBlurInput && userEmail.trim() && validationErrors) || ""}
        </p>
      </form>
  );
};

export default Form;
