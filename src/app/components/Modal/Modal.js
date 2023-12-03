import React from "react";
import "./Modal.css"; // Import your modal styles

const Modal = ({ title, children, onClose }) => {
  return (
    <dialog open className="modal" onClose={onClose}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
