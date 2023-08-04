import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  width: 80%;
  max-width: 500px;
  color: #000;
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #000;
`;

function Modal({ closeModal }) {
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>Thank you for your message!</h2>
        <p>I'll get back to you as soon as possible.</p>
        <CloseButton size={20} onClick={closeModal} />
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
