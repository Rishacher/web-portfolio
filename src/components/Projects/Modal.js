import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, videoUrl }) => {

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className='button-container-modal'>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tt7gP_IW-1w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
