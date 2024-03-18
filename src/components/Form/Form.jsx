import React, { useCallback, useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

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

    setShowSpinner(false);
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

Form.propTypes = {
  isModal: PropTypes.bool,
};

export default React.memo(Form);
