import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
    <div className={`modal-overlay`}>
      <h3>modal content</h3>
      <button className='close-modal-btn'>
        <FaTimes />
      </button>
    </div>
  )
}

export default Modal
