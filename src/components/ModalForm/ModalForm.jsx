import React, { useCallback, useState, useEffect } from "react";
import styles from "./ModalForm.module.css";
import Input from "../Input/Input.jsx";
import Button from "../UI/Button/Button.jsx";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner.jsx";
import postModalData from "../../api/postModalData.js"; // Здесь изменено
import {
  initialErrorState,
  initialFormState,
  initialEmptyState,
  initialBlurState,
  emptyNameError,
  emptyPhoneError,
  errorBorderColor,
  inputValidation,
  formatPhoneNumber,
} from "./modalConstants.js";
import { useTranslation } from "react-i18next";

const ModalForm = ({ isModal }) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState(initialFormState);
  const [validationErrors, setValidationErrors] = useState(initialErrorState);
  const [emptyFields, setEmptyFields] = useState(initialEmptyState);
  const [onBlurInput, setOnBlurInput] = useState(initialBlurState);
  const [showModal, setShowModal] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setFormState(initialFormState);
  }, []);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    const maxLength = name === "userComment" ? 300 : 50;

    setEmptyFields((prevEmptyFields) => ({
      ...prevEmptyFields,
      [name]: value.trim() ? "" : name === "userName" ? emptyNameError : emptyPhoneError,
    }));

    if (name === "userName" || name === "userEmail") {
      const { regex, errorMessage } = inputValidation[name];
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: regex.test(value) ? "" : errorMessage,
      }));
    }

    setOnBlurInput((prevOnBlurInput) => ({
      ...prevOnBlurInput,
      [name]: false,
    }));

    if (name === "userPhone") {
      let correctedValue = value;
      if (!value.startsWith("+996")) {
        correctedValue = "+996 " + value.replace(/[^\d]/g, "");
      }
      let rawValue = correctedValue.slice(5).replace(/[^\d]/g, "");
      const formattedValue = formatPhoneNumber(rawValue);

      const finalValue = "+996 " + formattedValue;
      const { regex, errorMessage } = inputValidation[name];
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: regex.test(finalValue) ? "" : errorMessage,
      }));
    }

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowSpinner(true);
      // Здесь вызывается функция postModalData для отправки данных формы
      const response = await postModalData({
        name: formState.userName,
        phone: formState.userPhone.replace(/\s/g, ""),
        email: formState.userEmail,
        questions: formState.userComment,
      });
      openModal(); // После успешной отправки данных вызывается функция openModal
      setFormState(initialFormState); // Сбрасываем состояние формы
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <div>
              <div className={styles.labeledInput}>
                <Input
                    value={formState.userName}
                    id="userName"
                    name="userName"
                    placeholder={t('emailName')}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    border={onBlurInput.userName && (emptyFields.userName || validationErrors.userName) && errorBorderColor}
                />
              </div>
              <p className={styles.errorText}>
                {(onBlurInput.userName && (emptyFields.userName || validationErrors.userName)) || ""}
              </p>
            </div>
            <div>
              <Input
                  value={formState.userEmail}
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  placeholder={t('emailReq')}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                  border={validationErrors.userEmail && errorBorderColor}
              />
              <p className={styles.errorText}>
                {validationErrors.userEmail && "Некорректный адрес электронной почты"}
              </p>
            </div>
            <div>
              <Input
                  value={formState.userPhone}
                  id="userPhone"
                  type="phone"
                  name="userPhone"
                  placeholder={t('emailPhone')}
                  required
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                  border={onBlurInput.userPhone && (emptyFields.userPhone || validationErrors.userPhone) && errorBorderColor}
              />
              <p className={styles.errorText}>
                {(onBlurInput.userPhone && (emptyFields.userPhone || validationErrors.userPhone)) || ""}
              </p>
            </div>
            <div className={styles.labeledTextarea}>
              <Input
                  value={formState.userComment}
                  id="userComment"
                  type="textarea"
                  name="userComment"
                  placeholder={t('emailQuestion')}
                  maxLength={300}
                  label={`${formState.userComment.length}/300`}
                  onChange={handleInputChange}
              />
            </div>
            <p className={styles.requiredFieldsText}>{t('requiredFields')}</p>
            <div className={styles.button}>
              <Button onClick={handleSubmit} className="button">
                {showSpinner && <Spinner />}
                <span style={{ color: showSpinner && "white" }}>
                {showSpinner ? t('loading') : t('submitApplication')}
              </span>
              </Button>
            </div>
          </form>
        </div>
        {showModal && (
            <div className={styles.modalBackdrop}>
              <div className={styles.modalContent}>
                <h2>Данные отправлены!</h2>
                <Button onClick={closeModal}>
                  Закрыть
                </Button>
              </div>
            </div>
        )}
        {showSpinner && <Spinner />}
      </div>
  );
};

ModalForm.propTypes = {
  isModal: PropTypes.bool,
};

export default React.memo(ModalForm);
