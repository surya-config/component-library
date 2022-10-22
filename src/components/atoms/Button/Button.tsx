import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

function Button({
  id = "",
  type = "button",
  width,
  height,
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      className={`button ${variant}-button ${className} ${
        fullWidth && "fullWidth-button"
      }`}
      style={{ width, height }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
