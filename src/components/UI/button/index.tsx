import React from "react";
import styles from './Button.module.scss';

interface IPropButton {
  text: string;
  color?: string;
  classes?: string
}

const Button: React.FC<IPropButton> = ({ text, color, classes }) => {
  const btnClassType = color ? [classes, `btn-${ color }`].join(' ') : styles['btn-primary'];

  return (
    <button className={btnClassType}>
      {text}
    </button>
  )
}

export default Button;
