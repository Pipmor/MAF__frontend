import React, { useCallback, useState } from "react";
import styles from "./EmailForm.module.css";
import Input from "../../../../../life_print(exmaple 2.0)/life_print-frontend/src/components/Input/Input.jsx";
import Button from "../../../../../life_print(exmaple 2.0)/life_print-frontend/src/components/UI/Button/Button.jsx";
import PropTypes from "prop-types";
import Spinner from "../../../../../life_print(exmaple 2.0)/life_print-frontend/src/components/Spinner/Spinner.jsx";
import QuestionImage from "../../assets/images/Question.png";

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
} from "./emailConstants.js";

const EmailForm = ({ isModal }) => {
  const [formState, setFormState] = useState(initialFormState);
  const [validationErrors, setValidationErrors] = useState(initialErrorState);
  const [emptyFields, setEmptyFields] = useState(initialEmptyState);
  const [onBlurInput, setOnBlurInput] = useState(initialBlurState);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  const { userName, userPhone, userEmail, userComment } = formState;

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    const maxLength = name === "userComment" ? 300 : 50;

    setEmptyFields((prevEmptyFields) => ({
      ...prevEmptyFields,
      [name]: value.trim()
          ? ""
          : name === "userName"
              ? emptyNameError
              : emptyPhoneError,
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

      setFormState((prevFormState) => ({
        ...prevFormState,
        [name]: "+996 " + formattedValue,
      }));

      const finalValue = "+996 " + formattedValue;
      const { regex, errorMessage } = inputValidation[name];
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: regex.test(finalValue) ? "" : errorMessage,
      }));

      return;
    }

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value.slice(0, maxLength),
    }));
  }, []);

  const handleInputBlur = ({ target: { name, value } }) => {
    setEmptyFields((prevEmptyFields) => ({
      ...prevEmptyFields,
      [name]: value.trim()
          ? ""
          : name === "userName"
              ? emptyNameError
              : emptyPhoneError,
    }));
    setOnBlurInput((prevOnBlurInput) => ({
      ...prevOnBlurInput,
      [name]: true,
    }));
  };

  const handleInputFocus = useCallback((e) => {
    if (e.target.value === "") {
      setFormState((prevFormState) => ({
        ...prevFormState,
        userPhone: "+996 ",
      }));
    }
  }, []);

  const handleButtonClick = async (e) => {
    e.preventDefault();

    setEmptyFields({
      userName: userName.trim() ? "" : emptyNameError,
      userPhone: userPhone.trim() ? "" : emptyPhoneError,
    });

    setOnBlurInput({
      userName: true,
      userPhone: true,
      userEmail: true,
    });
    if (
        !(
            e.currentTarget.form.checkValidity() &&
            !validationErrors.userName &&
            !validationErrors.userPhone
        )
    )
      return;
    setShowSpinner(true);
    const formDataToSend = {
      name: userName,
      phone: userPhone.replace(/\s/g, ""),
      email: userEmail,
      comment: userComment,
    };

    try {
      const response = await submitFormData(formDataToSend);
      openModal();
      setModalMessage(SUCCESS_MESSAGE);
      setFormState(initialFormState);
    } catch (error) {
      openModal();
      setModalMessage(ERROR_MESSAGE);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          {showModal && (
              <MessageModal message={modalMessage} onClose={closeModal} />
          )}
          <form
              className={`${styles.form} ${isModal ? styles.modalForm : ""}`}
              onSubmit={handleButtonClick}
          >
            <div
                className={`${styles.inputContainer} ${
                    isModal ? styles.modalInputContainer : ""
                }`}
            >
              <div>
                <div className={styles.labeledInput}>
                  <Input
                      value={userName}
                      id="userName"
                      name="userName"
                      placeholder="Имя*"
                      required
                      maxLength={50}
                      label={`${userName.length}/50`}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      border={
                          onBlurInput.userName &&
                          (emptyFields.userName || validationErrors.userName) &&
                          errorBorderColor
                      }
                  />
                </div>
                <p className={styles.errorText}>
                  {(onBlurInput.userName &&
                          (emptyFields.userName || validationErrors.userName)) ||
                      ""}
                </p>
              </div>
              <div>
                <Input
                    value={formState.userEmail}
                    id="userEmail"
                    type="email"
                    name="userEmail"
                    placeholder="Электронная почта*"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    border={
                        !formState.userEmail ||
                        !onBlurInput.userEmail ||
                        (validationErrors.userEmail && errorBorderColor)
                    }
                />
                <p className={styles.errorText}>
                  {!userEmail ||
                      !onBlurInput.userEmail ||
                      validationErrors.userEmail}
                </p>
              </div>
              <div>
                <Input
                    value={formState.userPhone}
                    id="userPhone"
                    type="phone"
                    name="userPhone"
                    placeholder="Номер телефона"
                    required
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    border={
                        onBlurInput.userPhone &&
                        (emptyFields.userPhone || validationErrors.userPhone) &&
                        errorBorderColor
                    }
                />
                <p className={styles.errorText}>
                  {(onBlurInput.userPhone &&
                          (emptyFields.userPhone || validationErrors.userPhone)) ||
                      ""}
                </p>
              </div>
            </div>

            <div className={styles.labeledTextarea}>
              <Input
                  value={userComment}
                  id="userComment"
                  type="textarea"
                  name="userComment"
                  placeholder="Вопрос"
                  maxLength={300}
                  label={`${userComment.length}/300`}
                  onChange={handleInputChange}
              />
            </div>


            <p className={styles.requiredFieldsText}>
              * Поля обязательны к заполнению
            </p>
            <div className={styles.button}>
              <Button onClick={handleButtonClick} className="button">
                {showSpinner && <Spinner />}
                <span style={{ color: showSpinner && "white" }}>
                {showSpinner ? "Загрузка..." : "Оставить заявку"}
              </span>
              </Button>
            </div>
          </form>
        </div>
        <div className={styles.imageWrapper}>
          <img
              src={QuestionImage}
              alt="Question"
              className={styles.questionImage}
          />
        </div>
      </div>
  );
};

EmailForm.propTypes = {
  isModal: PropTypes.bool,
};

export default React.memo(EmailForm);
