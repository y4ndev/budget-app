import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <span className="modal__close" onClick={() => setActive(false)}></span>
      </div>
    </div>
  );
};

export default Modal;
