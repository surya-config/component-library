import React from "react";
import { TooltipProps } from "./Tooltip.types";
import "./Tooltip.css";

function Tooltip({ show, toggleVisibility, children, content }: TooltipProps) {
  return (
    <div className={`tooltip`}>
      {children}
      <div className="tooltip__container">
        <div className="tooltip__content">{content}</div>
        <div className="tooltip__arrow"></div>
      </div>
    </div>
  );
}

export default Tooltip;
