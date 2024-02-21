import React, { useCallback, useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import submitFormData from "../../api/postFormData";
import MessageModal from "../MessageModal/MessageModal";
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from "../../constants/message";
import { initialErrorState, initialFormState, initialEmptyState, initialBlurState, emptyNameError, emptyPhoneError, errorBorderColor, inputValidation, formatPhoneNumber } from "./formConstants";

const Form = ({ isModal }) => {
  const [formState, setFormState] = useState(initialFormState);
  const [validationErrors, setValidationErrors] = useState(initialErrorState);
  const [emptyFields, setEmptyFields] = useState(initialEmptyState);
  const [onBlurInput, setOnBlurInput] = useState(initialBlurState);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({});
  const [phonePlace, setPhonePlace] = useState("Номер телефона");
  const [showSpinner, setShowSpinner] = useState(false);

  const { userName, userPhone, userEmail, userComment } = formState;

  const openModal = useCallback(() => setShowModal(true), [])
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
    if (name === "userName" || name === "userEmail" || name === "userPhone") {
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
      const formattedValue = formatPhoneNumber(value);
      setFormState((prevFormState) => ({
        ...prevFormState,
        [name]: formattedValue,
      }));
      formattedValue.length === 16 &&
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));

      return;
    }
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

    setPhonePlace("Номер телефона");
  };

  const handleInputFocus = useCallback(() => setPhonePlace("+996 *** *** ***"), []);

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
    if (!(e.currentTarget.form.checkValidity() && !validationErrors.userName)) return;
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
    <>
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
                placeholder="Имя"
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
              value={formState.userPhone}
              id="userPhone"
              type="phone"
              name="userPhone"
              placeholder={phonePlace}
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
          <div>
            <Input
              value={formState.userEmail}
              id="userEmail"
              type="email"
              name="userEmail"
              placeholder="Электронная почта(необязательно)"
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
        </div>

        <div className={styles.labeledTextarea}>
          <Input
            value={userComment}
            id="userComment"
            type="textarea"
            name="userComment"
            placeholder="Комментарий(необязательно)"
            maxLength={300}
            label={`${userComment.length}/300`}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.button}>
          <Button onClick={handleButtonClick} className="button">
            {showSpinner && <Spinner />}
            <span style={{ color: showSpinner && "white" }}>
              {showSpinner ? "Загрузка..." : "Оставить заявку"}
            </span>
          </Button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  isModal: PropTypes.bool,
};

export default React.memo(Form);
