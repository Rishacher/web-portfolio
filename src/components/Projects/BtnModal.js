import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../UI/Button';
import './BtnModal.css';

const BtnModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button className="open-button" onClick={openModal}>
        Click me! -_^
      </Button>
      <Modal isOpen={isOpen} closeModal={closeModal} videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
    </div>
  );
};

export default BtnModal;
