import React, { useEffect } from "react";
import { BREAKPOINTS, Breakpoints } from "styles/breakpoints";
import { DialogModalProps } from "./DialogModal.types";
import "./DialogModal.css";

function DialogModal({
  title = "",
  show = false,
  toggleModalVisibility,
  children,
  showTitle = true,
  showCloseButton = true,
  maxWidth = "1024px",
  fullWidth = false,
  titlePadding = "1rem",
  contentPadding = "1rem",
}: DialogModalProps) {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = show ? "hidden" : "auto";
    }
  }, [show]);

  const getMaxWidth = () => {
    const breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"];
    if (breakpoints.includes(maxWidth)) {
      return BREAKPOINTS[maxWidth as Breakpoints];
    }
    return maxWidth;
  };

  if (!show) return <></>;
  return (
    <>
      <div className="modal__overlay" onClick={toggleModalVisibility}></div>
      <div
        className={`modal ${fullWidth && "modal__fullWidth"}`}
        style={{ maxWidth: getMaxWidth() }}
      >
        <div className="modal__header" style={{ padding: titlePadding }}>
          {showTitle && <div className="modal__title">{title}</div>}
          {showCloseButton && (
            <div className="modal__closeButton" onClick={toggleModalVisibility}>
              Close
            </div>
          )}
        </div>
        <div className="modal__content" style={{ padding: contentPadding }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default DialogModal;
