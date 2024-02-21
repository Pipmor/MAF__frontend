import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({
  id,
  type = "text",
  name,
  placeholder,
  required,
  label,
  onChange,
  onBlur,
  onFocus,
  value,
  border,
}) => {
  const inputProps = {
    id,
    type,
    name,
    placeholder,
    required,
    className: styles.inputClass,
    onChange,
    onBlur,
    onFocus,
    value,
  };

  return (
    <>
      {label && <span>{label}</span>}
      {type === "textarea" ? (
        <textarea {...inputProps} />
      ) : (
        <input
          style={{ border: border || "2px solid var(--border-color)" }}
          {...inputProps}
        />
      )}
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default Input;
