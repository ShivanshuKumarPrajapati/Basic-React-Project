import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
    <div className="modal-container ">
      <h3>Modal Content</h3>
      <FaTimes className="close-modal-btn" />
    </div>
  );
}

export default Modal
