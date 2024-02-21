import React, { useState } from 'react';
import styles from "./Button.module.css";
import LongArrowSvg from "../Button/LongArrowSvg";
import ShortArrowSvg from "../Button/ShortArrowSvg";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Button = ({
  children, 
  disabled = false,
  type= "submit",
  onClick,
  className = "",
  withArrow= false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery("(max-width: 800px)");

  if(isMobile){
    return(
      <button 
      className={`${styles.button} ${withArrow ? styles.hovered : ''}`}
      type={type}
      disabled={false}
      onClick={onClick}
    >
      {children}
      {withArrow && <ShortArrowSvg/>}
    </button>
    )
  }else{
    return (
      <button 
        className={`${styles.button} ${isHovered && withArrow && !disabled && !isActive ? styles.hovered : ''} ${isActive ? styles.active : ''}`}
        type={type}
        disabled={false}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onBlur={() => setIsActive(false)}
      >
        {children}
        {isHovered && withArrow && !disabled && !isActive && <span className={styles.span}><LongArrowSvg/></span>}
        {withArrow && isActive && <ShortArrowSvg />}
      </button>
    )
  }
  
}

export default Button;