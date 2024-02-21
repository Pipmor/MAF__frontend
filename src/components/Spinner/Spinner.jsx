import styled from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styled.spinnerContainer}>
      <div className={styled.spinner}></div>
    </div>
  );
};

export default Spinner;
