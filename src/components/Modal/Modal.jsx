import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

export function Modal(props) {
  const handleClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      props.closeModal();
    }
  };

  useEffect(() => {
    const keyDown = (evt) => {
      if (evt.code === "Escape") {
        props.closeModal();
      }
    };
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [props]);

  return createPortal(
    <div onClick={handleClose} className={css.overlay}>
      <div className={css.modal}>{props.children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}